import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

import collectiveCoachingPic from "@assets/images/individual-collective-coaching.jpeg";
import collectiveCoachingPicWebp from "@assets/images/individual-collective-coaching.webp";
import privateCoachingPic from "@assets/images/individual-private-coaching.jpg";
import privateCoachingPicWebp from "@assets/images/individual-private-coaching.webp";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Cours collectifs",
    description:
      "Retrouvez les cours collectifs en plein air à Bois d'Arcy. Grâce à l’émulation du groupe, l’entraînement devient plus simple, plus sûr, plus efficace et vous permet de sortir de votre zone de confort.",
    image: `image-set(url("${collectiveCoachingPicWebp}") type("image/webp"), url("${collectiveCoachingPic}") type("image/jpeg"))`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Coaching privé et/ou à distance",
    description:
      "Nos coachs vous accompagnes et vous proposent une prestation sur-mesure s’adaptant à votre niveau, vos souhaits et à vos agendas.",
    image: `image-set(url("${privateCoachingPicWebp}") type("image/webp"), url("${privateCoachingPic}") type("image/jpeg"))`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Évènements",
    description: "Organisez un moment sportif pour une occasion particulière.",
    image: `image-set(url("${collectiveCoachingPicWebp}") type("image/webp"), url("${collectiveCoachingPic}") type("image/jpeg"))`,
  },
];

function IndividualFeatures() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="individual-features" sx={{ py: 4 }}>
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
                variant="h2"
                className="uppercase"
                color="text.primary"
              >
                ... pour les particuliers
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                Des objectifs clairs, des résultats concrets – Découvrez le
                coaching sur mesure !
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
                <Link
                  href="particuliers"
                  color="primary"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { transition: "0.2s" },
                    "&:hover > svg": { transform: "translateX(2px)" },
                  }}
                >
                  <span>En savoir plus</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </Link>
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
                      <Link
                        href="particuliers"
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          "& > svg": { transition: "0.2s" },
                          "&:hover > svg": { transform: "translateX(2px)" },
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <span>En savoir plus</span>
                        <ChevronRightRoundedIcon
                          fontSize="small"
                          sx={{ mt: "1px", ml: "2px" }}
                        />
                      </Link>
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

export default IndividualFeatures;
