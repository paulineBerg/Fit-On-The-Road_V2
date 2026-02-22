import React, { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Hero from "@features/landing/Hero";
import { UserType } from "@app/types/types";
import Seo from "@shared/Seo";

const EnterpriseFeatures = lazy(() => import("@features/EnterpriseFeatures"));
const IndividualFeatures = lazy(() => import("@features/IndividualFeatures"));
const Video = lazy(() => import("@features/landing/Video"));
const Highlights = lazy(() => import("@features/Highlights"));
const Pricing = lazy(() => import("@features/Pricing"));
const Testimonials = lazy(() => import("@features/Testimonials"));
const FAQ = lazy(() => import("@features/FAQ"));
const Contact = lazy(() => import("@shared/Contact"));
const PhoneApp = lazy(() => import("@features/PhoneApp"));

function LandingPage() {
  return (
    <>
      <Seo
        title="Fit On The Road | Coaching sportif mobile pour particuliers et entreprises"
        description="Coaching sportif privé et cours de CrossFit en plein air à Bois d'Arcy. Séances personnalisées pour particuliers et entreprises."
        canonicalPath="/"
        keywords="CrossFit, coaching sportif, team building, coaching entreprise, coaching particulier"
      />
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
