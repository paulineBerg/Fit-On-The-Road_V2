import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Excellence en Coaching et Formation Continue",
    description:
      "Mettre à disposition des coachs formations et certifications régulières pour garantir les meilleures pratiques et les approches les plus récentes en matière de sport et de bien-être.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Diversification et Personnalisation des Offres",
    description:
      "Développer des programmes de coaching adaptables qui répondent aux besoins variés des clients, qu'il s'agisse de cours collectifs, séances individuelles, ou de coaching à distance. Proposer des solutions sur mesure basées sur les objectifs personnels de chaque client, leur condition physique et leurs contraintes.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Intégration Technologique",
    description:
      "Offrir à nos clients la possibilité de réserver leurs cours et l'accès à des ressources exclusives telles que des vidéos d'entraînement, des conseils forme et une communauté en ligne active.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Mobilité et Accessibilité des Services",
    description:
      "Développer une salle de sport mobile équipée de matériel modulaires permettant une flexibilité maximale, capable de se déplacer jusqu'aux clients, qu'ils soient des particuliers ou des entreprises, pour offrir des sessions de coaching sur place. Cette solution mobile vise à supprimer les obstacles logistiques et à rendre le sport accessible en tout lieu.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Promotion du Bien-être Holistique",
    description:
      "Intégrer dans la pratique une dimension éducative sur la nutrition, la gestion du stress et le bien-être mental pour compléter l'entraînement physique en offrant une approche globale du bien-être.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Soutien à la Communauté et Impact Social",
    description:
      "Donner aux interactions sociales une place conséquente pour permettre aux participants de se rencontrer et d'échanger renforçant ainsi la cohésion de groupe et la motivation collective. Un temps est inclu dans chaque séance, qu'elle soit individuelle ou collective, à l'évaluation de l'état d'esprit pour ainsi adapter le contenu et la pratique, contribuant à un environnement de confiance et de soutien.",
  },
];

function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        py: 5,
        color: "white",
        bgcolor: "#06090a",
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
          <Typography component="p" variant="h4">
            Les ambitions Fit On The Road
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Ces ambitions visent à créer un environnement de coaching sportif où
            les interactions sociales et le bien-être mental sont autant
            valorisés que la performance physique, assurant une expérience
            enrichissante et complète pour chaque participant.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: "100%", md: "80%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Ces ambitions visent à créer un environnement de coaching sportif où
            les interactions sociales et le bien-être mental sont autant
            valorisés que la performance physique, assurant une expérience
            enrichissante et complète pour chaque participant.
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

export default Highlights;
