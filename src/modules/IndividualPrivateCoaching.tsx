import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import privateCoachingPic from "@assets/images/individual-private-coaching.jpg";
import privateCoachingPicWebp from "@assets/images/individual-private-coaching.webp";

const items = [
  {
    title: "Coaching privé",
    description:
      "Notre coach sportif vous propose un suivi individuel adapté à vos besoins spécifiques, vos contraintes et vos envies.",
    image: `image-set(url("${privateCoachingPicWebp}") type("image/webp"), url("${privateCoachingPic}") type("image/jpeg"))`,
  },
  {
    title: "ou Coaching à distance",
    description:
      "Une grande flexibilité : Entraînez-vous où vous voulez, quand vous voulez, sans contrainte d'horaire.",
    image: `image-set(url("${privateCoachingPicWebp}") type("image/webp"), url("${privateCoachingPic}") type("image/jpeg"))`,
  },
];

function IndividualPrivateCoaching() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="individual-private-coaching" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="h4"
        className="uppercase"
        color="text.primary"
      >
        Coaching privé
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
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component="p"
                variant="h4"
                className="uppercase"
                color="text.primary"
              >
                un accompagnement sur mesure pour vous
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                Coaching Sportif Individuel
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
              {items.map(({ title, description }, index) => (
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
                    }}
                  >
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
  );
}

export default IndividualPrivateCoaching;
