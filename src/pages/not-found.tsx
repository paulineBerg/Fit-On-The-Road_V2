import React from "react";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Seo from "@shared/Seo";

type NotFoundCta = "entreprise" | "particulier" | "home" | "about" | "terms";

type AnalyticsWindow = typeof window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, unknown>,
  ) => void;
};

const trackNotFoundCta = (cta: NotFoundCta) => {
  if (typeof window === "undefined") return;

  const payload = {
    event: "not_found_cta_click",
    cta,
    location: "404_page",
  };

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer?.push(payload);
  analyticsWindow.gtag?.("event", "not_found_cta_click", payload);
};

function NotFoundPage() {
  return (
    <>
      <Seo
        title="404 — Page introuvable | Fit On The Road"
        description="Page introuvable. Accédez aux services Fit On The Road : sport en entreprise dans les Yvelines (78) et coaching sportif à Versailles."
        canonicalPath="/404"
      />
      <Helmet>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 10, md: 12 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: (theme) =>
              `radial-gradient(50% 40% at 20% 20%, ${alpha(
                theme.palette.primary.main,
                0.12,
              )}, transparent 60%), radial-gradient(45% 40% at 80% 30%, ${alpha(
                theme.palette.secondary.main ?? theme.palette.primary.light,
                0.1,
              )}, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <Stack
          spacing={4}
          sx={{
            width: "100%",
            maxWidth: 1100,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack spacing={1.5} alignItems={{ xs: "flex-start", md: "center" }}>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "primary.light",
                textAlign: { xs: "left", md: "center" },
              }}
            >
              Page introuvable (404)
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 720,
                textAlign: { xs: "left", md: "center" },
                lineHeight: 1.7,
              }}
            >
              La page que vous cherchez n&apos;existe pas ou a été déplacée. Fit
              On The Road intervient à Versailles et dans les Yvelines (78).
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={6}
                sx={{
                  height: "100%",
                  border: (theme) =>
                    `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  background: (theme) =>
                    `linear-gradient(145deg, ${alpha(
                      theme.palette.primary.main,
                      0.12,
                    )}, ${alpha(theme.palette.background.paper, 0.9)})`,
                }}
              >
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <BusinessCenterRoundedIcon
                      color="primary"
                      fontSize="medium"
                    />
                    <Typography
                      variant="overline"
                      sx={{ letterSpacing: "0.08em" }}
                    >
                      Parcours Entreprise
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    fontWeight={700}
                  >
                    Entreprise — Audit QVT offert
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Programmes sport &amp; performance en entreprise (78).
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/entreprises"
                    color="primary"
                    variant="contained"
                    endIcon={<BusinessCenterRoundedIcon fontSize="small" />}
                    onClick={() => trackNotFoundCta("entreprise")}
                    aria-label="Accéder aux offres entreprise"
                    sx={{
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      px: 3.5,
                      textTransform: "none",
                      fontWeight: 700,
                      boxShadow: (theme) =>
                        `0 12px 35px ${alpha(theme.palette.primary.main, 0.32)}`,
                      "&:focus-visible": {
                        outline: (theme) =>
                          `3px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    Accéder aux offres Entreprise
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  border: (theme) =>
                    `1px solid ${alpha(theme.palette.secondary.main ?? "#ed130d", 0.25)}`,
                  background: (theme) =>
                    `linear-gradient(145deg, ${alpha(
                      theme.palette.background.paper,
                      0.96,
                    )}, ${alpha(theme.palette.primary.main, 0.08)})`,
                }}
              >
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <FitnessCenterRoundedIcon
                      color="secondary"
                      fontSize="medium"
                    />
                    <Typography
                      variant="overline"
                      sx={{ letterSpacing: "0.08em" }}
                    >
                      Parcours Particulier
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    fontWeight={700}
                  >
                    Particulier — Séance découverte
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Coaching sportif à Versailles &amp; alentours.
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/particuliers"
                    color="secondary"
                    variant="outlined"
                    endIcon={<FitnessCenterRoundedIcon fontSize="small" />}
                    onClick={() => trackNotFoundCta("particulier")}
                    aria-label="Réserver une séance découverte"
                    sx={{
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      px: 3.5,
                      textTransform: "none",
                      fontWeight: 700,
                      borderWidth: 2,
                      "&:hover": { borderWidth: 2 },
                      "&:focus-visible": {
                        outline: (theme) =>
                          `3px solid ${alpha(theme.palette.secondary.main ?? "#ed130d", 0.35)}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    Réserver ma séance découverte
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={12}>
              <Card
                elevation={0}
                sx={{
                  border: (theme) =>
                    `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  bgcolor: "grey.900",
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        component={RouterLink}
                        to="/"
                        variant="text"
                        color="inherit"
                        startIcon={<HomeRoundedIcon />}
                        onClick={() => trackNotFoundCta("home")}
                        aria-label="Retour à l'accueil"
                        sx={{
                          justifyContent: "flex-start",
                          fontWeight: 700,
                          textTransform: "none",
                        }}
                      >
                        Retour à l&apos;accueil
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        component={RouterLink}
                        to="/about-us"
                        variant="text"
                        color="inherit"
                        startIcon={<InfoOutlinedIcon />}
                        onClick={() => trackNotFoundCta("about")}
                        aria-label="Découvrir Fit On The Road"
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                        }}
                      >
                        En savoir plus
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        component={RouterLink}
                        to="/terms"
                        variant="text"
                        color="inherit"
                        startIcon={<GavelRoundedIcon />}
                        onClick={() => trackNotFoundCta("terms")}
                        aria-label="Mentions légales et conditions"
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                        }}
                      >
                        Mentions légales &amp; CGU
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}

export default NotFoundPage;
