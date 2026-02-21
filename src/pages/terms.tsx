import React from "react";

import { Box, Typography } from "@mui/material";

import { UserType } from "@app/types/types";
import Contact from "@shared/Contact";
import TermsLegalTerms from "@app/modules/TermsLegalTerms";
import TermsPrivacyTerms from "@app/modules/TermsPrivacyTerms";
import TermsTermsAndConditions from "@app/modules/TermsTermsAndConditions";
import LogoClic from "@app/modules/LogoClic";

function Terms() {
  return (
    <Box
      id="terms"
      sx={{
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <Box id="top" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box sx={{ height: "100%", width: "80%" }} />
        <Typography
          component="h1"
          variant="h1"
          fontWeight="bold"
          sx={{
            fontSize: "clamp(3rem, 10vw, 3.4rem)",
            textAlign: "center",
            color: "primary.light",
          }}
        >
          FIT ON THE ROAD OFFICIEL
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Page en construction ! 😉
        </Typography>
        <TermsPrivacyTerms />
        <TermsTermsAndConditions />
        <TermsLegalTerms />
        <Contact defaultUserType={UserType.ENTERPRISE} />
        <LogoClic />
      </Box>
    </Box>
  );
}

export default Terms;
