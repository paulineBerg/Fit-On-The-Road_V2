import React from "react";

import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { alpha, Typography, Box, Container, Button } from "@mui/material";
import Overview from "@assets/images/Overview.jpg";
import OverviewWebp from "@assets/images/Overview.webp";
import WebpPicture from "@shared/WebpPicture";

const items = [
  {
    id: "presentiel",
    title: "Séances sur-mesure",
    description:
      "Nous vous proposons des séances personnalisées en présentiel, au poids du corps ou équipées pour coller au mieux à vos besoins et votre progression.",
  },
  {
    id: "progression",
    title: "Progression garantie",
    description:
      "En groupe ou individuel, le suivi proposé a toujours pour objectif de vous permettre de terminer votre session et de progresser quel que soit votre niveau.",
  },
];

function AboutUsServices() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const servicesWebps = [OverviewWebp, OverviewWebp];
  const servicesFallbacks = [Overview, Overview];

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Box
      id="about-us-services"
      sx={{
        py: 4,
        backgroundImage: `linear-gradient(#06090a, ${alpha("#000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          pt: { xs: 8, sm: 12 },
          pb: { xs: 4, sm: 8 },
        }}
      >
        <div className="flex flex-col gap-32">
          <Grid container spacing={6} sx={{ py: 4 }}>
            <Grid item xs={12} md={6}>
              <div>
                <Typography
                  component="h4"
                  variant="h4"
                  className="uppercase"
                  color="text.primary"
                >
                  Pour un accompagnement personnalisé avant tout
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
                {items.map(({ id, title }, index) => (
                  <Chip
                    key={id}
                    label={title}
                    onClick={() => handleItemClick(index)}
                    sx={{
                      borderColor: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.light"
                            : "";
                        }
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "";
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
                <WebpPicture
                  webp={servicesWebps[selectedItemIndex]}
                  fallback={servicesFallbacks[selectedItemIndex]}
                  alt={items[selectedItemIndex].title}
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
                {items.map(({ id, title, description }, index) => (
                  <Card
                    key={id}
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
                <WebpPicture
                  webp={servicesWebps[selectedItemIndex]}
                  fallback={servicesFallbacks[selectedItemIndex]}
                  alt={items[selectedItemIndex].title}
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
          </Grid>
        </div>
        <Typography variant="h5" sx={{ color: "text.primary", py: 4 }}>
          Fort de 15 années d’expérience dans le secteur du B to B to C, nous
          contribuons à la construction d’une société plus humaine, plus
          épanouie et plus durable en développant des programmes d’activités
          physiques individuels et collectifs intégrés.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutUsServices;
