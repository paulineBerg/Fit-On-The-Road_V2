/* eslint-disable no-underscore-dangle */
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

const { env } = import.meta;

const currentConfig =
  (window as Record<string, FitConfig>).__FIT_CONFIG__ ?? {};

(window as Record<string, FitConfig>).__FIT_CONFIG__ = {
  ...currentConfig,
  gtmId: currentConfig.gtmId ?? env.VITE_GTM_ID,
  siteUrl: (
    currentConfig.siteUrl ??
    env.VITE_SITE_URL ??
    window.location.origin
  )?.replace(/\/$/, ""),
  contactEndpoint: currentConfig.contactEndpoint ?? env.VITE_CONTACT_ENDPOINT,
  contactCooldownSeconds:
    currentConfig.contactCooldownSeconds ??
    Number(
      env.VITE_CONTACT_COOLDOWN_SECONDS ?? DEFAULT_CONTACT_COOLDOWN_SECONDS,
    ),
  captchaProvider:
    currentConfig.captchaProvider ??
    (env.VITE_CONTACT_CAPTCHA_PROVIDER as FitConfig["captchaProvider"]) ??
    (currentConfig.captchaSiteKey ||
    env.VITE_CONTACT_CAPTCHA_SITE_KEY ||
    env.VITE_RECAPTCHA_SITE_KEY ||
    env.VITE_RECAPTCHA_V2_SITE_KEY
      ? "recaptcha"
      : undefined),
  captchaSiteKey:
    currentConfig.captchaSiteKey ??
    env.VITE_CONTACT_CAPTCHA_SITE_KEY ??
    env.VITE_RECAPTCHA_SITE_KEY ??
    env.VITE_RECAPTCHA_V2_SITE_KEY,
  recaptchaAction:
    currentConfig.recaptchaAction ??
    env.VITE_RECAPTCHA_ACTION ??
    DEFAULT_RECAPTCHA_ACTION,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
