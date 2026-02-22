import React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";

const VIDEO_ID = "DonYTJJK9KM";
const THUMBNAIL_WEBP = `https://i.ytimg.com/vi_webp/${VIDEO_ID}/mqdefault.webp`;
const THUMBNAIL_JPG = `https://i.ytimg.com/vi/${VIDEO_ID}/mqdefault.jpg`;
const YT_EMBED = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`;

function Video() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <Box
      id="video"
      sx={{
        mt: { xs: 8, sm: 10 },
        alignSelf: "center",
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        aspectRatio: { xs: "16 / 9", sm: "16 / 9" },
        outline: "1px solid",
        outlineColor: alpha("#ED130D", 0.1),
        boxShadow: `0 0 24px 12px ${alpha("#ED130D", 0.2)}`,
      }}
    >
      {isPlaying ? (
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-[10px]"
          src={`${YT_EMBED}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Fit On The Road - YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin"
          allowFullScreen
          style={{ border: "none" }}
        />
      ) : (
        <Box
          component="button"
          type="button"
          aria-label="Lecture de la vidéo YouTube"
          onClick={() => setIsPlaying(true)}
          sx={{
            cursor: "pointer",
            p: 0,
            border: "none",
            background: "transparent",
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
          }}
        >
          <picture>
            <source srcSet={THUMBNAIL_WEBP} type="image/webp" />
            <source srcSet={THUMBNAIL_JPG} type="image/jpeg" />
            <img
              src={THUMBNAIL_JPG}
              alt="Aperçu de la vidéo Fit On The Road"
              loading="lazy"
              decoding="async"
              width="480"
              height="270"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </picture>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
              transition: "background 200ms ease",
              "&:hover": {
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)",
              },
            }}
          >
            <Box
              sx={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                backgroundColor: alpha("#ed130d", 0.92),
                display: "grid",
                placeItems: "center",
                boxShadow: `0 20px 38px ${alpha("#ed130d", 0.45)}`,
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5.5v13l10-6.5-10-6.5z"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Video;
