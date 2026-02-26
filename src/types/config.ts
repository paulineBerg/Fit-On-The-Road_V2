export interface FitConfig {
  gtmId?: string;
  siteUrl?: string;
  contactEndpoint?: string;
  contactCooldownSeconds?: number;
  captchaProvider?: "recaptcha" | "turnstile";
  captchaSiteKey?: string;
  recaptchaAction?: string;
}

export const DEFAULT_CONTACT_COOLDOWN_SECONDS = 45;
export const DEFAULT_RECAPTCHA_ACTION = "contact";
