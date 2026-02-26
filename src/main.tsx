import React from "react";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "@app/App";
import "@styles/index.css";
import {
  DEFAULT_CONTACT_COOLDOWN_SECONDS,
  DEFAULT_RECAPTCHA_ACTION,
  type FitConfig,
} from "@app/types/config";
import {
  hydrateRuntimeConfigAsync,
  initializeRuntimeConfig,
} from "@shared/runtimeConfig";

const env = (import.meta as { env?: Record<string, string> })?.env ?? {};

const envDefaults: FitConfig = {
  gtmId: env.VITE_GTM_ID,
  siteUrl: (env.VITE_SITE_URL ?? window.location.origin)?.replace(/\/$/, ""),
  contactEndpoint: env.VITE_CONTACT_ENDPOINT,
  contactCooldownSeconds: Number(
    env.VITE_CONTACT_COOLDOWN_SECONDS ?? DEFAULT_CONTACT_COOLDOWN_SECONDS,
  ),
  captchaProvider:
    (env.VITE_CONTACT_CAPTCHA_PROVIDER as FitConfig["captchaProvider"]) ??
    (env.VITE_CONTACT_CAPTCHA_SITE_KEY ||
    env.VITE_RECAPTCHA_SITE_KEY ||
    env.VITE_RECAPTCHA_V2_SITE_KEY
      ? "recaptcha"
      : undefined),
  captchaSiteKey:
    env.VITE_CONTACT_CAPTCHA_SITE_KEY ??
    env.VITE_RECAPTCHA_SITE_KEY ??
    env.VITE_RECAPTCHA_V2_SITE_KEY,
  recaptchaAction: env.VITE_RECAPTCHA_ACTION ?? DEFAULT_RECAPTCHA_ACTION,
};

initializeRuntimeConfig(envDefaults);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);

const scheduleHydration = () => {
  const hydrate = () => {
    hydrateRuntimeConfigAsync(envDefaults);
  };

  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(hydrate, { timeout: 1500 });
  } else {
    setTimeout(hydrate, 0);
  }
};

scheduleHydration();
