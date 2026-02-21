import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import Pickup from "@app/assets/images/Pick-up.jpeg";
import PickupWebp from "@app/assets/images/Pick-up.webp";

const items = [
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Un moment inoubliable",
    description:
      "Créez des souvenirs impérissables grâce à une activité originale et adaptée à tous les niveaux.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Une activité sur-mesure",
    description:
      "Nous concevons des séances personnalisées en fonction de vos envies, de votre thème et de votre condition physique.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Une ambiance festive",
    description:
      "Déguisements, musique, défis... nous vous garantissons une atmosphère conviviale et pleine d'énergie.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Un coach motivant",
    description:
      "Bénéficiez de l'expertise de nos coachs sportifs pour vous accompagner tout au long de votre séance.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Des souvenirs",
    description:
      "Bénéficiez de l'expertise de nos coachs sportifs pour vous accompagner tout au long de votre séance.",
  },
];

const items2 = [
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Circuit training en plein air",
    description:
      "Dépassez vos limites grâce à des exercices variés et intensifs.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Bootcamp",
    description: "Tonifiez votre corps et brûlez des calories en vous amusant.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Jeux sportifs",
    description:
      "Relâchez la pression et renforcez la cohésion de votre groupe grâce à des jeux adaptés à tous les âges.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Yoga en plein air",
    description:
      "Détendez-vous et recentrez-vous grâce à une séance de yoga adaptée à tous les niveaux.",
  },
];

const items3 = [
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "La conception de la séance",
    description:
      "Nous élaborons un programme sur-mesure en fonction de vos objectifs et de vos contraintes.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Le matériel",
    description:
      "Nous fournissons tout le matériel nécessaire à la réalisation de votre séance.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Le lieu",
    description:
      "Nous pouvons vous proposer des lieux adaptés à votre événement ou nous déplaçons sur le lieu de votre choix.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Les photos et vidéos",
    description:
      "Immortalisez votre événement grâce à nos partenaires photographes et vidéastes.",
  },
];

function IndividualEvent() {
  return (
    <Box
      id="individual-event"
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
          <h2>
            <Typography component="h2" variant="h2" sx={{ py: 4 }}>
              Vous souhaitez organiser un événement mémorable original
            </Typography>
          </h2>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            FIT ON THE ROAD vous propose une expérience unique et sur-mesure. En
            organisant une séance de sport ludique et personnalisée autour de
            notre pick-up, vous offrez à vos proches un moment de partage, de
            rire et de dépassement de soi.
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            Que ce soit pour un enterrement de vie de jeune fille/garçon, un
            anniversaire ou tout autre événement spécial, FIT ON THE ROAD est la
            solution idéale pour vous démarquer.
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
          <h3>
            <Typography component="h4" variant="h4" sx={{ py: 4 }}>
              Les possibilités sont infinies, nous adaptons nos séances à vos
              envies et à votre thème.
            </Typography>
          </h3>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            Imaginez-vous en train de réaliser un parcours d&apos;obstacles, de
            vous affronter lors d&apos;un concours de pompes ou de vous détendre
            lors d&apos;une séance de yoga en pleine nature
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            Les possibilités sont infinies
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items3.map((item) => (
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
          <h3>
            <Typography component="h4" variant="h4" sx={{ py: 4 }}>
              Organiser un événement sportif n&apos;a jamais été aussi simple
            </Typography>
          </h3>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            FIT ON THE ROAD s&apos;occupe de tout pour vous
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items2.map((item) => (
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
        <div>
          <Typography variant="h4" sx={{ color: "grey.400", py: 4 }}>
            Contactez-moi pour me parler de votre projet
          </Typography>
        </div>
      </Container>
      <div style={{ textAlign: "center" }}>
        <picture>
          <source srcSet={PickupWebp} type="image/webp" />
          <img
            src={Pickup}
            alt="Pick-up Fit on the road"
            style={{ width: "100%" }}
            loading="lazy"
            decoding="async"
            width={2000}
            height={802}
          />
        </picture>
      </div>
    </Box>
  );
}

export default IndividualEvent;
