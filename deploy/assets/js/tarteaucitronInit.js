(function initTacWithRetry(maxRetries) {
  if (typeof window === "undefined") return;

  // ✅ Consent Mode requires gtag() to exist (at least as a stub) so that consent commands
  // are pushed to dataLayer even before GTM/gtag is fully loaded.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  if (window.tarteaucitron) {
    const config = window.__FIT_CONFIG__ || {};
    const siteUrl = (config.siteUrl || window.location.origin).replace(/\/$/, "");
    const gtmId = config.gtmId;
    const recaptchaSiteKey = config.captchaSiteKey;

    const navigatorLang = (navigator.language || navigator.userLanguage || "fr")
      .slice(0, 2)
      .toLowerCase();
    window.tarteaucitronForceLanguage = navigatorLang === "en" ? "en" : "fr";

    tarteaucitron.init({
      privacyUrl: `${siteUrl}/terms`,
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
      useExternalCss: false,
      useExternalJs: false,
      readmoreLink: "",
      mandatory: true,
      mandatoryCta: true,
      googleConsentMode: true,
      partnersList: false,
    });

    // ✅ Consent Mode v2 par défaut : tout refusé jusqu'au choix utilisateur
    // IMPORTANT: use window.gtag (standard) so Google/GTM can read it.
    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 800,
    });

    const grantAll = () => {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    };

    const denyAll = () => {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    };

    // ✅ Événements fiables TAC pour le service GTM
    // (tes events gtag_allowed / gtag_loaded ne se déclenchaient probablement pas)
    document.addEventListener("googletagmanager_allowed", grantAll);
    document.addEventListener("googletagmanager_disallowed", denyAll);

    // Thème tarteaucitron aux couleurs du site (fond sombre + rouge primaire)
    const injectCustomTacTheme = () => {
      const style = document.createElement("style");
      style.id = "tac-custom-theme";
      style.textContent = `
        /* Typo & base text */
        #tarteaucitronRoot * { font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif !important; }
        #tarteaucitronRoot { color: #f5f5f5 !important; }

        /* Global backgrounds */
        #tarteaucitronAlertBig,
        #tarteaucitronAlertSmall,
        #tarteaucitron {
          background: linear-gradient(135deg, #0b0f12 0%, #151a20 50%, #0b0f12 100%) !important;
          border-color: #1f252c !important;
          color: #f5f5f5 !important;
        }
        #tarteaucitronAlertBig,
        .tarteaucitronAlertBigTop,
        .tarteaucitronAlertBigBottom {
          border: 1px solid rgba(255,255,255,0.06) !important;
          box-shadow: 0 18px 60px rgba(0,0,0,0.35) !important;
        }

        /* Texts */
        #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert,
        .tarteaucitronLine,
        .tarteaucitronBorder { color: #f5f5f5 !important; }
        .tarteaucitronH1, .tarteaucitronH2, .tarteaucitronH3 { color: #ffffff !important; }
        #tarteaucitronServices .tarteaucitronTitle button { color: #f5f5f5 !important; }
        #tarteaucitronDisclaimerAlert strong { color: #ed130d !important; }
        #tarteaucitronPrivacyUrl,
        #tarteaucitronPrivacyUrl:visited,
        #tarteaucitronPrivacyUrlDialog,
        #tarteaucitronPrivacyUrlDialog:visited { color: #ffffff !important; }
        a.tarteaucitronSelfLink { display: none !important; }

        /* Buttons - banner */
        #tarteaucitronAlertBig #tarteaucitronPersonalize2,
        #tarteaucitronAlertBig .tarteaucitronAllow,
        #tarteaucitronAlertBig #tarteaucitronAllAllowed {
          background: #ed130d !important;
          border-color: #ed130d !important;
          color: #ffffff !important;
        }
        #tarteaucitronAlertBig #tarteaucitronAllDenied2,
        #tarteaucitronAlertBig .tarteaucitronDeny {
          background: transparent !important;
          border: 1px solid #666a72 !important;
          color: #f5f5f5 !important;
        }
        #tarteaucitronAlertBig #tarteaucitronCloseAlert {
          background: #f5f5f5 !important;
          color: #0b0f12 !important;
          border-color: #f5f5f5 !important;
        }

        /* Buttons - modal/panel */
        #tarteaucitron .tarteaucitronAllow,
        #tarteaucitron #tarteaucitronSaveButton,
        #tarteaucitron #tarteaucitronAllAllowed,
        #tarteaucitron #tarteaucitronAllAllowed2 {
          background: #ed130d !important;
          border-color: #ed130d !important;
          color: #ffffff !important;
        }
        #tarteaucitron .tarteaucitronDeny,
        #tarteaucitron #tarteaucitronAllDenied,
        #tarteaucitron #tarteaucitronAllDenied2 {
          background: #f5f5f5 !important;
          color: #0b0f12 !important;
          border-color: #f5f5f5 !important;
        }

        /* Section accents */
        #tarteaucitron #tarteaucitronServices_mandatory .tarteaucitronH3,
        #tarteaucitron #tarteaucitronServices_api .tarteaucitronH2,
        #tarteaucitron #tarteaucitronServices_api .tarteaucitronH3 {
          color: #f5f5f5 !important;
        }

        /* Disclaimer sentence inside the modal (keep it black for readability) */
        #tarteaucitron #tarteaucitronInfo,
        #tarteaucitron #tarteaucitronInfo * {
          color: #000000 !important;
        }

        /* Panel body + rows */
        #tarteaucitron .tarteaucitronBorder,
        #tarteaucitron .tarteaucitronMainLine,
        #tarteaucitron .tarteaucitronLine {
          background: rgba(255,255,255,0.04) !important;
          border-color: #1f252c !important;
          color: #f5f5f5 !important;
        }
        #tarteaucitron .tarteaucitronLine:hover {
          background: rgba(255,255,255,0.06) !important;
        }
        #tarteaucitron .tarteaucitronName a,
        #tarteaucitron .tarteaucitronName button,
        #tarteaucitron .tarteaucitronDetails,
        #tarteaucitron .tarteaucitronInfo {
          color: #f5f5f5 !important;
        }
        #tarteaucitron .tarteaucitronName span {
          color: #f5f5f5 !important;
        }
        #tarteaucitron .tarteaucitronTitle a,
        #tarteaucitron .tarteaucitronTitle button {
          color: #f5f5f5 !important;
        }
        #tarteaucitron #tarteaucitronServices .tarteaucitronTitle + [id^="tarteaucitronDetails"] {
          background: rgba(255,255,255,0.03) !important;
          color: #d7d7d7 !important;
        }
        #tarteaucitron #tarteaucitronDisclaimer,
        #tarteaucitron #tarteaucitronInfo {
          color: #d7d7d7 !important;
        }
        #tarteaucitron .tarteaucitronCookiesListMain,
        #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList {
          background: rgba(255,255,255,0.04) !important;
          color: #f5f5f5 !important;
          border-color: #1f252c !important;
        }
        #tarteaucitronAlertSmall {
          background: rgba(11,15,18,0.96) !important;
          color: #f5f5f5 !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.45) !important;
        }
        #tarteaucitronAlertSmall #tarteaucitronManager {
          color: #f5f5f5 !important;
        }
        /* Close / toggle buttons */
        #tarteaucitronCloseCross,
        #tarteaucitronClosePanel,
        #tarteaucitronAlertSmall #tarteaucitronClosePanelCookie {
          color: #f5f5f5 !important;
          background: transparent !important;
          border-color: #444c56 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Force the privacy link color to stay white (banner + modal), even after TAC rerenders.
    const syncPrivacyLinkColor = () => {
      ["tarteaucitronPrivacyUrl", "tarteaucitronPrivacyUrlDialog"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.style.setProperty("color", "#ffffff", "important");
        }
      });
    };

    const startPrivacyLinkWatcher = () => {
      const tryAttach = () => {
        const root = document.getElementById("tarteaucitronRoot");
        if (!root) {
          setTimeout(tryAttach, 50);
          return;
        }
        syncPrivacyLinkColor();
        const observer = new MutationObserver(syncPrivacyLinkColor);
        observer.observe(root, { childList: true, subtree: true });
      };
      tryAttach();
    };

    injectCustomTacTheme();
    startPrivacyLinkWatcher();

    const addGooglePreconnects = () => {
      const head = document.head;
      const urls = [
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
      ];
      urls.forEach((url) => {
        if (head.querySelector(`link[rel="preconnect"][href="${url}"]`)) return;
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = url;
        link.crossOrigin = "anonymous";
        head.appendChild(link);
      });
    };

    if (gtmId) {
      tarteaucitron.user.googletagmanagerId = gtmId;
      (tarteaucitron.job = tarteaucitron.job || []).push("googletagmanager");

      document.addEventListener("googletagmanager_allowed", addGooglePreconnects, {
        once: true,
      });
      document.addEventListener("googletagmanager_loaded", addGooglePreconnects, {
        once: true,
      });
    } else {
      window.dataLayer = window.dataLayer || [];
      console.info("[tac] GTM disabled: VITE_GTM_ID not provided");
    }

    if (recaptchaSiteKey) {
      tarteaucitron.user.recaptchaapi = recaptchaSiteKey;
      (tarteaucitron.job = tarteaucitron.job || []).push("recaptcha");
    }

    const ensureTacLoad = () => tarteaucitron.initEvents.loadEvent(false);
    if (document.readyState === "complete") {
      ensureTacLoad();
    } else {
      window.addEventListener("load", ensureTacLoad, { once: true });
    }
    return;
  }

  if (maxRetries <= 0) return;
  setTimeout(() => initTacWithRetry(maxRetries - 1), 50);
})(200);
