import React from "react";

import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Contact from "@shared/Contact";
import Seo from "@shared/Seo";
import { UserType } from "@app/types/types";
import IndividualFeatures from "@features/IndividualFeatures";
import PricingParticuliers from "@features/PricingParticuliers";
import PhoneApp from "@features/PhoneApp";
import IndividualCollectiveCoaching from "@features/IndividualCollectiveCoaching";
import IndividualPrivateCoaching from "@features/IndividualPrivateCoaching";
import IndividualEvent from "@features/IndividualEvent";
import Testimonials from "@features/Testimonials";
import Video from "@features/landing/Video";
import FAQ, { individualFaqs } from "@features/FAQ";

function Particuliers() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: individualFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title="Coaching sportif pour particuliers | Fit On The Road"
        description="Cours collectifs, coaching privé et événements sportifs en plein air ou à domicile. Programmes personnalisés et suivi."
        canonicalPath="/particuliers"
        keywords="coaching particulier, cours collectif, coaching privé, sport à domicile"
        jsonLd={faqJsonLd}
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
          <IndividualFeatures />
          <IndividualCollectiveCoaching />
          <IndividualPrivateCoaching />
          <IndividualEvent />
          <Divider />
          <Box id="pricing" />
          <PricingParticuliers />
          <Divider />
          <PhoneApp />
          <Box id="contact" />
          <Contact defaultUserType={UserType.INDIVIDUAL} />
          <Divider />
          <Box id="more" />
          <Testimonials />
          <FAQ />
        </Box>
      </Box>
    </>
  );
}

export default Particuliers;
