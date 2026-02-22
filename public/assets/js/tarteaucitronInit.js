(function initTacWithRetry(maxRetries) {
  if (typeof window === "undefined") return;
  if (window.tarteaucitron) {
(function initTacWithRetry(maxRetries) {
  if (typeof window === "undefined") return;
  if (window.tarteaucitron) {
    // Déclaration minimale du service GTM pour éviter de charger tarteaucitron.services.js (244 Ko)
    tarteaucitron.services.googletagmanager = {
      key: "googletagmanager",
      type: "api",
      name: "Google Tag Manager",
      uri: "https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/",
      needConsent: true,
      cookies: ["_ga", "_gat", "_gid"],
      js() {
        if (!tarteaucitron.user.googletagmanagerId) return;
        tarteaucitron.addScript(
          `https://www.googletagmanager.com/gtm.js?id=${tarteaucitron.user.googletagmanagerId}`,
          "",
          () => {},
          true,
        );
      },
      fallback() {},
    };

    tarteaucitron.init({
      privacyUrl: "https://fit-ontheroad.fr/terms",
      bodyPosition: "bottom",
      hashtag: "#FitOnTheRoad",
      cookieName: "fitontheroad",
      orientation: "middle",
      groupServices: false,
      showDetailsOnClick: false,
      serviceDefaultState: "wait",
      showAlertSmall: false,
      cookieslist: false,
      showIcon: true,
      iconSrc: "/favicon/favicon-kettle-red.png",
      iconPosition: "BottomLeft",
      adblocker: false,
      DenyAllCta: true,
      AcceptAllCta: true,
      highPrivacy: true,
      alwaysNeedConsent: false,
      handleBrowserDNTRequest: false,
      removeCredit: false,
      moreInfoLink: false,
      useExternalCss: true,
      useExternalJs: true,
      readmoreLink: "",
      mandatory: true,
      mandatoryCta: true,
      googleConsentMode: true,
      partnersList: false,
    });

    // Google Tag Manager (consent-managed)
    tarteaucitron.user.googletagmanagerId = "GTM-NHKKQ7NT";
    (tarteaucitron.job = tarteaucitron.job || []).push("googletagmanager");
    return;
  }

  if (maxRetries <= 0) return;
  setTimeout(() => initTacWithRetry(maxRetries - 1), 50);
})(200);
    return;
  }

  if (maxRetries <= 0) return;
  setTimeout(() => initTacWithRetry(maxRetries - 1), 50);
})(200);
