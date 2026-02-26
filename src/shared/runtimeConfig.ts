/* eslint-disable no-underscore-dangle */
import {
  DEFAULT_CONTACT_COOLDOWN_SECONDS,
  DEFAULT_RECAPTCHA_ACTION,
  type FitConfig,
} from "@app/types/config";

type EnvDefaults = Partial<FitConfig>;

const applyRuntimeConfig = (envDefaults: EnvDefaults) => {
  const currentConfig =
    (window as Record<string, FitConfig>).__FIT_CONFIG__ ?? {};
  const merged: FitConfig = {
    contactCooldownSeconds: DEFAULT_CONTACT_COOLDOWN_SECONDS,
    recaptchaAction: DEFAULT_RECAPTCHA_ACTION,
    ...envDefaults,
    ...currentConfig, // runtime overrides (config.js / inline)
  };
  (window as Record<string, FitConfig>).__FIT_CONFIG__ = merged;
  return merged;
};

export const getRuntimeConfigSync = (): FitConfig =>
  (window as Record<string, FitConfig>).__FIT_CONFIG__ ?? {
    contactCooldownSeconds: DEFAULT_CONTACT_COOLDOWN_SECONDS,
    recaptchaAction: DEFAULT_RECAPTCHA_ACTION,
  };

let hydrationStarted = false;

export const hydrateRuntimeConfigAsync = (envDefaults: EnvDefaults) => {
  if (hydrationStarted) return Promise.resolve();
  hydrationStarted = true;

  return new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.src = "/config.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      applyRuntimeConfig(envDefaults);
      resolve();
    };
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
};

export const initializeRuntimeConfig = (envDefaults: EnvDefaults) =>
  applyRuntimeConfig(envDefaults);
