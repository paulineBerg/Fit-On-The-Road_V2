import React from "react";
import { alpha, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Pourquoi choisir FIT ON THE ROAD pour votre espace forme",
    description: [
      "Une expertise complète",
      "Des équipements haut de gamme",
      "Des bénéfices concrets pour votre entreprise",
      "Une flexibilité totale",
    ],
    buttonVariant: "outlined",
  },
  {
    title: "Nos offres pour offrir à vos collaborateurs un espace dédié",
    description: [
      "Conception et aménagement",
      "Equipement",
      "Des bénéfices concrets pour votre entreprise",
      "Une flexibilité totale",
    ],
    buttonVariant: "outlined",
  },
];

function EntrepriseSpaceCreation() {
  return (
    <Box
      id="space-creation"
      sx={{
        py: 5,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
      <Box
        sx={{
          width: { sm: "90%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h2" color="text.primary">
          Un espace forme prêt à l&apos;emploi
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`pour plus dynamisme, nous sommes convaincus que
        l'investissement dans le bien-être de vos collaborateurs contribue à la réussite de votre entreprise.`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`En aménageant une salle de sport en entreprise, vous offrez à vos employés un lieu dédié à leur
          bien-être et à leur développement personnel.`}
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
                    component="h3"
                    variant="h2"
                    height={tier.title === "Entreprise" ? "110.75px" : "72px"}
                  >
                    {tier.title === "Cours collectifs"}
                    {tier.title === "Coaching privé"}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    {tier.title === "Coaching privé" && "la séance"}
                  </Typography>
                </Box>
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EntrepriseSpaceCreation;
