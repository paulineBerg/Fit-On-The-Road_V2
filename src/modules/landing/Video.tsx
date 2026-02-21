import React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";

function Video() {
  return (
    <Box
      id="video"
      sx={() => ({
        mt: { xs: 8, sm: 10 },
        alignSelf: "center",
        height: { xs: 200, sm: 700 },
        width: "100%",
        backgroundSize: "no-repeat",
        backgroundPosition: "center center",
        borderRadius: "10px",
        outline: "1px solid",
        outlineColor: alpha("#ED130D", 0.1),
        boxShadow: `0 0 24px 12px ${alpha("#ED130D", 0.2)}`,
      })}
    >
      <iframe
        width="100%"
        height="100%"
        className="rounded-[10px]"
        src="https://www.youtube.com/embed/DonYTJJK9KM?si=awd9tp9wyWRu2nIx"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Box>
  );
}

export default Video;
