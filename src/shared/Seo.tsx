import React from "react";
import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  /** Path starting with "/" that will be appended to the site base URL */
  canonicalPath?: string;
  keywords?: string;
  image?: string;
};

const SITE_URL = "https://fit-ontheroad.fr";
const DEFAULT_IMAGE =
  "https://fit-ontheroad.fr/logos/Full%20-%20Long%20-%20Kettle%20-%20Fond%20noir.svg";

function Seo({
  title,
  description,
  canonicalPath = "/",
  keywords,
  image,
}: SeoProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const shareImage = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={shareImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:site" content="@fitontheroad" />
    </Helmet>
  );
}

export default Seo;
