<?php
return [
    // Config privée (ne pas exposer côté client)
    'smtpHost' => 'smtp.ionos.fr',
    'smtpPort' => 465,
    'smtpUser' => 'contact@fit-ontheroad.fr',
    'smtpPass' => 'Jance78*NoEz!IONOS', // laisser vide si mail() local suffit
    'smtpFrom' => 'contact@fit-ontheroad.fr',
    'smtpTo' => 'contact@fit-ontheroad.fr',
    // reCAPTCHA v3 secret (correspond au site key 6Lco5HQsAAAAADSQqwNChGdySwH9OzBEO9V6x7UN)
    'recaptchaSecret' => '6Lco5HQsAAAAAOW_CT8u39HHDEu3H1lq2SXplMBe',
];
