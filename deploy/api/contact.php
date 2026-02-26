<?php
// Contact endpoint en PHP (pas de Node). A placer côté serveur, non public.
// Config : utilisez config/config.php (non versionné) ou des variables d'environnement.

// Chargement config privée
$config = [];
$configPath = __DIR__ . '/../config/config.php';
if (file_exists($configPath)) {
    $config = include $configPath;
    if (!is_array($config)) {
        $config = [];
    }
}

// Utilitaires
function json_response(int $status, array $body): void {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($body);
    exit;
}

function append_log(array $entry): void {
    $logDir = __DIR__ . '/../logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0775, true);
    }
    $line = json_encode($entry) . "\n";
    @file_put_contents($logDir . '/contact.log', $line, FILE_APPEND | LOCK_EX);
}

function hash_email(string $email): string {
    if ($email === '') return '';
    $parts = explode('@', $email);
    $domain = $parts[1] ?? '';
    return substr(hash('sha256', $email), 0, 12) . ($domain ? '@' . $domain : '');
}

// Rate limit basique fichier
function is_rate_limited(string $ip, int $max, int $windowMs): bool {
    $file = sys_get_temp_dir() . '/fitontheroad_rl.json';
    $now = microtime(true) * 1000;
    $data = [];
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true) ?: [];
    }
    $entry = $data[$ip] ?? ['count' => 0, 'expires' => 0];
    if ($entry['expires'] < $now) {
        $entry = ['count' => 0, 'expires' => $now + $windowMs];
    }
    $entry['count']++;
    $data[$ip] = $entry;
    file_put_contents($file, json_encode($data));
    return $entry['count'] > $max;
}

// Récup requête
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

// CORS (utile si le front est servi depuis un autre domaine ou un preview)
// Autorise par défaut toutes les origines mais peut être restreint via
// CONTACT_ALLOWED_ORIGINS (liste séparée par des virgules) en env/config.php.
$allowedOriginsEnv = getenv('CONTACT_ALLOWED_ORIGINS') ?: ($config['allowedOrigins'] ?? '');
$allowedOrigins = array_filter(array_map('trim', explode(',', $allowedOriginsEnv)));
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowAnyOrigin = empty($allowedOrigins) || in_array('*', $allowedOrigins, true);

if ($allowAnyOrigin && $origin) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
} elseif ($allowAnyOrigin) {
    header('Access-Control-Allow-Origin: *');
} elseif ($origin && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

if ($method === 'OPTIONS') {
    json_response(204, ['success' => true, 'message' => 'preflight ok']);
}

if ($method !== 'POST') {
    header('Allow: POST');
    json_response(405, ['success' => false, 'message' => 'Méthode non autorisée']);
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) {
    $body = $_POST ?: [];
}

$email = trim($body['email'] ?? '');
$message = trim($body['message'] ?? '');
$phone = trim($body['phone'] ?? '');
$consent = filter_var($body['consent'] ?? false, FILTER_VALIDATE_BOOLEAN);
$userType = $body['userType'] ?? 'unknown';
$name = trim($body['name'] ?? '');
$captchaToken = $body['captchaToken'] ?? '';
$captchaProvider = $body['captchaProvider'] ?? '';
$honeypot = trim($body['website'] ?? '');
$source = $body['source'] ?? '';

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

if ($honeypot !== '') {
    append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 400, 'reason' => 'honeypot']);
    json_response(400, ['success' => false, 'message' => 'Requête bloquée.']);
}

if (is_rate_limited($ip, 5, 60_000)) {
    append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 429, 'reason' => 'rate_limit']);
    json_response(429, ['success' => false, 'message' => 'Trop de tentatives, merci de patienter.']);
}

if (!preg_match('/\S+@\S+\.\S+/', $email)) {
    append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 400, 'reason' => 'invalid_email', 'email' => hash_email($email)]);
    json_response(400, ['success' => false, 'message' => 'Email invalide']);
}
if (strlen($message) < 5) {
    append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 400, 'reason' => 'message_too_short', 'email' => hash_email($email), 'len' => strlen($message)]);
    json_response(400, ['success' => false, 'message' => 'Merci de préciser votre demande (≥ 5 caractères)']);
}

// reCAPTCHA v3 (optionnel)
$recaptchaSecret = getenv('CONTACT_RECAPTCHA_SECRET') ?: ($config['recaptchaSecret'] ?? '');
if ($captchaProvider === 'recaptcha' && $recaptchaSecret && !$captchaToken) {
    append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 400, 'reason' => 'captcha_missing', 'email' => hash_email($email)]);
    json_response(400, ['success' => false, 'message' => 'Captcha requis (jeton manquant)']);
}

if ($captchaProvider === 'recaptcha' && $recaptchaSecret && $captchaToken) {
    $params = http_build_query([
        'secret' => $recaptchaSecret,
        'response' => $captchaToken,
        'remoteip' => $ip,
    ]);
    $resp = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'content' => $params,
            'timeout' => 5,
        ],
    ]));
    $data = json_decode($resp, true);
    $success = $data['success'] ?? false;
    $score = $data['score'] ?? null;
    if (!$success) {
        append_log([
            'ts' => date('c'),
            'ip' => $ip,
            'status' => 400,
            'reason' => 'captcha_failed',
            'email' => hash_email($email),
            'score' => $score,
            'action' => $data['action'] ?? null,
            'error-codes' => $data['error-codes'] ?? null,
        ]);
        json_response(400, ['success' => false, 'message' => 'Captcha invalide (Google n’a pas validé le jeton)']);
    }
    // Score non bloquant pour éviter les faux positifs en prod ; on ne log que pour suivi
    append_log([
        'ts' => date('c'),
        'ip' => $ip,
        'status' => 200,
        'reason' => 'captcha_pass',
        'email' => hash_email($email),
        'score' => $score,
        'action' => $data['action'] ?? null,
    ]);
}

// Envoi email via mail() (IONOS accepte en général l'envoi local). Pour SMTP, installer PHPMailer.
$to = getenv('SMTP_TO') ?: ($config['smtpTo'] ?? 'contact@fit-ontheroad.fr');
$from = getenv('SMTP_FROM') ?: ($config['smtpFrom'] ?? 'contact@fit-ontheroad.fr');
$subject = "Contact Fit On The Road ({$userType})";
$headers = [
    'From' => $from,
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
];
$bodyText = "Nom: " . ($name ?: 'N/A') . "\n" .
    "Email: {$email}\n" .
    "Téléphone: " . ($phone ?: 'N/A') . "\n" .
    "Consentement: " . ($consent ? 'Oui' : 'Non') . "\n" .
    "Type: {$userType}\n" .
    "Source: " . ($source ?: 'N/A') . "\n\n" .
    $message;

$headersStr = '';
foreach ($headers as $k => $v) {
    $headersStr .= "$k: $v\r\n";
}

$sent = @mail($to, $subject, $bodyText, $headersStr);

if ($sent) {
    append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 200, 'reason' => 'success', 'email' => hash_email($email), 'len' => strlen($message), 'source' => $source]);
    json_response(200, ['success' => true]);
}

append_log(['ts' => date('c'), 'ip' => $ip, 'status' => 500, 'reason' => 'email_send_failed', 'email' => hash_email($email)]);
json_response(500, ['success' => false, 'message' => "Impossible d'envoyer le message pour le moment."]);
