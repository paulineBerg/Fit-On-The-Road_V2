import React, { useCallback } from "react";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import b2bAvif480 from "@assets/images/optimized/entreprises-collective-coaching-480.avif";
import b2bAvif768 from "@assets/images/optimized/entreprises-collective-coaching-768.avif";
import b2bAvif1024 from "@assets/images/optimized/entreprises-collective-coaching-1024.avif";
import b2bWebp480 from "@assets/images/optimized/entreprises-collective-coaching-480.webp";
import b2bWebp768 from "@assets/images/optimized/entreprises-collective-coaching-768.webp";
import b2bWebp1024 from "@assets/images/optimized/entreprises-collective-coaching-1024.webp";

type CorporateBlockYvelinesProps = {
  title?: string;
  leadText?: string;
  objectiveText?: string;
  bullets?: string[];
  pillars?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  sectionId?: string;
};

type AnalyticsWindow = typeof window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, unknown>,
  ) => void;
};

const defaultPillars = [
  "Engagement collaborateurs",
  "Prévention & QVT mesurable",
  "Performance collective",
];

const defaultBullets = [
  "Séances hebdomadaires",
  "Ateliers prévention",
  "Challenges internes",
  "Reporting RH",
];

function CorporateBlockYvelines({
  title = "Sport en entreprise dans les Yvelines",
  leadText = "Fit On The Road accompagne les entreprises dans les Yvelines (78) avec des programmes sportifs structurés, pensés pour la QVT et la performance collective. J'interviens sur site à Versailles, Saint-Quentin-en-Yvelines et Bois-d'Arcy : le partenaire sport en entreprise 78 pour vos équipes.",
  objectiveText = "Objectif : renforcer l’énergie des équipes, améliorer l’engagement collaborateur et créer une dynamique durable au sein de votre organisation.",
  bullets = defaultBullets,
  pillars = defaultPillars,
  ctaLabel = "Demander un audit entreprise",
  ctaHref = "/entreprises",
  sectionId = "entreprises",
}: CorporateBlockYvelinesProps) {
  const trackCta = useCallback(() => {
    const payload = {
      event: "corporate_block_cta",
      category: "corporate_block_yvelines",
      label: ctaLabel,
      destination: ctaHref,
    };
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer?.push(payload);
    analyticsWindow.gtag?.("event", "corporate_block_cta", payload);
  }, [ctaHref, ctaLabel]);

  return (
    <Box
      component="section"
      id={sectionId}
      sx={{
        bgcolor: "background.paper",
        borderTop: (theme) =>
          `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
        borderBottom: (theme) =>
          `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        px={{ xs: 2, sm: 4, md: 6 }}
        py={{ xs: 6, md: 8 }}
      >
        <Grid item xs={12} md={6}>
          <Stack spacing={2.5}>
            <Typography
              component="h2"
              variant="h4"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              {leadText}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              {objectiveText}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {pillars.map((pillar) => (
                <Chip
                  key={pillar}
                  label={pillar}
                  size="small"
                  sx={(theme) => ({
                    bgcolor: alpha(theme.palette.primary.main, 0.24),
                    color: theme.palette.primary.contrastText,
                    border: `1px solid ${alpha(theme.palette.primary.light, 0.6)}`,
                    letterSpacing: "0.02em",
                  })}
                />
              ))}
            </Stack>

            <Stack spacing={1}>
              <Typography component="h3" variant="subtitle1" fontWeight={700}>
                Programmes sur-mesure en Yvelines (78) :
              </Typography>
              <Stack spacing={1}>
                {bullets.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                    component="li"
                  >
                    <CheckCircleRoundedIcon
                      fontSize="small"
                      htmlColor={alpha("#ed130d", 0.9)}
                      aria-hidden
                    />
                    <Typography
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Button
              component={RouterLink}
              to={ctaHref}
              color="primary"
              variant="contained"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
              onClick={trackCta}
              sx={(theme) => ({
                alignSelf: { xs: "stretch", sm: "flex-start" },
                minHeight: 30,
                borderRadius: "1px",
                px: 3.5,
                textTransform: "none",
                fontWeight: 700,
                boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
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
              sx={{ maxWidth: 520 }}
            >
              Audit QVT offert — Intervention rapide à Versailles,
              Saint-Quentin-en-Yvelines, Bois-d&apos;Arcy et dans tout le 78.
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 18px 55px rgba(0,0,0,0.55)",
              position: "relative",
              aspectRatio: "1 / 1",
            }}
          >
            <picture>
              <source
                type="image/avif"
                srcSet={`${b2bAvif480} 480w, ${b2bAvif768} 768w, ${b2bAvif1024} 1024w`}
                sizes="(max-width: 900px) 88vw, 520px"
              />
              <source
                type="image/webp"
                srcSet={`${b2bWebp480} 480w, ${b2bWebp768} 768w, ${b2bWebp1024} 1024w`}
                sizes="(max-width: 900px) 88vw, 520px"
              />
              <img
                src={b2bWebp768}
                alt="Coaching sportif en entreprise dans les Yvelines"
                loading="lazy"
                decoding="async"
                width={1024}
                height={1024}
                sizes="(max-width: 900px) 88vw, 520px"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </picture>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CorporateBlockYvelines;
