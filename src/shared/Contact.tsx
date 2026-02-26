import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormHelperText,
  GlobalStyles,
  Snackbar,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { UserType } from "@app/types/types";
import {
  DEFAULT_CONTACT_COOLDOWN_SECONDS,
  DEFAULT_RECAPTCHA_ACTION,
  type FitConfig,
} from "@app/types/config";
import PrivacyDialog from "@shared/PrivacyDialog";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (key: string, options?: { action?: string }) => Promise<string>;
    };
  }
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

const MAILTO_HREF =
  "mailto:contact@fit-ontheroad.fr?subject=Demande%20d%27information&body=Bonjour,%0D%0AJe%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.%0D%0ACordialement,";

const HONEYPOT_NAME = "website";
const RECAPTCHA_SRC_BASE = "https://www.google.com/recaptcha/api.js";

const loadRecaptcha = (siteKey: string) => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha?.execute) {
    return new Promise<void>((resolve) => {
      window.grecaptcha?.ready(() => resolve());
    });
  }
  return new Promise<void>((resolve, reject) => {
    const { head } = document;
    const existing = head.querySelector(
      `script[src^="${RECAPTCHA_SRC_BASE}?render=${siteKey}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => {
        window.grecaptcha?.ready(() => resolve());
      });
      existing.addEventListener("error", () =>
        reject(new Error("reCAPTCHA failed to load")),
      );
      return;
    }
    const script = document.createElement("script");
    script.src = `${RECAPTCHA_SRC_BASE}?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => window.grecaptcha?.ready(() => resolve());
    script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
    head.appendChild(script);
  });
};

function getFitConfig(): FitConfig {
  // eslint-disable-next-line no-underscore-dangle
  const cfg = (window as Record<string, FitConfig>).__FIT_CONFIG__ ?? {};
  return {
    ...cfg,
    contactCooldownSeconds:
      cfg.contactCooldownSeconds ?? DEFAULT_CONTACT_COOLDOWN_SECONDS,
    recaptchaAction: cfg.recaptchaAction ?? DEFAULT_RECAPTCHA_ACTION,
  };
}

interface ContactProps {
  defaultUserType?: UserType;
}

function Contact(props: ContactProps) {
  const { defaultUserType = UserType.ENTERPRISE } = props;
  const fitConfig = React.useMemo(() => getFitConfig(), []);
  const isRecaptcha =
    fitConfig.captchaProvider === "recaptcha" &&
    Boolean(fitConfig.captchaSiteKey);
  const uid = React.useId();
  const [userType, setUserType] = React.useState<UserType>(defaultUserType);
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [emailError, setEmailError] = React.useState<string>("");
  const [messageError, setMessageError] = React.useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    "success" | "error"
  >("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");
  const [lastSubmitAt, setLastSubmitAt] = React.useState<number | null>(null);
  const [consentChecked, setConsentChecked] = React.useState<boolean>(false);
  const [consentError, setConsentError] = React.useState<string>("");
  const [privacyOpen, setPrivacyOpen] = React.useState<boolean>(false);
  const [captchaAllowed, setCaptchaAllowed] = React.useState<boolean>(() => {
    if (!isRecaptcha) return true;
    return Boolean((window as any)?.tarteaucitron?.state?.recaptcha);
  });
  const honeypotRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    const { hostname } = window.location;
    const isLocal =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0";

    if (!isRecaptcha || !fitConfig.captchaSiteKey || isLocal) return undefined;

    const syncConsent = () => {
      const allowed = Boolean((window as any)?.tarteaucitron?.state?.recaptcha);
      setCaptchaAllowed(allowed);
      if (allowed) {
        loadRecaptcha(fitConfig.captchaSiteKey as string).catch(() => {
          // surface on submit
        });
      }
    };

    syncConsent();
    const onAllowed = () => syncConsent();
    document.addEventListener("recaptcha_allowed", onAllowed);
    document.addEventListener("tac.update", onAllowed);
    return () => {
      document.removeEventListener("recaptcha_allowed", onAllowed);
      document.removeEventListener("tac.update", onAllowed);
    };
  }, [fitConfig.captchaSiteKey, isRecaptcha]);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: UserType | null,
  ) => {
    if (value) {
      setUserType(value);
    }
  };

  const openConsentPanel = () =>
    (window as any)?.tarteaucitron?.userInterface?.openPanel?.();

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const validateMessage = (value: string) => value.trim().length >= 5;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setEmailError("");
    setMessageError("");
    setConsentError("");

    const now = Date.now();
    if (
      lastSubmitAt &&
      now - lastSubmitAt < (fitConfig.contactCooldownSeconds ?? 0) * 1000
    ) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "Merci d'attendre quelques secondes avant de renvoyer le formulaire.",
      );
      setSnackbarOpen(true);
      return;
    }

    if (isRecaptcha && !captchaAllowed) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "Veuillez accepter reCAPTCHA pour envoyer le formulaire.",
      );
      setSnackbarOpen(true);
      (window as any)?.tarteaucitron?.userInterface?.openPanel?.();
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email =
      ((formData.get("email") ?? formData.get("entry.15707327")) as
        | string
        | null) ?? "";
    const message =
      ((formData.get("message") ?? formData.get("entry.1273954301")) as
        | string
        | null) ?? "";
    const phone =
      ((formData.get("phone") ?? formData.get("entry.phone")) as
        | string
        | null) ?? "";
    const honeypot = (formData.get(HONEYPOT_NAME) as string) ?? "";

    let hasError = false;
    if (!validateEmail(email)) {
      setEmailError("Adresse email invalide");
      hasError = true;
    }
    if (!validateMessage(message)) {
      setMessageError("Merci de préciser votre demande (≥ 5 caractères)");
      hasError = true;
    }
    if (honeypot.trim().length > 0) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Requête bloquée (honeypot).");
      setSnackbarOpen(true);
      return;
    }
    if (!consentChecked) {
      setConsentError(
        "Merci d'accepter le traitement de vos données pour envoyer le formulaire.",
      );
      return;
    }
    if (hasError) {
      return;
    }

    setStatus("sending");

    let captchaToken = "";
    if (fitConfig.captchaProvider === "recaptcha" && fitConfig.captchaSiteKey) {
      try {
        await loadRecaptcha(fitConfig.captchaSiteKey);
        captchaToken = await window.grecaptcha?.execute(
          fitConfig.captchaSiteKey,
          {
            action: fitConfig.recaptchaAction ?? DEFAULT_RECAPTCHA_ACTION,
          },
        );
      } catch (error) {
        setStatus("idle");
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "Impossible de vérifier le captcha, merci de réessayer.",
        );
        setSnackbarOpen(true);
        return;
      }
    }

    const payload = {
      name:
        ((formData.get("name") ?? formData.get("entry.896894573")) as
          | string
          | null) ?? "",
      email,
      phone,
      message,
      consent: consentChecked,
      userType,
      captchaToken,
      captchaProvider: fitConfig.captchaProvider,
      recaptchaAction: fitConfig.recaptchaAction,
      source: window.location.pathname,
    };

    try {
      const response = await fetch(
        fitConfig.contactEndpoint ?? "/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = (await response
        .json()
        .catch(() => ({}))) as ContactApiResponse;

      if (!response.ok || data.success === false) {
        throw new Error(data.message || `Erreur ${response.status}`);
      }

      form.reset();
      setLastSubmitAt(Date.now());
      setStatus("success");
      setSnackbarSeverity("success");
      setSnackbarMessage("Message envoyé ! Je vous recontacte rapidement.");
    } catch (err) {
      setStatus("error");
      setSnackbarSeverity("error");
      const rawMessage =
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Merci de réessayer ou d'envoyer un mail direct.";

      // Traduction des erreurs réseaux/génériques pour l'utilisateur
      const normalized = rawMessage.toLowerCase();
      const friendlyMessage = normalized.includes("failed to fetch")
        ? "Impossible de contacter le serveur. Merci de réessayer dans un instant."
        : rawMessage;

      setSnackbarMessage(friendlyMessage);
    } finally {
      setSnackbarOpen(true);
      setStatus((prev) => (prev === "sending" ? "idle" : prev));
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 5,
        color: "white",
        bgcolor: "#06090a",
        width: "100%",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <GlobalStyles
          styles={{ ".grecaptcha-badge": { visibility: "hidden" } }}
        />
        <Box
          sx={{
            width: { sm: "100%", md: "80%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="p" variant="h4">
            Nous contacter
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Sportif accompli ou bien simple curieux ? Un coach prendra contact
            avec vous pour vous accompagner dans la définition de vos besoins.
          </Typography>
          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              ref={honeypotRef}
              type="text"
              name={HONEYPOT_NAME}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />
            <Stack
              direction={{ xs: "column" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <ToggleButtonGroup
                id={`${uid}-userType`}
                color="primary"
                exclusive
                value={userType}
                onChange={handleChange}
                aria-label="User Type"
                size="small"
                sx={{
                  backgroundColor: "background.default",
                  "& .Mui-selected": {
                    pointerEvents: "none",
                  },
                }}
              >
                <ToggleButton
                  className="w-full m-auto"
                  value={UserType.INDIVIDUAL}
                  aria-label="Particuliers"
                >
                  Particuliers
                </ToggleButton>
                <ToggleButton
                  className="w-full m-auto"
                  value={UserType.ENTERPRISE}
                  aria-label="Entreprises"
                >
                  Entreprises
                </ToggleButton>
              </ToggleButtonGroup>
              <TextField
                id={`${uid}-name`}
                name="name"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Nom"
                placeholder="Nom"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Nom",
                }}
                required
              />
              <TextField
                id={`${uid}-email`}
                type="email"
                name="email"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Adresse mail"
                placeholder="Adresse mail"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Adresse mail",
                }}
                required
                error={Boolean(emailError)}
                helperText={emailError}
              />
              <TextField
                id={`${uid}-phone`}
                type="tel"
                name="phone"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Téléphone (optionnel)"
                placeholder="Téléphone (optionnel)"
                inputProps={{
                  autoComplete: "tel",
                  "aria-label": "Téléphone",
                }}
              />
              <TextField
                id={`${uid}-message`}
                name="message"
                hiddenLabel
                size="small"
                multiline
                rows={4}
                InputProps={{
                  inputComponent: "textarea",
                  inputProps: {
                    autoComplete: "off",
                    "aria-label": "Message",
                    minLength: 5,
                  },
                }}
                variant="outlined"
                placeholder="Mes attentes, mes envies"
                error={Boolean(messageError)}
                helperText={messageError}
                required
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={consentChecked}
                    onChange={(event) => {
                      setConsentChecked(event.target.checked);
                      if (event.target.checked) setConsentError("");
                    }}
                    color="primary"
                    name="consent"
                    inputProps={{ "aria-label": "Consentement traitement" }}
                  />
                }
                label={
                  <Typography variant="body2" color="grey.200">
                    J’accepte que mes données soient traitées afin de répondre à
                    ma demande et reconnais avoir pris connaissance de la{" "}
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      onClick={(event) => {
                        event.currentTarget.blur();
                        setPrivacyOpen(true);
                      }}
                      sx={{ textTransform: "none", p: 0, minWidth: "auto" }}
                    >
                      politique de confidentialité
                    </Button>
                    .
                  </Typography>
                }
              />
              {consentError && (
                <FormHelperText error>{consentError}</FormHelperText>
              )}
              {isRecaptcha && !captchaAllowed && (
                <FormHelperText error={false} sx={{ color: "grey.300" }}>
                  Pour envoyer ce formulaire, merci d&apos;autoriser reCAPTCHA.{" "}
                  <Button
                    size="small"
                    color="primary"
                    variant="text"
                    onClick={openConsentPanel}
                    sx={{ textTransform: "none", p: 0, minWidth: "auto" }}
                  >
                    Accepter reCAPTCHA pour envoyer le formulaire
                  </Button>
                </FormHelperText>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={
                  status === "sending" || (isRecaptcha && !captchaAllowed)
                }
                startIcon={
                  status === "sending" ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : undefined
                }
              >
                {status === "sending" ? "Envoi..." : "CONTACTEZ-MOI"}
              </Button>
              <Button href={MAILTO_HREF} size="small">
                Je préfère envoyer un mail en direct
              </Button>
              <Typography variant="caption" sx={{ color: "grey.400", pt: 1 }}>
                Ce formulaire est protégé par reCAPTCHA et la politique de
                confidentialité ainsi que les conditions d’utilisation de Google
                s’appliquent.
              </Typography>
            </Stack>
          </form>
          <PrivacyDialog
            open={privacyOpen}
            onClose={() => setPrivacyOpen(false)}
            disableScrollReset
          />
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={() => setSnackbarOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity={snackbarSeverity}
              onClose={() => setSnackbarOpen(false)}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
