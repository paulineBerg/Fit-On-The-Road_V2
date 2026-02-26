import React from "react";
import PickupCollection from "@features/PickupCollection";
import { Typography, Box } from "@mui/material";
import Video from "@features/landing/Video";
import Contact from "@shared/Contact";
import Seo from "@shared/Seo";
import { UserType } from "@app/types/types";
import AboutusJu from "@features/AboutusJu";
import Highlights from "@features/Highlights";
import AboutusServices from "@features/AboutusServices";

function AboutUs() {
  return (
    <>
      <Seo
        title="À propos | Fit On The Road"
        description="Découvrez l'équipe Fit On The Road, notre approche du coaching sportif mobile et nos services sur-mesure."
        canonicalPath="/about-us"
        keywords="Fit On The Road, coach sportif mobile, équipe, valeurs"
      />
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
          <AboutusJu />
          <PickupCollection />
          <Box id="services" />
          <AboutusServices />
          <Video />
          <Highlights />
          <Contact defaultUserType={UserType.INDIVIDUAL} />
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
