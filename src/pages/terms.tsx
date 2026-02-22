import React from "react";

import { Box, Typography } from "@mui/material";

import { UserType } from "@app/types/types";
import Contact from "@shared/Contact";
import Seo from "@shared/Seo";
import TermsLegalTerms from "@features/TermsLegalTerms";
import TermsPrivacyTerms from "@features/TermsPrivacyTerms";
import TermsTermsAndConditions from "@features/TermsTermsAndConditions";
import LogoClic from "@components/LogoClic";

function Terms() {
  return (
    <>
      <Seo
        title="Mentions légales & politique de confidentialité | Fit On The Road"
        description="Mentions légales, conditions générales d'utilisation et politique de confidentialité de Fit On The Road."
        canonicalPath="/terms"
        keywords="mentions légales, politique de confidentialité, CGU"
      />
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
          />
          <TermsPrivacyTerms />
          <TermsTermsAndConditions />
          <TermsLegalTerms />
          <Contact defaultUserType={UserType.ENTERPRISE} />
          <LogoClic />
        </Box>
      </Box>
    </>
  );
}

export default Terms;
