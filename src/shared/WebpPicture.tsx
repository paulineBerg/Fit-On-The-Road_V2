import React from "react";

type WebpPictureProps = {
  avif?: string;
  webp: string;
  fallback: string;
  pictureStyle?: React.CSSProperties;
  pictureClassName?: string;
  sizes?: string;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet">;

/**
 * Small helper to ensure WebP is preferred while keeping a JPEG fallback.
 * It renders a <picture> with the WebP source first so browsers that support
 * it never fetch the JPEG unless required.
 */
const WebpPicture = React.forwardRef<HTMLImageElement, WebpPictureProps>(
  (
    {
      avif,
      webp,
      fallback,
      alt,
      pictureStyle,
      pictureClassName,
      sizes,
      loading = "lazy",
      decoding = "async",
      ...imgProps
    },
    ref,
  ) => {
    const fallbackType = fallback.endsWith(".png") ? "image/png" : "image/jpeg";
    return (
      <picture className={pictureClassName} style={pictureStyle}>
        {avif ? <source srcSet={avif} type="image/avif" /> : null}
        <source srcSet={webp} type="image/webp" />
        <source srcSet={fallback} type={fallbackType} />
        <img
          ref={ref}
          src={fallback}
          alt={alt}
          loading={loading}
          decoding={decoding}
          sizes={sizes}
          {...imgProps}
        />
      </picture>
    );
  },
);

WebpPicture.displayName = "WebpPicture";

export default WebpPicture;
