import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PrivacyDialogProps {
  open: boolean;
  onClose: () => void;
  /** Avoid forcing scroll to top when closing; default false to preserve current scroll. */
  disableScrollReset?: boolean;
}

function PrivacyDialog({
  open,
  onClose,
  disableScrollReset = true,
}: PrivacyDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-labelledby="privacy-dialog-title"
      container={() => document.getElementById("root")}
      // Prevent focus enforcement from scrolling the body to top when closing.
      disableScrollLock={disableScrollReset}
    >
      <DialogTitle
        id="privacy-dialog-title"
        sx={{ display: "flex", alignItems: "center", pr: 4 }}
      >
        Politique de confidentialité
        <IconButton aria-label="Fermer" onClick={onClose} sx={{ ml: "auto" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" gutterBottom>
          Dernière mise à jour : 19 février 2026
        </Typography>
        <Typography variant="h6" gutterBottom>
          Responsable du traitement
        </Typography>
        <Typography variant="body1" paragraph>
          FIT ON THE ROAD – 32 Route Blanche, 78910 Orvilliers (France) –
          contact@fit-ontheroad.fr
        </Typography>
        <Typography variant="h6" gutterBottom>
          Données collectées
        </Typography>
        <Typography variant="body1" paragraph>
          Nom, email, téléphone (optionnel), contenu du message, adresse IP et
          données techniques du navigateur.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Finalités
        </Typography>
        <Typography variant="body1" paragraph>
          Répondre à votre demande, organiser les prestations, assurer le suivi
          client et respecter les obligations légales.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Base légale &amp; conservation
        </Typography>
        <Typography variant="body1" paragraph>
          Consentement (formulaire). Prospects : 3 ans après le dernier contact.
          Clients : durée légale comptable.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Vos droits
        </Typography>
        <Typography variant="body1" paragraph>
          Accès, rectification, effacement, opposition, limitation, portabilité.
          Contact : contact@fit-ontheroad.fr. Réclamation possible auprès de la
          CNIL (www.cnil.fr).
        </Typography>
        <Typography variant="body1">
          Pour plus de détails, consultez la page Mentions légales &amp;
          Politique de confidentialité.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyDialog;
