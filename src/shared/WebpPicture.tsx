import React from "react";

type WebpPictureProps = {
  webp: string;
  fallback: string;
  pictureStyle?: React.CSSProperties;
  pictureClassName?: string;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet">;

/**
 * Small helper to ensure WebP is preferred while keeping a JPEG fallback.
 * It renders a <picture> with the WebP source first so browsers that support
 * it never fetch the JPEG unless required.
 */
const WebpPicture = React.forwardRef<HTMLImageElement, WebpPictureProps>(
  (
    {
      webp,
      fallback,
      alt,
      pictureStyle,
      pictureClassName,
      loading = "lazy",
      decoding = "async",
      ...imgProps
    },
    ref,
  ) => (
    <picture className={pictureClassName} style={pictureStyle}>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img
        ref={ref}
        src={fallback}
        alt={alt}
        loading={loading}
        decoding={decoding}
        {...imgProps}
      />
    </picture>
  ),
);

WebpPicture.displayName = "WebpPicture";

export default WebpPicture;
