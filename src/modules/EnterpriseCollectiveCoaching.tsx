import React from "react";
import { alpha, Box } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Pour vos employés, c'est l'opportunité de",
    description:
      "Se sentir épanouis, Booster leur performance, Développer un esprit d'équipe solide, Prévenir les risques liés à la sédentarité.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Pour votre entreprise, c'est l'assurance de",
    description:
      "Réduire les coûts liés à l'absentéisme, Améliorer votre marque employeur, Augmenter votre retour sur investissement, Créer un environnement de travail plus sain et plus agréable.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Les + de FIT ON THE ROAD",
    description:
      "Des programmes sur mesure, Un suivi personnalisé, Une large gamme d'activités.",
  },
];

function EnterpriseCollectiveCoaching() {
  return (
    <Box
      id="collective-coaching"
      sx={{
        py: 5,
        color: "white",
        width: "100%",
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "80%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h2">
            Le sport, clé de votre performance collective
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            En choisissant FIT ON THE ROAD, vous investissez dans le capital
            humain de votre entreprise. Nos cours collectifs sur site sont
            animés par des coachs professionnels et diplômés.
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Nos programmes sont conçus pour réduire le stress, améliorer la
            santé physique et mentale, et favoriser une atmosphère positive.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={`grid-${item.title}`}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography component="h4" fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default EnterpriseCollectiveCoaching;
