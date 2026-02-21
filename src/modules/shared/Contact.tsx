import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { UserType } from "@app/types/types";

interface ContactProps {
  defaultUserType?: UserType;
}

function Contact(props: ContactProps) {
  type SubmitStatus = "idle" | "sending" | "success" | "error";

  const { defaultUserType = UserType.ENTERPRISE } = props;
  const [userType, setUserType] = React.useState<UserType>(defaultUserType);
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [emailError, setEmailError] = React.useState<string>("");
  const [messageError, setMessageError] = React.useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<
    "success" | "error"
  >("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");

  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: UserType,
  ) => {
    setUserType(value);
  };

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const validateMessage = (value: string) => !value || value.trim().length >= 5;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError("");
    setMessageError("");
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("entry.15707327") as string) || "";
    const message = (formData.get("entry.1273954301") as string) || "";

    let hasError = false;
    if (!validateEmail(email)) {
      setEmailError("Adresse email invalide");
      hasError = true;
    }
    if (!validateMessage(message)) {
      setMessageError("Merci de préciser votre demande (≥ 5 caractères)");
      hasError = true;
    }
    if (hasError) {
      setStatus("idle");
      return;
    }

    const url = new URL(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSec3zJkjD1nf690-QfZZ8r4C0T8mYkcmrmaTcICdpPphbQKUw/formResponse",
    );
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key as string, value as string);
    });
    if (userType === UserType.ENTERPRISE) {
      params.append("entry.1060649291", "une entreprise");
    } else if (userType === UserType.INDIVIDUAL) {
      params.append("entry.1060649291", "un particulier");
    }
    url.search = params.toString();
    fetch(url.toString(), {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(() => {
        form.reset();
        setStatus("success");
        setSnackbarSeverity("success");
        setSnackbarMessage("Message envoyé ! Je vous recontacte rapidement.");
        setSnackbarOpen(true);
      })
      .catch(() => {
        setStatus("error");
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "Une erreur est survenue. Merci de réessayer ou d'envoyer un mail direct.",
        );
        setSnackbarOpen(true);
      })
      .finally(() => {
        setStatus((prev) => (prev === "sending" ? "idle" : prev));
      });
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
          <form id="contact-form" onSubmit={handleSubmit}>
            <Stack
              direction={{ xs: "column" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <ToggleButtonGroup
                id="userType"
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
                >
                  Particuliers
                </ToggleButton>
                <ToggleButton
                  className="w-full m-auto"
                  value={UserType.ENTERPRISE}
                >
                  Entreprises
                </ToggleButton>
              </ToggleButtonGroup>
              <TextField
                id="name"
                name="entry.896894573"
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
                id="email"
                type="email"
                name="entry.15707327"
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
                id="message"
                name="entry.1273954301"
                hiddenLabel
                size="small"
                multiline
                minRows={3}
                maxRows={8}
                variant="outlined"
                aria-label="Message"
                placeholder="Mes attentes, mes envies"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Message",
                }}
                error={Boolean(messageError)}
                helperText={messageError}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={status === "sending"}
                startIcon={
                  status === "sending" ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : undefined
                }
              >
                {status === "sending" ? "Envoi..." : "CONTACTEZ-MOI"}
              </Button>
              <Button
                href="mailto:contact@fit-ontheroad.fr?subject=Demande d'information&body=Bonjour,<br/>Je souhaite obtenir des informations sur vos services.<br/>Cordialement,"
                size="small"
              >
                Je préfère envoyer un mail en direct
              </Button>
            </Stack>
          </form>
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
