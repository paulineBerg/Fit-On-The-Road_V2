import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import teamBuildingPic from "@assets/images/entreprises-collective-coaching.jpeg";
import teamBuildingPicWebp from "@assets/images/entreprises-collective-coaching.webp";

const items = [
  {
    title: "Des expériences inoubliables",
    description:
      "Au-delà de l'effort physique, nous créons des moments forts qui marqueront les esprits de vos collaborateurs.",
    image: `image-set(url("${teamBuildingPicWebp}") type("image/webp"), url("${teamBuildingPic}") type("image/jpeg"))`,
  },
  {
    title: "Des bénéfices concrets pour votre entreprise",
    description:
      "Cohésion d'équipe, motivation, créativité et réduction du stress.",
    image: `image-set(url("${teamBuildingPicWebp}") type("image/webp"), url("${teamBuildingPic}") type("image/jpeg"))`,
  },
  {
    title: "Une approche personnalisée",
    description:
      "Nous prenons le temps de comprendre vos besoins et vos attentes afin de vous proposer un programme sur mesure",
    image: `image-set(url("${teamBuildingPicWebp}") type("image/webp"), url("${teamBuildingPic}") type("image/jpeg"))`,
  },
  {
    title: "Des activités variées",
    description:
      "Large gamme d'activités, aussi bien en intérieur qu'en extérieur : des sports collectifs aux challenges physiques et autres activités ludiques ou de bien-être",
    image: `image-set(url("${teamBuildingPicWebp}") type("image/webp"), url("${teamBuildingPic}") type("image/jpeg"))`,
  },
  {
    title: "Un accompagnement sur mesure",
    description:
      "Nos coachs sportifs diplômés vous accompagnent, garantissant ainsi la sécurité et le bon déroulement de toutes les activités.",
    image: `image-set(url("${teamBuildingPicWebp}") type("image/webp"), url("${teamBuildingPic}") type("image/jpeg"))`,
  },
  {
    title: "Événements spéciaux ",
    description:
      "Anniversaires d'entreprise, fêtes de fin d'année, nous créons des événements sportifs sur mesure pour marquer les esprits.",
    image: `image-set(url("${teamBuildingPicWebp}") type("image/webp"), url("${teamBuildingPic}") type("image/jpeg"))`,
  },
];

function EnterpriseTeamBuilding() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="enterprise-team-building" sx={{ py: 4 }}>
      <div className="flex flex-col gap-32">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component="p"
                variant="h2"
                className="uppercase"
                color="text.primary"
              >
                Team Building
              </Typography>
              <Typography
                component="p"
                variant="h3"
                className="uppercase"
                color="text.primary"
              >
                du sport, du fun et de la cohésion !
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                Chez FIT ON THE ROAD, nous croyons que le sport est bien plus
                qu&apos;un simple exercice physique. C&apos;est un vecteur de
                partage, de dépassement de soi et de renforcement des liens.
                Nous avons donc conçu des programmes uniques que nous adaptons à
                chaque entreprise et à chaque objectif.
              </Typography>
            </div>
            <Grid
              container
              item
              gap={1}
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
              }}
            >
              {items.map(({ title }, index) => (
                <Chip
                  key={`card-${title}`}
                  label={title}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    borderColor: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "";
                      }
                      return selectedItemIndex === index ? "primary.light" : "";
                    },
                    background: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index ? "none" : "";
                      }
                      return selectedItemIndex === index ? "none" : "";
                    },
                    backgroundColor:
                      selectedItemIndex === index ? "primary.main" : "",
                    "& .MuiChip-label": {
                      color: selectedItemIndex === index ? "#fff" : "",
                    },
                  }}
                />
              ))}
            </Grid>
            <Box
              component={Card}
              variant="outlined"
              sx={{
                display: { xs: "auto", sm: "none" },
                mt: 4,
              }}
            >
              <Box
                sx={{
                  backgroundImage: items[selectedItemIndex].image,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 280,
                }}
              />
              <Box sx={{ px: 2, pb: 2, pt: 2 }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight="bold"
                >
                  {selectedFeature.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ my: 0.5 }}
                >
                  {selectedFeature.description}
                </Typography>
              </Box>
            </Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              useFlexGap
              sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
            >
              {items.map(({ title, description }, index) => (
                <Card
                  key={title}
                  variant="outlined"
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    p: 3,
                    height: "fit-content",
                    width: "100%",
                    background: "none",
                    backgroundColor:
                      selectedItemIndex === index
                        ? "action.selected"
                        : undefined,
                    borderColor: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "grey.200";
                      }
                      return selectedItemIndex === index
                        ? "primary.dark"
                        : "grey.800";
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "left",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { md: "center" },
                      gap: 2.5,
                    }}
                  >
                    <Box sx={{ textTransform: "none" }}>
                      <Typography
                        component="h5"
                        color="text.primary"
                        variant="h5"
                        fontWeight="bold"
                      >
                        {title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ my: 0.5 }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "none", sm: "flex" },
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: items[selectedItemIndex].image,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default EnterpriseTeamBuilding;
