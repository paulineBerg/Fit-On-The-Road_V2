declare global {
  interface Window {
    __FIT_CONFIG__?: {
      gtmId?: string;
      siteUrl?: string;
      contactEndpoint?: string;
      contactCooldownSeconds?: number;
      captchaProvider?: "recaptcha" | "turnstile";
      captchaSiteKey?: string;
      recaptchaAction?: string;
    };
  }
}

export {};
