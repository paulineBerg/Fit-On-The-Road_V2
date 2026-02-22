import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";

function TermsLegalTerms() {
  return (
    <Box
      id="legal-terms"
      sx={{
        width: "100%",
        py: 5,
        display: "flex",
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "80%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="p" variant="h2" color="text.primary">
            Mentions légales
          </Typography>
          <Box sx={{ textAlign: "left", mt: 2, display: "grid", gap: 1.5 }}>
            <Typography variant="h6" color="text.primary">
              Éditeur du site
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Le présent site&nbsp;
              <Typography component="span" color="text.primary">
                https://fit-ontheroad.fr
              </Typography>{" "}
              est édité par :
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>FIT ON THE ROAD</strong>
              <br />
              Société par Actions Simplifiée (SAS)
              <br />
              SIREN : 893 637 322
              <br />
              SIRET : 893 637 322 00031
              <br />
              Numéro de TVA intracommunautaire : FR79893637322
              <br />
              Code APE : 9311Z – Gestion d&apos;installations sportives
              <br />
              Date de création : 03 février 2021
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Siège social :</strong>
              <br />
              32 Route Blanche
              <br />
              78910 Orvillers
              <br />
              France
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Président :</strong> Julien LE CHEVALIER
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Email :</strong> julien@fit-ontheroad.fr
            </Typography>
            <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
              Hébergement
            </Typography>
            <Typography variant="body1" color="text.secondary">
              IONOS SARL
              <br />
              7 Place de la Gare
              <br />
              57200 Sarreguemines
              <br />
              France
              <br />
              <Typography
                component="a"
                href="https://www.ionos.fr"
                color="primary"
              >
                https://www.ionos.fr
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsLegalTerms;
