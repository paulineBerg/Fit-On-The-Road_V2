import React from "react";
import Box from "@mui/material/Box";

type LazyOnVisibleProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  /**
   * px height reserved before the content is loaded (avoids layout shift)
   */
  minHeight?: number;
  /**
   * rootMargin passed to IntersectionObserver to start loading a bit avant l'écran
   */
  rootMargin?: string;
};

/**
 * Delay rendering (and therefore importing) of heavy children until
 * they are close to the viewport, with an idle-time fallback.
 */
export default function LazyOnVisible({
  children,
  fallback = null,
  minHeight = 120,
  rootMargin = "200px",
}: LazyOnVisibleProps) {
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const placeholderRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (shouldLoad) return undefined;
    const node = placeholderRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin]);

  React.useEffect(() => {
    if (shouldLoad) return undefined;
    const ric =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (window as any).requestIdleCallback
        : null;
    const cancelRic =
      typeof window !== "undefined" && "cancelIdleCallback" in window
        ? (window as any).cancelIdleCallback
        : null;
    if (ric) {
      const id = ric(() => setShouldLoad(true), { timeout: 4000 });
      return () => {
        if (cancelRic) cancelRic(id);
      };
    }
    return undefined;
  }, [shouldLoad]);

  if (shouldLoad)
    return (
      <Box component="div" sx={{ display: "contents" }}>
        {children}
      </Box>
    );

  return (
    <Box
      ref={placeholderRef}
      sx={{
        minHeight,
        width: "100%",
      }}
    >
      {fallback}
    </Box>
  );
}
