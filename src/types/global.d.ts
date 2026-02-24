declare global {
  interface Window {
    __FIT_CONFIG__?: {
      gtmId?: string;
      siteUrl?: string;
    };
  }
}

export {};
