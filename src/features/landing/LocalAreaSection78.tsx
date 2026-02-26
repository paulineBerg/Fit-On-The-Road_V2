import React, { useCallback, useState } from "react";
import {
  alpha,
  Box,
  Chip,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import carteYvelinesAvif from "@assets/images/carte-yvelines78.avif";
import carteYvelinesWebp from "@assets/images/carte-yvelines78.webp";
import carteYvelinesJpg from "@assets/images/carte-yvelines78.jpg";

const coveredCities = [
  "Versailles",
  "Le Chesnay",
  "Viroflay",
  "Saint-Quentin-en-Yvelines",
  "Montigny-le-Bretonneux",
  "Guyancourt",
  "Elancourt",
  "Voisins-le-Bretonneux",
  "Trappes",
];

const regularPresenceCities = [
  "Bois-d'Arcy",
  "La Celle-Saint-Cloud",
  "Buc",
  "Fontenay-le-Fleury",
  "Les Clayes-sous-Bois",
  "Villepreux",
  "Plaisir",
  "Chaville",
  "Jouy-en-Josas",
];

type LocalAreaSection78Props = {
  sectionId?: string;
};

function LocalAreaSection78({ sectionId = "zones" }: LocalAreaSection78Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const handleKeyOpen = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setModalOpen(true);
      }
    },
    [],
  );

  return (
    <Box
      component="section"
      id={sectionId}
      aria-labelledby="zones-intervention"
      sx={{
        bgcolor: "background.paper",
        borderTop: (theme) =>
          `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
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
        maxWidth={{ xs: "100%", lg: "80vw" }}
        mx="auto"
      >
        <Grid item xs={12} md={7}>
          <Stack spacing={2.5}>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Couverture locale 78"
                size="small"
                sx={(theme) => ({
                  bgcolor: alpha(theme.palette.secondary.main, 0.12),
                  color: theme.palette.secondary.light,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                })}
              />
              <Chip
                label="Coaching sportif Versailles"
                size="small"
                sx={(theme) => ({
                  bgcolor: alpha(theme.palette.secondary.main, 0.12),
                  color: theme.palette.secondary.light,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                })}
              />
            </Stack>

            <Typography
              component="h2"
              id="zones-intervention"
              variant="h4"
              sx={{ fontWeight: 100, letterSpacing: "-0.01em" }}
            >
              Zones d&apos;intervention – Versailles &amp; Yvelines (78)
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Fit On The Road intervient comme coach sportif à Versailles et
              dans l&apos;ensemble des Yvelines (78), aussi bien pour le
              coaching sportif Yvelines que pour le sport en entreprise 78.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Que vous soyez un particulier à la recherche d&apos;un coaching
              sportif dans les Yvelines ou une entreprise souhaitant mettre en
              place un programme QVT structuré, les interventions sont possibles
              à Versailles et dans les principales communes du territoire.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  Villes couvertes
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, lineHeight: 1.7 }}>
                  {coveredCities.map((city) => (
                    <Box
                      component="li"
                      key={city}
                      sx={{ color: "text.secondary", pr: 1 }}
                    >
                      {city}
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  Présence régulière
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, lineHeight: 1.7 }}>
                  {regularPresenceCities.map((city) => (
                    <Box
                      component="li"
                      key={city}
                      sx={{ color: "text.secondary", pr: 1 }}
                    >
                      {city}
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Interventions sur site en entreprise, en extérieur, à domicile ou
              en espace adapté selon votre besoin.
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            component="figure"
            role="button"
            tabIndex={0}
            aria-label="Agrandir la carte des zones d'intervention"
            onDoubleClick={openModal}
            onKeyDown={handleKeyOpen}
            sx={{
              m: 0,
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 18px 55px rgba(0,0,0,0.45)",
              border: (theme) =>
                `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
              bgcolor: "grey.900",
              cursor: "zoom-in",
              outline: "none",
            }}
          >
            <picture>
              <source srcSet={carteYvelinesAvif} type="image/avif" />
              <source srcSet={carteYvelinesWebp} type="image/webp" />
              <img
                src={carteYvelinesJpg}
                alt="Carte des zones d'intervention coach sportif Versailles et Yvelines 78"
                loading="lazy"
                decoding="async"
                width={1200}
                height={558}
                style={{
                  width: "100%",
                  display: "block",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </picture>
            <Typography
              component="figcaption"
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", p: 1.5, bgcolor: "grey.900" }}
            >
              Double-cliquez pour agrandir la carte. Carte statique optimisée
              (AVIF/WEBP), sans iframe Google Maps pour préserver le LCP.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="carte-yvelines-full"
        sx={{ display: "grid", placeItems: "center", p: { xs: 2, sm: 3 } }}
      >
        <Box
          sx={{
            position: "relative",
            width: "min(1400px, 98vw)",
            height: "92vh",
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: "0 25px 80px rgba(0,0,0,0.65)",
            overflow: "hidden",
            outline: (theme) =>
              `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          }}
        >
          <IconButton
            onClick={closeModal}
            aria-label="Fermer la carte"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: (theme) => alpha(theme.palette.background.default, 0.8),
              "&:hover": {
                bgcolor: (theme) =>
                  alpha(theme.palette.background.default, 0.95),
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <picture>
            <source srcSet={carteYvelinesAvif} type="image/avif" />
            <source srcSet={carteYvelinesWebp} type="image/webp" />
            <img
              id="carte-yvelines-full"
              src={carteYvelinesJpg}
              alt="Carte des zones d'intervention coach sportif Versailles et Yvelines 78"
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </picture>
        </Box>
      </Modal>
    </Box>
  );
}

export default LocalAreaSection78;
