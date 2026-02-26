import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type PricingEntreprisesProps = {
  containerSx?: SxProps<Theme>;
  showTitle?: boolean;
};

type EnterpriseOffer = {
  title: string;
  price: string;
  description: string[];
  cta: string;
  variant: "contained" | "outlined";
  highlight?: boolean;
};

const enterpriseOffers: EnterpriseOffer[] = [
  {
    title: "Programme annuel QVT",
    price: "Sur devis",
    description: [
      "Audit QVT offert et plan d'actions 12 mois",
      "Séances hebdomadaires sur site ou outdoor",
      "Ateliers prévention + challenges internes",
      "Reporting RH trimestriel",
    ],
    cta: "Demander un devis",
    variant: "contained",
    highlight: true,
  },
  {
    title: "Team building & événements",
    price: "Sur devis",
    description: [
      "Format 1/2 journée ou journée complète",
      "Cohésion, motivation et engagement collaborateurs",
      "Matériel mobile fourni et sécurisation des zones",
      "Options challenges solidaires / inter-équipes",
    ],
    cta: "Planifier un événement",
    variant: "outlined",
  },
];

function PricingEntreprises({
  containerSx,
  showTitle = true,
}: PricingEntreprisesProps) {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container
      sx={[
        {
          py: { xs: 5, md: 6 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 4 },
        },
        containerSx,
      ]}
    >
      {showTitle && (
        <Box
          sx={{
            width: { sm: "100%", md: "70%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="p" variant="h4" color="text.primary">
            Tarifs entreprise
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Offres clés en main pour intégrer le sport dans votre stratégie QVT,
            avec suivi et reporting pour vos équipes RH.
          </Typography>
        </Box>
      )}

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {enterpriseOffers.map((offer) => (
          <Grid item key={offer.title} xs={12} sm={6} md={5} lg={4}>
            <Card
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                background: offer.highlight
                  ? "linear-gradient(#690000, #410000)"
                  : undefined,
                color: offer.highlight ? "grey.50" : undefined,
                borderColor: offer.highlight ? "primary.dark" : undefined,
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {offer.title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                  <Typography component="p" variant="h2">
                    {offer.price}
                  </Typography>
                  <Typography component="span" variant="h6">
                    {offer.price !== "Sur devis" && "HT"}
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 1,
                    opacity: 0.2,
                    borderColor: offer.highlight ? "grey.200" : "grey.500",
                  }}
                />
                {offer.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 0.5,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: offer.highlight
                          ? "primary.light"
                          : "primary.main",
                      }}
                    />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{
                        color: offer.highlight ? "grey.100" : "text.secondary",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button
                  fullWidth
                  variant={offer.variant}
                  component="a"
                  color={offer.highlight ? "inherit" : "primary"}
                  onClick={() => scrollToSection("contact")}
                >
                  {offer.cta}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PricingEntreprises;
