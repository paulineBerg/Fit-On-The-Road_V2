import React from "react";

import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Typography, alpha, Box, Container, Button } from "@mui/material";
import julien from "@assets/images/julien.jpg";
import julienWebp from "@assets/images/julien.webp";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import WebpPicture from "@shared/WebpPicture";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Notre raison d’être",
    description:
      "Quand il s’agit de votre santé et bien-être, vous ne devriez pas avoir à adapter votre vie autour des cours de gym et des horaires, traitant l’exercice comme une autre corvée.",
  },
  {
    description:
      "Ainsi, quel que soit votre niveau de pratique, vos besoins et votre localisation, nos Coachs viennent à vous et vous donnent rendez-vous dans l’espace de votre choix, intérieur ou extérieur, pour une pratique sportive pleine d’énergie et de bonne humeur.",
  },
];

function AboutusJu() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const juWebps = [julienWebp, julienWebp];
  const juFallbacks = [julien, julien];

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Box
      id="about-us-ju"
      sx={{
        width: "100%",
        bgcolor: "background.default",
        py: 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="body2" sx={{ color: "grey.400", py: 4 }}>
          Parti de son envie de partager sa passion du sport et de la santé, son
          créateur, ancien espoir du taekwondo français et diplômé d’état depuis
          près de 20 ans : Julien a souhaité continuer d’accompagner les
          adhérents de la salle où il dispensait des cours en plein Covid.
        </Typography>
        <div className="flex flex-col gap-32">
          <Grid container spacing={6}>
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
                <WebpPicture
                  webp={juWebps[selectedItemIndex]}
                  fallback={juFallbacks[selectedItemIndex]}
                  alt="Portrait de Julien"
                  pictureStyle={{ width: "100%", height: "100%" }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <Typography
                  component="h2"
                  variant="h4"
                  className="uppercase"
                  color="text.primary"
                >
                  Une passion avant tout
                </Typography>
                <Box id="more" />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: { xs: 2, sm: 4 } }}
                >
                  Il équipe alors son pickup de matériel sportif pour aller à la
                  rencontre des personnes pour permettre à chacun de continuer à
                  s’entrainer et s’évader. En 2021, l’idée ayant fait son
                  chemin, Fit on the Road se professionnalise et démarre sous sa
                  forme actuelle.
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
                    key={`chip-${title}`}
                    label={title}
                    onClick={() => handleItemClick(index)}
                    sx={{
                      borderColor:
                        selectedItemIndex === index ? "primary.light" : "",
                      background: selectedItemIndex === index ? "none" : "",
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
                <WebpPicture
                  webp={juWebps[selectedItemIndex]}
                  fallback={juFallbacks[selectedItemIndex]}
                  alt="Portrait de Julien"
                  pictureStyle={{ width: "100%", minHeight: 280 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
                <Box sx={{ px: 2, pb: 2, pt: 2 }}>
                  <Typography
                    component="h3"
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
                {items.map(({ icon, title, description }, index) => (
                  <Card
                    key={`card-${title}`}
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
                        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "fit",
                      }}
                    >
                      <Box
                        sx={{
                          color: (theme) => {
                            if (theme.palette.mode === "light") {
                              return selectedItemIndex === index
                                ? "primary.main"
                                : "grey.300";
                            }
                            return selectedItemIndex === index
                              ? "primary.main"
                              : "grey.700";
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      <Box sx={{ textTransform: "none" }}>
                        <Typography
                          color="text.primary"
                          variant="h5"
                          component="h5"
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
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default AboutusJu;
