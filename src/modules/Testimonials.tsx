import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import corinne from "@app/assets/images/client-corinne.jpg";
import vincent from "@app/assets/images/client-vincent.jpg";

const userTestimonials = [
  {
    avatar: (
      <img
        alt="vincent"
        src={vincent}
        className="rounded object-cover md:w-full w-[50%] object-top"
      />
    ),
    name: "Vincent",
    occupation: "38 ans, ex sportif de haut niveau",
    testimonial: [
      "Ayant arrêté ma carrière depuis 3 ans j’ai toujours ressenti le besoin de faire du sport.",
      "Ju est passé par là avec sa bonne humeur et son professionnalisme.",
      "N’étant pas à Paris mais à Lyon, Ju me fais des programmes à ma convenance, à mes besoins et mes envies toujours dans un souci de progression et de sensations de bien être pour ma tête et mon corps evidemment 💪🏼.",
      "Ju est toujours disponible au besoin, répond et sait parfaitement s’adapter à mes demandes selon mon état de forme, mes obligations professionnelles ou mes évolutions.",
      "Disposant d’une vraie connaissance professionnelle et personnelle de son activité, il sait toujours varier les exercices pour ne pas tomber dans une routine ou une lassitude du sport.",
      "Bref allez y les yeux fermés 😈😈😈",
    ],
  },
  {
    avatar: (
      <img
        alt="corinne"
        src={corinne}
        className="rounded object-cover md:w-full w-[50%] object-top object"
      />
    ),
    name: "Corinne",
    occupation: "60 ans, en recherche d'ajustement à sa santé",
    testimonial: [
      "J’ai fait la connaissance de Julien en 2017. Son professionnalisme, son dynamisme, sa bonne humeur, son humour, sa bienveillance m’ont tout de suite emballée.",
      "Julien nous propose d’excellents trainings à l’extérieur, des moments exceptionnels. Son accompagnement coach privé m'a d'ailleurs permis de découvrir la boxe qui, en période de COVID, a été une vraie soupape de décompression.",
      "Avec une rupture des LCA du genou gauche non opérée il y a plusieurs années ainsi qu’une Arthrodèse lombaire en janvier 2023, Julien a été à l'écoute de mes craintes et de mes envies. Il m’as remise sur pied en s’adaptant à mon rythme, tout en me permettant de me dépasser et d’accomplir des choses que je n’osais plus faire.",
      "Merci Coach Juju.",
    ],
  },
];

function Testimonials() {
  return (
    <Container
      id="testimonials"
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
        <h2>
          <Typography component="h2" variant="h4" color="text.primary">
            Avis clients
          </Typography>
        </h2>
        <Typography component="h2" variant="body1" color="text.secondary">
          {`Parce qu'ils en parlent mieux que nous !`}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial) => (
          <Grid
            item
            // xs={12}
            // sm={6}
            md={6}
            key={`testimonials-${testimonial.name}`}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <div className="flex flex-col md:flex-row gap-2">
                  {testimonial.avatar}
                  <div className="flex flex-col gap-2">
                    {testimonial.testimonial.map((sentence) => (
                      <Typography variant="body2" color="text.secondary">
                        {sentence}
                      </Typography>
                    ))}
                  </div>
                </div>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
