import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";

function TermsTermsAndConditions() {
  return (
    <Box
      id="terms-conditions"
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
            Conditions Générales
          </Typography>
          <Box sx={{ textAlign: "left", mt: 3, display: "grid", gap: 2 }}>
            <div>
              <Typography variant="h6">Article 1 – Objet</Typography>
              <Typography variant="body1" color="text.secondary">
                Les présentes Conditions Générales régissent les prestations de
                services de coaching sportif proposées par FIT ON THE ROAD.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 2 – Prestations</Typography>
              <Typography variant="body1" color="text.secondary">
                Les prestations comprennent des services de coaching sportif et
                activités associées. Les modalités sont définies préalablement
                entre l’entreprise et le client.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 3 – Réservation</Typography>
              <Typography variant="body1" color="text.secondary">
                Les réservations s’effectuent par email, téléphone ou formulaire
                de contact. La prestation est confirmée après validation par les
                deux parties.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 4 – Tarifs et paiement
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Les tarifs sont communiqués avant toute prestation. Les
                modalités de paiement sont définies au cas par cas entre
                l’entreprise et le client.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 5 – Annulation</Typography>
              <Typography variant="body1" color="text.secondary">
                Toute annulation doit être signalée dans un délai raisonnable
                avant la prestation.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 6 – Responsabilité</Typography>
              <Typography variant="body1" color="text.secondary">
                La pratique d’une activité sportive comporte des risques. Le
                client déclare être en bonne condition physique et ne présenter
                aucune contre-indication médicale. Le client s’engage à informer
                FIT ON THE ROAD de toute condition de santé particulière. Les
                prestations proposées ne remplacent pas un avis médical. FIT ON
                THE ROAD ne pourra être tenue responsable en cas de blessure
                résultant d’un manquement aux consignes ou d’une condition
                médicale non déclarée.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 7 – Droit applicable</Typography>
              <Typography variant="body1" color="text.secondary">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les tribunaux français seront seuls compétents.
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsTermsAndConditions;
