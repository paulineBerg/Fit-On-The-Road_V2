import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Hero from "@app/modules/landing/Hero";
import Highlights from "@app/modules/Highlights";
import Pricing from "@app/modules/Pricing";
import Testimonials from "@app/modules/Testimonials";
import FAQ from "@app/modules/FAQ";
import Contact from "@shared/Contact";
import PhoneApp from "@app/modules/PhoneApp";
import EnterpriseFeatures from "@app/modules/EnterpriseFeatures";
import IndividualFeatures from "@app/modules/IndividualFeatures";
import { UserType } from "@app/types/types";
import Video from "@app/modules/landing/Video";

function LandingPage() {
  return (
    <>
      <Box id="top" />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Box id="services" />
        <EnterpriseFeatures />
        <IndividualFeatures />
        <Divider />
        <Video />
        <Highlights />
        <Pricing />
        <Testimonials />
        <Divider />
        <Contact defaultUserType={UserType.ENTERPRISE} />
        <PhoneApp />
        <Box id="more" />
        <FAQ />
      </Box>
    </>
  );
}

export default LandingPage;
