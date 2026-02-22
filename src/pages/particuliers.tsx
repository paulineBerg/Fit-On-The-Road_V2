import React from "react";

import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import Contact from "@shared/Contact";
import Seo from "@shared/Seo";
import { UserType } from "@app/types/types";

import Pricing from "@features/Pricing";
import PhoneApp from "@features/PhoneApp";
import IndividualCollectiveCoaching from "@features/IndividualCollectiveCoaching";
import IndividualPrivateCoaching from "@features/IndividualPrivateCoaching";
import IndividualEvent from "@features/IndividualEvent";
import Testimonials from "@features/Testimonials";
import Video from "@features/landing/Video";
import LogoClic from "@components/LogoClic";

function Particuliers() {
  return (
    <>
      <Seo
        title="Coaching sportif pour particuliers | Fit On The Road"
        description="Cours collectifs, coaching privé et événements sportifs en plein air ou à domicile. Programmes personnalisés et suivi."
        canonicalPath="/particuliers"
        keywords="coaching particulier, cours collectif, coaching privé, sport à domicile"
      />
      <Box
        id="particular"
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
            FIT ON THE ROAD, la salle de sport qui vient à vous.
          </Typography>
          <Divider />
          <Video />
          <Box id="services" />
          <IndividualCollectiveCoaching />
          <IndividualPrivateCoaching />
          <IndividualEvent />
          <Divider />
          <Box id="pricing" />
          <Pricing />
          <Divider />
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              py: 4,
              alignSelf: "center",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Comme une envie de sport ! 😉
          </Typography>
          <Divider />
          <Box id="more" />
          <PhoneApp />
          <Testimonials />
          <Contact defaultUserType={UserType.INDIVIDUAL} />
          <LogoClic />
        </Box>
      </Box>
    </>
  );
}

export default Particuliers;
