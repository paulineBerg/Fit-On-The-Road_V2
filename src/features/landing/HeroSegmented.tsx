import React, { useEffect, useRef } from "react";

import {
  alpha,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link as RouterLink } from "react-router-dom";

import heroAvif480 from "@assets/images/optimized/overview-480.avif";
import heroAvif768 from "@assets/images/optimized/overview-768.avif";
import heroAvif1024 from "@assets/images/optimized/overview-1024.avif";
import heroAvif1280 from "@assets/images/optimized/overview-1280.avif";
import heroAvif1600 from "@assets/images/optimized/overview-1600.avif";
import heroWebp480 from "@assets/images/optimized/overview-480.webp";
import heroWebp768 from "@assets/images/optimized/overview-768.webp";
import heroWebp1024 from "@assets/images/optimized/overview-1024.webp";
import heroWebp1280 from "@assets/images/optimized/overview-1280.webp";
import heroWebp1600 from "@assets/images/optimized/overview-1600.webp";
import heroJpg1600 from "@assets/images/optimized/overview-1600.jpg";

type Audience = "B2B" | "B2C";

type AnalyticsWindow = typeof window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, unknown>,
  ) => void;
};

const trackCta = (audience: Audience, label: string, destination: string) => {
  if (typeof window === "undefined") return;

  const payload = {
    event: "hero_cta_click",
    category: "homepage_hero",
    audience,
    label,
    destination,
  };

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer?.push(payload);
  analyticsWindow.gtag?.("event", "hero_cta_click", payload);
};

function HeroSegmented() {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (heroImgRef.current) {
      heroImgRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        bgcolor: "#0c0b0a",
        color: "common.white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: "auto",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <picture style={{ height: "100%", width: "100%", display: "block" }}>
            <source
              type="image/avif"
              srcSet={`
              ${heroAvif480} 480w,
              ${heroAvif768} 768w,
              ${heroAvif1024} 1024w,
              ${heroAvif1280} 1280w,
              ${heroAvif1600} 1600w
            `}
              sizes="(max-width: 599px) 100vw, (max-width: 1199px) 90vw, 1200px"
            />
            <source
              type="image/webp"
              srcSet={`
              ${heroWebp480} 480w,
              ${heroWebp768} 768w,
              ${heroWebp1024} 1024w,
              ${heroWebp1280} 1280w,
              ${heroWebp1600} 1600w
            `}
              sizes="(max-width: 599px) 100vw, (max-width: 1199px) 90vw, 1200px"
            />
            <img
              ref={heroImgRef}
              src={heroJpg1600}
              alt="Séance de coaching Fit On The Road en extérieur"
              width={1600}
              height={1600}
              decoding="async"
              loading="eager"
              /* eslint-disable-next-line react/no-unknown-property */
              fetchpriority="high"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "35% 50%",
                display: "block",
                filter: "saturate(0.9)",
              }}
            />
          </picture>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(80% 90% at 15% 20%, ${alpha(
                "#ed130d",
                0.16,
              )}, transparent 55%), linear-gradient(120deg, ${alpha(
                "#0c0b0a",
                0.88,
              )} 0%, ${alpha("#0c0b0a", 0.76)} 50%, ${alpha("#0c0b0a", 0.1)} 100%)`,
            }}
          />
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            pt: { xs: "calc(5vh + 64px)", md: "calc(5vh + 72px)" },
            pb: { xs: "4vh", md: "5vh" },
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              maxWidth: "100%",
              mx: "auto",
              px: { xs: 2, sm: 3, md: 0 },
              textAlign: "center",
              alignItems: "center",
              minHeight: "auto",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "primary.light",
                textShadow: `0 10px 80px ${alpha("#000", 0.5)}`,
              }}
            >
              Coach sportif à Versailles et dans les Yvelines (78) — sport en
              entreprise et coaching performance
            </Typography>

            <Box sx={{ height: { xs: "15vh", md: "18vh" } }} />

            <Stack
              spacing={1.5}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "70vw" },
                alignItems: "center",
                pb: { xs: "1vh", md: "1vh" },
              }}
            >
              <Typography
                component="p"
                variant="h6"
                sx={{
                  color: alpha("#ffffff", 0.9),
                  fontWeight: 500,
                  maxWidth: { xs: "100%", md: "68ch" },
                }}
              >
                Programmes premium sur site pour vos équipes et coaching
                personnalisé pour les particuliers actifs entre Versailles, Bois
                d&apos;Arcy, Saint-Quentin-en-Yvelines et l&apos;ouest parisien.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ justifyContent: "center" }}
              >
                <Chip
                  label="Audit QVT offert"
                  color="primary"
                  variant="filled"
                  size="small"
                  sx={{
                    bgcolor: alpha("#ed130d", 0.18),
                    color: "primary.contrastText",
                  }}
                />
                <Chip
                  label="Déplacements sur site : Versailles → Yvelines → alentours"
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: alpha("#ffffff", 0.35),
                    color: alpha("#ffffff", 0.9),
                  }}
                />
                <Chip
                  label="Planning 9h–19h, 6j/7"
                  variant="outlined"
                  size="small"
                  sx={{
                    bgcolor: alpha("#ed130d", 0.18),
                    color: "primary.contrastText",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0c0b0a" }}>
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 4, md: 6 },
            width: "100%",
            maxWidth: { xs: "100%", lg: "80vw" },
            mx: "auto",
          }}
        >
          <Stack spacing={4}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 2.5, md: 2 },
                alignItems: "stretch",
                justifyItems: "stretch",
              }}
            >
              <Box
                sx={(theme) => ({
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 3,
                  bgcolor: alpha(theme.palette.background.paper, 0.9),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                  boxShadow: `0 25px 80px ${alpha("#000", 0.5)}`,
                  backdropFilter: "blur(14px)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                })}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      label="Entreprise"
                      variant="outlined"
                      size="small"
                      sx={(theme) => ({
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        borderColor: alpha(theme.palette.primary.main, 0.6),
                        color: theme.palette.primary.light,
                      })}
                    />
                    <Typography
                      variant="overline"
                      sx={{
                        letterSpacing: "0.12em",
                        color: alpha("#ffffff", 0.7),
                      }}
                    >
                      Performance & QVT
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "common.white",
                      lineHeight: 1.3,
                    }}
                  >
                    Programmes 12 mois, reporting RH et coaching terrain pour
                    engager vos équipes.
                  </Typography>
                  <Stack spacing={1}>
                    {[
                      "Audit QVT offert et feuille de route",
                      "Séances sur site : échauffements, mobilité, renfo",
                      "Ateliers prévention + challenges internes encadrés",
                    ].map((item) => (
                      <Stack
                        key={item}
                        direction="row"
                        spacing={1.2}
                        alignItems="flex-start"
                      >
                        <CheckCircleRoundedIcon
                          fontSize="small"
                          htmlColor="#ed130d"
                          aria-hidden
                        />
                        <Typography sx={{ color: alpha("#ffffff", 0.9) }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button
                    component={RouterLink}
                    to="/entreprises"
                    color="inherit"
                    variant="contained"
                    endIcon={<ArrowOutwardIcon fontSize="small" />}
                    aria-label="Entreprise – Audit QVT offert"
                    onClick={() =>
                      trackCta(
                        "B2B",
                        "Entreprise – Audit QVT offert",
                        "/entreprises",
                      )
                    }
                    sx={{
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      minHeight: 40,
                      borderRadius: 1,
                      px: 3.5,
                      textTransform: "none",
                      fontWeight: 700,
                      bgcolor: "#444",
                      color: "#ffffff",
                      boxShadow: "0 6px 22px rgba(0,0,0,0.35)",
                      "&:hover": {
                        bgcolor: "#555",
                        boxShadow: "0 8px 26px rgba(0,0,0,0.4)",
                      },
                      "&:focus-visible": {
                        outline: `3px solid ${alpha("#ffffff", 0.3)}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    Entreprise – Audit QVT offert
                  </Button>
                </Stack>
              </Box>

              <Box
                sx={{
                  p: { xs: 2.25, sm: 2.75 },
                  borderRadius: 3,
                  bgcolor: alpha("#0c0b0a", 0.75),
                  border: `1px solid ${alpha("#ffffff", 0.16)}`,
                  boxShadow: `0 18px 60px ${alpha("#000", 0.4)}`,
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      label="Particulier"
                      variant="outlined"
                      size="small"
                      sx={(theme) => ({
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        borderColor: alpha(theme.palette.primary.main, 0.6),
                        color: theme.palette.primary.light,
                      })}
                    />
                    <Typography
                      variant="overline"
                      sx={{
                        letterSpacing: "0.12em",
                        color: alpha("#ffffff", 0.65),
                      }}
                    >
                      Coaching performance & santé
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h5"
                    sx={{
                      color: alpha("#ffffff", 0.92),
                      lineHeight: 1.3,
                    }}
                  >
                    Séance découverte pour définir vos objectifs, packs 10
                    séances ou duo pour progresser ensemble.
                  </Typography>
                  <Stack spacing={1}>
                    {[
                      "Coaching individuel ou duo à domicile / extérieur",
                      "Objectifs : énergie, mobilité, perte de poids",
                      "Suivi WhatsApp entre les séances",
                    ].map((item) => (
                      <Stack
                        key={item}
                        direction="row"
                        spacing={1.2}
                        alignItems="flex-start"
                      >
                        <CheckCircleRoundedIcon
                          fontSize="small"
                          htmlColor={alpha("#ed130d", 0.8)}
                          aria-hidden
                        />
                        <Typography sx={{ color: alpha("#ffffff", 0.85) }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button
                    component={RouterLink}
                    to="/particuliers"
                    color="primary"
                    variant="outlined"
                    endIcon={<ArrowOutwardIcon fontSize="small" />}
                    aria-label="Particulier – Séance découverte"
                    onClick={() =>
                      trackCta(
                        "B2C",
                        "Particulier – Séance découverte",
                        "/particuliers",
                      )
                    }
                    sx={{
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      minHeight: 40,
                      borderRadius: 1,
                      px: 3.5,
                      textTransform: "none",
                      fontWeight: 700,
                      borderColor: alpha("#ed130d", 0.8),
                      color: "#ed130d",
                      "&:hover": {
                        borderColor: alpha("#ed130d", 1),
                        backgroundColor: alpha("#ed130d", 0.1),
                      },
                      "&:focus-visible": {
                        outline: `3px solid ${alpha("#ed130d", 0.35)}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    Particulier – Séance découverte
                  </Button>
                </Stack>
              </Box>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              sx={{
                color: alpha("#ffffff", 0.7),
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="body2">
                Basé autour de Versailles, interventions régulières à
                Saint-Quentin-en-Yvelines, Vélizy, Montigny-le-Bretonneux et
                communes voisines.
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 999,
                  border: `1px solid ${alpha("#ffffff", 0.18)}`,
                  bgcolor: alpha("#0c0b0a", 0.6),
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#2dd4bf",
                    boxShadow: `0 0 0 6px ${alpha("#2dd4bf", 0.12)}`,
                  }}
                  aria-hidden
                />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Réponse rapide & créneaux adaptés au mieux pour les équipes
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default HeroSegmented;
