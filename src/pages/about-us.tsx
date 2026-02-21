import React from "react";

import PickupCollection from "@app/modules/PickupCollection";
import { Typography, Box } from "@mui/material";
import LogoClic from "@app/modules/LogoClic";
import Video from "@app/modules/landing/Video";
import Contact from "@shared/Contact";
import { UserType } from "@app/types/types";
import Pricing from "@app/modules/Pricing";
import AboutusJu from "@app/modules/AboutusJu";
import AboutusServices from "@app/modules/AboutusServices";

function AboutUs() {
  return (
    <Box
      id="about-us"
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
        <h1>
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
            ABOUT FIT ON THE ROAD
          </Typography>
        </h1>
        <AboutusJu />
        <PickupCollection />
        <Box id="services" />
        <AboutusServices />
        <Video />
        <Pricing />
        <Contact defaultUserType={UserType.INDIVIDUAL} />
        <LogoClic />
      </Box>
    </Box>
  );
}

export default AboutUs;
