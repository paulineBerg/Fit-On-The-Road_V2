import React from "react";

import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import LogoCollection from "@app/modules/LogoCollection";
import { UserType } from "@app/types/types";
import Contact from "@shared/Contact";
import EnterpriseCollectiveCoaching from "@app/modules/EnterpriseCollectiveCoaching";
import EnterpriseTeamBuilding from "@app/modules/EnterpriseTeamBuilding";
import EnterpriseSpaceCreation from "@app/modules/EnterpriseSpaceCreation";
import Pricing from "@app/modules/Pricing";
import LogoClic from "@app/modules/LogoClic";

function Entreprises() {
  return (
    <Box
      id="enterprise"
      sx={{
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
          FIT ON THE ROAD, la salle de sport en entreprise
        </Typography>
        <LogoCollection />
        <Box id="services" />
        <EnterpriseCollectiveCoaching />
        <EnterpriseTeamBuilding />
        <Box id="more" />
        <EnterpriseSpaceCreation />
        <Box id="pricing" />
        <Pricing />
        <Divider />
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ py: 4, alignSelf: "center", width: { sm: "100%", md: "80%" } }}
        >
          Prêt à transformer votre entreprise grâce au sport ? Contactez-nous
          dès maintenant pour une étude personnalisée de vos besoins.
        </Typography>
        <Contact defaultUserType={UserType.ENTERPRISE} />
        <LogoClic />
      </Box>
    </Box>
  );
}

export default Entreprises;
