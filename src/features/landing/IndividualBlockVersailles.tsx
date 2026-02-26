import React, { useCallback } from "react";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link as RouterLink } from "react-router-dom";

interface IndividualBlockVersaillesProps {
  title?: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
  sectionId?: string;
}

type Segment = "25-40" | "40-60";

type AnalyticsWindow = typeof window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, unknown>,
  ) => void;
};

const defaultTitle = "Coaching sportif à Versailles & alentours";
const defaultIntro =
  "Envie d'un coach sportif à Versailles pour retrouver de l'énergie, progresser durablement ou reprendre en main votre routine ? Fit On The Road propose un coaching sportif dans les Yvelines adapté à votre niveau, votre emploi du temps et vos objectifs de remise en forme 78.";

function IndividualBlockVersailles({
  title = defaultTitle,
  intro = defaultIntro,
  ctaLabel = "Réserver ma séance découverte",
  ctaHref = "/particuliers",
  sectionId = "particuliers",
}: IndividualBlockVersaillesProps) {
  const trackCta = useCallback((segment: Segment) => {
    const payload = {
      event: "individual_discovery_cta_click",
      location: "home_individual_block",
      city: "versailles",
      segment,
    };
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer?.push(payload);
    analyticsWindow.gtag?.("event", "individual_discovery_cta_click", payload);
  }, []);

  const segments = [
    {
      key: "25-40" as Segment,
      chip: "Actifs 25–40 ans",
      title: "Performance & énergie",
      description:
        "Pour performer sans s'épuiser. Objectifs fréquents : tonus, silhouette, force, cardio, gestion du stress, régularité malgré un planning chargé.",
      bullets: [
        "Énergie au quotidien + meilleure récupération",
        "Programme structuré, pas au feeling",
        "Résultats visibles et mesurables",
      ],
    },
    {
      key: "40-60" as Segment,
      chip: "Adultes 40–60 ans",
      title: "Santé & mobilité",
      description:
        "Pour se sentir bien, bouger mieux et durer. Objectifs : mobilité, renforcement doux, prévention dos/genoux, reprise en forme sécurisée.",
      bullets: [
        "Mobilité et posture améliorées",
        "Renforcement protecteur (dos, hanches, genoux)",
        "Confiance et constance dans la reprise",
      ],
    },
  ];

  return (
    <Box
      component="section"
      id={sectionId}
      sx={{
        bgcolor: "background.default",
        borderBottom: (theme) =>
          `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
      }}
    >
      <Stack
        spacing={2}
        px={{ xs: 2, sm: 4, md: 6 }}
        pt={{ xs: 6, md: 8 }}
        pb={{ xs: 4, md: 5 }}
        maxWidth={{ xs: "100%", lg: "80vw" }}
        mx="auto"
      >
        <Typography
          component="h2"
          variant="h4"
          fontWeight={100}
          letterSpacing="-0.01em"
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {intro}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          Offres : coaching individuel, duo, pack 10 séances, parrainage.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        px={{ xs: 2, sm: 4, md: 6 }}
        pb={{ xs: 6, md: 7 }}
        maxWidth={{ xs: "100%", lg: "80vw" }}
        mx="auto"
      >
        {segments.map((segment) => (
          <Grid item xs={12} md={6} key={segment.key}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 1,
                p: { xs: 3, sm: 3.5 },
                bgcolor: "grey.900",
                border: (theme) =>
                  `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                boxShadow: "0 20px 55px rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                  label={segment.chip}
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    bgcolor: "background.default",
                    color: "primary.contrastText",
                  }}
                />
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.12em", color: alpha("#ffffff", 0.7) }}
                >
                  {segment.title}
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                color="text.primary"
                sx={{ lineHeight: 1.6 }}
              >
                {segment.description}
              </Typography>

              <Stack spacing={1.25}>
                {segment.bullets.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.1}
                    alignItems="center"
                  >
                    <CheckCircleRoundedIcon
                      fontSize="small"
                      htmlColor={alpha("#ed130d", 0.9)}
                      aria-hidden
                    />
                    <Typography variant="body1" color="text.primary">
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box
                sx={{
                  borderTop: `1px solid ${alpha("#ffffff", 0.08)}`,
                  mt: 2,
                  pt: 2,
                }}
              />

              <Stack spacing={1} mt="auto">
                <Button
                  component={RouterLink}
                  to={ctaHref}
                  color="primary"
                  variant="outlined"
                  endIcon={<ArrowOutwardIcon fontSize="small" />}
                  onClick={() => trackCta(segment.key)}
                  sx={(theme) => ({
                    alignSelf: "stretch",
                    minHeight: 30,
                    borderRadius: 1,
                    px: 3,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    boxShadow: `0 12px 34px ${alpha(theme.palette.primary.main, 0.35)}`,
                    "&:focus-visible": {
                      outline: `3px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                      outlineOffset: 2,
                    },
                  })}
                >
                  {ctaLabel}
                </Button>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ lineHeight: 1.4 }}
                >
                  Séance découverte = échange rapide, séance adaptée à votre
                  niveau, recommandations de progression. Réponse rapide —
                  créneaux à Versailles et alentours.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default IndividualBlockVersailles;
