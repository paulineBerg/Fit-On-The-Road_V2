import React, { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Hero from "@app/modules/landing/Hero";
import { UserType } from "@app/types/types";

const EnterpriseFeatures = lazy(
  () => import("@app/modules/EnterpriseFeatures"),
);
const IndividualFeatures = lazy(
  () => import("@app/modules/IndividualFeatures"),
);
const Video = lazy(() => import("@app/modules/landing/Video"));
const Highlights = lazy(() => import("@app/modules/Highlights"));
const Pricing = lazy(() => import("@app/modules/Pricing"));
const Testimonials = lazy(() => import("@app/modules/Testimonials"));
const FAQ = lazy(() => import("@app/modules/FAQ"));
const Contact = lazy(() => import("@shared/Contact"));
const PhoneApp = lazy(() => import("@app/modules/PhoneApp"));

function LandingPage() {
  return (
    <>
      <Box id="top" />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Box id="services" />
        <Suspense fallback={<Box sx={{ height: 80 }} />}>
          <EnterpriseFeatures />
        </Suspense>
        <Suspense fallback={<Box sx={{ height: 80 }} />}>
          <IndividualFeatures />
        </Suspense>
        <Divider />
        <Suspense fallback={<Box sx={{ height: 240 }} />}>
          <Video />
        </Suspense>
        <Suspense fallback={<Box sx={{ height: 120 }} />}>
          <Highlights />
        </Suspense>
        <Suspense fallback={<Box sx={{ height: 120 }} />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<Box sx={{ height: 120 }} />}>
          <Testimonials />
        </Suspense>
        <Divider />
        <Suspense fallback={<Box sx={{ height: 120 }} />}>
          <Contact defaultUserType={UserType.ENTERPRISE} />
        </Suspense>
        <Suspense fallback={<Box sx={{ height: 120 }} />}>
          <PhoneApp />
        </Suspense>
        <Box id="more" />
        <Suspense fallback={<Box sx={{ height: 120 }} />}>
          <FAQ />
        </Suspense>
      </Box>
    </>
  );
}

export default LandingPage;
