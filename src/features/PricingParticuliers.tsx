import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

import { CollectivePricing, PrivatePricing } from "@app/types/types";

type PricingParticuliersProps = {
  containerSx?: SxProps<Theme>;
  showTitle?: boolean;
};

type ParticularOffer =
  | {
      title: "Cours collectifs";
      price: Record<CollectivePricing, string>;
      description: string[];
      buttonText: string;
      buttonVariant: "contained" | "outlined";
    }
  | {
      title: "Coaching privé";
      price: Record<PrivatePricing, string>;
      description: string[];
      buttonText: string;
      buttonVariant: "contained" | "outlined";
    };

const particularOffers: ParticularOffer[] = [
  {
    title: "Cours collectifs",
    price: { unit: "20€", card: "150€" },
    description: [
      "Séances en plein air à Bois d'Arcy",
      "Groupes réduits, coaching individualisé",
      "Objectifs variés : forme, force, mobilité",
      "Ambiance motivante et conviviale",
    ],
    buttonText: "Réserver ma séance d'essai",
    buttonVariant: "contained",
  },
  {
    title: "Coaching privé",
    price: { physical: "70€", distance: "50€" },
    description: [
      "Programme 100% personnalisé",
      "Session à domicile, extérieur ou à distance",
      "Suivi forme + hygiène de vie",
      "Planning adapté à vos contraintes",
    ],
    buttonText: "Réserver ma première séance",
    buttonVariant: "outlined",
  },
];

function PricingParticuliers({
  containerSx,
  showTitle = true,
}: PricingParticuliersProps) {
  const [collectiveCoachingPrice, setCollectiveCoachingPrice] =
    React.useState<CollectivePricing>("unit");

  const [privateCoachingPrice, setPrivateCoachingPrice] =
    React.useState<PrivatePricing>("physical");

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container
      sx={[
        {
          py: { xs: 5, md: 6 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        },
        containerSx,
      ]}
    >
      {showTitle && (
        <Box
          sx={{
            width: { sm: "100%", md: "70%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="p" variant="h4" color="text.primary">
            Tarifs particuliers
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Coaching sur-mesure ou cours collectifs en plein air : choisissez le
            rythme qui vous convient, seul·e ou accompagné·e.
          </Typography>
        </Box>
      )}

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {particularOffers.map((offer) => (
          <Grid item key={offer.title} xs={12} sm={6} md={5} lg={4}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                height: "100%",
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {offer.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                  <Typography component="p" variant="h2">
                    {offer.title === "Cours collectifs" &&
                      offer.price[collectiveCoachingPrice]}
                    {offer.title === "Coaching privé" &&
                      offer.price[privateCoachingPrice]}
                  </Typography>
                  <Typography component="span" variant="h6">
                    {offer.title === "Coaching privé" && "la séance"}
                  </Typography>
                </Box>

                {offer.title === "Cours collectifs" && (
                  <ToggleButtonGroup
                    color="primary"
                    exclusive
                    value={collectiveCoachingPrice}
                    onChange={(_, value: CollectivePricing | null) => {
                      if (value) setCollectiveCoachingPrice(value);
                    }}
                    aria-label="Tarifs cours collectifs"
                    size="small"
                    sx={{
                      backgroundColor: "background.default",
                      "& .Mui-selected": {
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <ToggleButton value="unit">À la séance</ToggleButton>
                    <ToggleButton value="card">
                      <AutoAwesomeIcon sx={{ fontSize: "20px", mr: 1 }} />{" "}
                      Carnet 10 séances
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}

                {offer.title === "Coaching privé" && (
                  <ToggleButtonGroup
                    color="primary"
                    exclusive
                    value={privateCoachingPrice}
                    onChange={(_, value: PrivatePricing | null) => {
                      if (value) setPrivateCoachingPrice(value);
                    }}
                    aria-label="Tarifs coaching privé"
                    size="small"
                    sx={{
                      backgroundColor: "background.default",
                      "& .Mui-selected": {
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <ToggleButton value="physical">En physique</ToggleButton>
                    <ToggleButton value="distance">À distance</ToggleButton>
                  </ToggleButtonGroup>
                )}

                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: "grey.500",
                  }}
                />
                {offer.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: "primary.main",
                      }}
                    />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      height="40px"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button
                  fullWidth
                  variant={offer.buttonVariant}
                  component="a"
                  onClick={() => scrollToSection("contact")}
                >
                  {offer.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PricingParticuliers;
