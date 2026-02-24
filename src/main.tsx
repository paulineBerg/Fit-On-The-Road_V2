/* eslint-disable no-underscore-dangle */
import React from "react";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "@app/App";
import "@styles/index.css";

type FitConfig = {
  gtmId?: string;
  siteUrl?: string;
};

const { env } = import.meta;

const currentConfig =
  (window as Record<string, FitConfig>).__FIT_CONFIG__ ?? {};

(window as Record<string, FitConfig>).__FIT_CONFIG__ = {
  ...currentConfig,
  gtmId: currentConfig.gtmId ?? env.VITE_GTM_ID,
  siteUrl: currentConfig.siteUrl ?? env.VITE_SITE_URL ?? window.location.origin,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
