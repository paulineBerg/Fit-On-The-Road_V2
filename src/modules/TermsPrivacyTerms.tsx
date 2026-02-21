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
          <h2>
            <Typography component="h2" variant="h2" color="text.primary">
              Politique de confidentialité
            </Typography>
          </h2>
          <Typography variant="body1" color="text.secondary">
            Section en cours
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsPrivacyTerms;
