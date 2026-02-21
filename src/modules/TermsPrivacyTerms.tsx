import React from "react";

import { alpha, Box, Container, Typography } from "@mui/material";

function TermsPrivacyTerms() {
  return (
    <Box
      id="privacyterms"
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
            Politique de confidentialité
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Dernière mise à jour : 19 février 2026
          </Typography>

          <Box sx={{ textAlign: "left", mt: 3, display: "grid", gap: 2 }}>
            <div>
              <Typography variant="h6">1. Responsable du traitement</Typography>
              <Typography variant="body1" color="text.secondary">
                FIT ON THE ROAD
                <br />
                32 Route Blanche
                <br />
                78910 Orvillers
                <br />
                France
                <br />
                Email : [À RENSEIGNER]
              </Typography>
            </div>

            <div>
              <Typography variant="h6">2. Données collectées</Typography>
              <Typography variant="body1" color="text.secondary">
                Nom et prénom, adresse email, numéro de téléphone, contenu du
                message (formulaire), données techniques (adresse IP,
                navigateur, appareil).
              </Typography>
            </div>

            <div>
              <Typography variant="h6">3. Finalités du traitement</Typography>
              <Typography variant="body1" color="text.secondary">
                Répondre aux demandes de contact, organiser les prestations de
                coaching, gérer la relation client, respecter les obligations
                légales et comptables.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">4. Base légale</Typography>
              <Typography variant="body1" color="text.secondary">
                Consentement (formulaire), exécution d&apos;un contrat,
                obligations légales, intérêt légitime de l&apos;entreprise.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">5. Durée de conservation</Typography>
              <Typography variant="body1" color="text.secondary">
                Prospects : 3 ans après dernier contact. Clients : durée légale
                comptable.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">6. Partage des données</Typography>
              <Typography variant="body1" color="text.secondary">
                Pas de vente ni cession. Traitement possible par
                l&apos;hébergeur IONOS et prestataires techniques si nécessaire.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">7. Vos droits</Typography>
              <Typography variant="body1" color="text.secondary">
                Accès, rectification, effacement, opposition, limitation,
                portabilité. Pour exercer vos droits : [EMAIL À RENSEIGNER].
                Réclamation possible auprès de la CNIL (www.cnil.fr).
              </Typography>
            </div>

            <div>
              <Typography variant="h6">8. Sécurité</Typography>
              <Typography variant="body1" color="text.secondary">
                Mesures techniques et organisationnelles appropriées sont mises
                en place pour protéger vos données.
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsPrivacyTerms;
