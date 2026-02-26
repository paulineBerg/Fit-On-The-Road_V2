// FICHIER DE CONFIGURATION PUBLIQUE 
// Renseignez les valeurs ci-dessous ; elles seront lues au runtime (sans rebuild).
// Laissez une valeur vide pour désactiver GTM sur un environnement.
window.__FIT_CONFIG__ = {
  gtmId: "GTM-NHKKQ7NT", // ex: "GTM-XXXXXXX"
  siteUrl: "https://fit-ontheroad.fr", // ex: "https://staging.fit-ontheroad.fr"
  contactEndpoint: "https://fit-ontheroad.fr/api/contact.php", // endpoint HTTP qui retourne 2xx/4xx
  contactCooldownSeconds: 45,
  captchaProvider: "recaptcha", // "recaptcha" | "turnstile" | undefined
  captchaSiteKey: "6Lco5HQsAAAAADSQqwNChGdySwH9OzBEO9V6x7UN", // reCAPTCHA v3 site key
  recaptchaAction: "contact",
};
