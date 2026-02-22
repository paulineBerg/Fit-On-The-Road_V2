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
            CONDITIONS GÉNÉRALES DE VENTE
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            FIT ON THE ROAD
          </Typography>
          <Box sx={{ textAlign: "left", mt: 3, display: "grid", gap: 2 }}>
            <div>
              <Typography variant="h6">Article 1 – Objet</Typography>
              <Typography variant="body1" color="text.secondary">
                Les présentes Conditions Générales de Vente (CGV) régissent les
                prestations de coaching sportif proposées par la société FIT ON
                THE ROAD. Toute réservation d’une prestation implique
                l’acceptation pleine et entière des présentes CGV.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 2 – Prestations proposées
              </Typography>
              <Typography variant="body1" color="text.secondary">
                FIT ON THE ROAD propose :<br />
                • Des séances de coaching sportif individuel
                <br />
                • Des séances de coaching sportif en groupe
                <br />
                Les caractéristiques, modalités et tarifs des prestations sont
                communiqués préalablement au client.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 3 – Réservation</Typography>
              <Typography variant="body1" color="text.secondary">
                Les réservations s’effectuent par email, téléphone ou via le
                formulaire de contact du site. Une séance est considérée comme
                confirmée après validation par FIT ON THE ROAD.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 4 – Tarifs</Typography>
              <Typography variant="body1" color="text.secondary">
                Les tarifs sont communiqués avant toute validation. FIT ON THE
                ROAD se réserve le droit de modifier ses tarifs à tout moment.
                Toute séance confirmée est facturée au tarif en vigueur au
                moment de la réservation.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 5 – Modalités de paiement
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Le paiement s’effectue selon les modalités convenues entre les
                parties (virement bancaire, espèces ou autre moyen accepté).
                Sauf accord spécifique, le paiement est exigible au plus tard le
                jour de la prestation. En cas de non-paiement, la société se
                réserve le droit de refuser toute nouvelle réservation.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 6 – Annulation et report
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Toute annulation d’une séance individuelle doit être effectuée
                au minimum 24 heures avant l’horaire prévu. À défaut, la séance
                pourra être considérée comme due et facturée. Pour les séances
                en groupe : aucun remboursement en cas d’absence. Un report peut
                être envisagé à titre exceptionnel selon disponibilité.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 7 – Engagement et responsabilité du client
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Le client déclare : être en bonne condition physique, ne
                présenter aucune contre-indication médicale, informer le coach
                de toute pathologie ou condition particulière. En cas de doute,
                il appartient au client de consulter un professionnel de santé
                avant toute activité physique.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 8 – Responsabilité</Typography>
              <Typography variant="body1" color="text.secondary">
                La pratique d’une activité sportive comporte des risques. FIT ON
                THE ROAD ne pourra être tenue responsable : des blessures
                résultant d’un non-respect des consignes, d’une condition
                médicale non déclarée, ou d’un comportement inadapté du client.
                Les prestations proposées ne constituent en aucun cas un acte
                médical.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 9 – Assurance</Typography>
              <Typography variant="body1" color="text.secondary">
                FIT ON THE ROAD déclare être couverte par une assurance
                responsabilité civile professionnelle. Il appartient au client
                de vérifier qu’il dispose d’une assurance personnelle adaptée.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">Article 10 – Force majeure</Typography>
              <Typography variant="body1" color="text.secondary">
                La société ne pourra être tenue responsable en cas
                d’impossibilité d’exécution résultant d’un cas de force majeure
                (maladie, accident, événement imprévisible, etc.).
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 11 – Données personnelles
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Les données personnelles sont traitées conformément à la
                Politique de confidentialité accessible sur le site.
              </Typography>
            </div>

            <div>
              <Typography variant="h6">
                Article 12 – Droit applicable et litiges
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les parties s’engagent à rechercher une solution
                amiable. À défaut d’accord, les tribunaux compétents seront ceux
                du ressort du siège social de la société.
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsTermsAndConditions;
