import React, { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import HeroSegmented from "@features/landing/HeroSegmented";
import FAQSectionHome, { homeFaqs } from "@features/landing/FAQSectionHome";
import { UserType } from "@app/types/types";
import LazyOnVisible from "@shared/LazyOnVisible";
import Seo from "@shared/Seo";

const Contact = lazy(() => import("@shared/Contact"));
const PhoneApp = lazy(() => import("@features/PhoneApp"));
const CorporateBlockYvelines = lazy(
  () => import("@features/landing/CorporateBlockYvelines"),
);
const IndividualBlockVersailles = lazy(
  () => import("@features/landing/IndividualBlockVersailles"),
);
const LocalAreaSection78 = lazy(
  () => import("@features/landing/LocalAreaSection78"),
);

function LandingPage() {
  return (
    <>
      <Seo
        title="Coach sportif Versailles & Yvelines (78) | Fit On The Road"
        description="Coach sportif à Versailles et dans les Yvelines (78). Coaching individuel, duo, packs 10 séances et sport en entreprise (QVT) à SQY. Séance découverte."
        canonicalPath="/"
        keywords="coach sportif Versailles, coaching sportif Yvelines, sport en entreprise 78, remise en forme 78"
        jsonLd={{
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
        }}
      />
      <Box id="top" />
      <HeroSegmented />
      <Box sx={{ bgcolor: "background.default" }}>
        <Box id="services" />
        <LazyOnVisible
          minHeight={200}
          fallback={<Box sx={{ height: 200 }} />}
          rootMargin="250px"
          ssr={false}
        >
          <Suspense fallback={<Box sx={{ height: 200 }} />}>
            <CorporateBlockYvelines sectionId="entreprises" />
          </Suspense>
        </LazyOnVisible>
        <LazyOnVisible
          minHeight={200}
          fallback={<Box sx={{ height: 200 }} />}
          rootMargin="250px"
          ssr={false}
        >
          <Suspense fallback={<Box sx={{ height: 200 }} />}>
            <IndividualBlockVersailles sectionId="particuliers" />
          </Suspense>
        </LazyOnVisible>
        <Box id="more" />
        <LazyOnVisible
          minHeight={200}
          fallback={<Box sx={{ height: 200 }} />}
          rootMargin="0px"
          ssr={false}
        >
          <Suspense fallback={<Box sx={{ height: 200 }} />}>
            <LocalAreaSection78 sectionId="zones" />
          </Suspense>
        </LazyOnVisible>
        <Divider />
        <FAQSectionHome sectionId="faq" />
        <Divider />
        <LazyOnVisible
          minHeight={200}
          fallback={<Box sx={{ height: 200 }} />}
          rootMargin="150px"
          ssr={false}
        >
          <Suspense fallback={<Box sx={{ height: 160 }} />}>
            <PhoneApp />
          </Suspense>
        </LazyOnVisible>
        <LazyOnVisible
          minHeight={200}
          fallback={<Box sx={{ height: 200 }} />}
          rootMargin="300px"
          ssr={false}
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
