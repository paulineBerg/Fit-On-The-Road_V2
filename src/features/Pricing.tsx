import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { CollectivePricing, PrivatePricing } from "@app/types/types";

const tiers = [
  {
    title: "Entreprise",
    price: "Sur devis",
    description: [
      "Coaching collectif en entreprise",
      "Ateliers bien-etre",
      "Programme de team building sportifs",
      "Séances de sport mobile sur site avec matériel modulaire",
    ],
    buttonText: "Demander un devis",
    buttonVariant: "outlined",
  },
  {
    title: "Cours collectifs",
    price: { unit: "20€", card: "150€" },
    description: [
      "Séances de CrossFit en plein air à Bois d'Arcy",
      "Adapté à tous les niveaux de condition physique",
      "Séances en petit comité pour une attention idéale",
      "Objectifs variés (force, endurange, remise en forme)",
    ],
    buttonText: "RÉSERVER MA SÉANCE D'ESSAI",
    buttonVariant: "contained",
  },
  {
    title: "Coaching privé",
    price: { physical: "70€", distance: "50€" },
    description: [
      "Coaching personnalisé en physique ou à distance",
      "Programme d'entraînement sur mesure",
      "Suivi nutritionnel et bien-être mental",
      "Accompagnement adapté aux contraintes et ambitions",
    ],
    buttonText: "RÉSERVER MA PREMIÈRE SÉANCE",
    buttonVariant: "outlined",
  },
];

function Pricing() {
  const [collectiveCoachingPrice, setCollectiveCoachingPrice] =
    React.useState<CollectivePricing>("unit");

  const [privateCoachingPrice, setPrivateCoachingPrice] =
    React.useState<PrivatePricing>("physical");

  const handleCollectivePricingChange = () => {
    if (collectiveCoachingPrice === "unit") {
      setCollectiveCoachingPrice("card");
    } else {
      setCollectiveCoachingPrice("unit");
    }
  };

  const handlePrivatePricingChange = () => {
    if (privateCoachingPrice === "distance") {
      setPrivateCoachingPrice("physical");
    } else {
      setPrivateCoachingPrice("distance");
    }
  };

  // #region SCROLLING FUNCTION
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
  // #endregion

  return (
    <Container
      id="pricing"
      sx={{
        py: 5,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="p" variant="h4" color="text.primary">
          Tarifs
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`Ces services sont conçus pour répondre aux besoins variés des clients,
          qu'ils soient entreprises ou particuliers, et visent à offrir une
          expérience de coaching complète et personnalisée.`}
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Entreprise" ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                height: "100%",
                background:
                  tier.title === "Entreprise"
                    ? "linear-gradient(#690000, #410000)"
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: tier.title === "Entreprise" ? "grey.100" : "",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    color: tier.title === "Entreprise" ? "grey.50" : undefined,
                  }}
                >
                  <Typography
                    component="p"
                    variant="h2"
                    height={tier.title === "Entreprise" ? "110.75px" : "72px"}
                  >
                    {typeof tier.price === "string" && tier.price}
                    {typeof tier.price !== "string" &&
                      tier.title === "Cours collectifs" &&
                      tier.price[collectiveCoachingPrice]}
                    {typeof tier.price !== "string" &&
                      tier.title === "Coaching privé" &&
                      tier.price[privateCoachingPrice]}
                  </Typography>
                  <Typography component="span" variant="h6">
                    {tier.title === "Coaching privé" && "la séance"}
                  </Typography>
                </Box>

                {/* TOGGLE PRIX COURS COLLECTIFS */}
                {tier.title === "Cours collectifs" && (
                  <ToggleButtonGroup
                    color="primary"
                    exclusive
                    value={collectiveCoachingPrice}
                    onChange={handleCollectivePricingChange}
                    aria-label="Platform"
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

                {/* TOGGLE PRIX COACHING PRIVÉ */}
                {tier.title === "Coaching privé" && (
                  <ToggleButtonGroup
                    color="primary"
                    exclusive
                    value={privateCoachingPrice}
                    onChange={handlePrivatePricingChange}
                    aria-label="Platform"
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
                {tier.description.map((line) => (
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
                        color:
                          tier.title === "Entreprise"
                            ? "primary.light"
                            : "primary.main",
                      }}
                    />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      height="40px"
                      sx={{
                        color:
                          tier.title === "Entreprise" ? "grey.200" : undefined,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  component="a"
                  onClick={() => scrollToSection("contact")}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Pricing;
