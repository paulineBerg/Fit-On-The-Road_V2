import React, { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import HeroSegmented from "@features/landing/HeroSegmented";
import CorporateBlockYvelines from "@features/landing/CorporateBlockYvelines";
import IndividualBlockVersailles from "@features/landing/IndividualBlockVersailles";
import LocalAreaSection78 from "@features/landing/LocalAreaSection78";
import FAQSectionHome, { homeFaqs } from "@features/landing/FAQSectionHome";
import { UserType } from "@app/types/types";
import LazyOnVisible from "@shared/LazyOnVisible";
import Seo from "@shared/Seo";

const Contact = lazy(() => import("@shared/Contact"));
const PhoneApp = lazy(() => import("@features/PhoneApp"));

function LandingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
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
        title="Coach sportif Versailles & Yvelines (78) | Fit On The Road"
        description="Coach sportif à Versailles et dans les Yvelines (78). Coaching individuel, duo, packs 10 séances et sport en entreprise (QVT) à SQY. Séance découverte."
        canonicalPath="/"
        keywords="coach sportif Versailles, coaching sportif Yvelines, sport en entreprise 78, remise en forme 78"
      />
      <script
        type="application/ld+json"
        data-testid="faq-jsonld"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Box id="top" />
      <HeroSegmented />
      <Box sx={{ bgcolor: "background.default" }}>
        <Box id="services" />
        <Suspense fallback={<Box sx={{ height: 80 }} />}>
          <CorporateBlockYvelines sectionId="entreprises" />
        </Suspense>
        <IndividualBlockVersailles sectionId="particuliers" />
        <Box id="more" />
        <LocalAreaSection78 sectionId="zones" />
        <Divider />
        <FAQSectionHome sectionId="faq" />
        <Divider />
        <Suspense fallback={<Box sx={{ height: 160 }} />}>
          <PhoneApp />
        </Suspense>
        <LazyOnVisible
          minHeight={200}
          fallback={<Box sx={{ height: 200 }} />}
          rootMargin="300px"
        >
          <Suspense fallback={<Box sx={{ height: 200 }} />}>
            <Contact defaultUserType={UserType.ENTERPRISE} />
          </Suspense>
        </LazyOnVisible>
      </Box>
    </>
  );
}

export default LandingPage;
