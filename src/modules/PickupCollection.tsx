import React from "react";
import { alpha, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import ph00Jpg from "@app/assets/images/Pick-up - Histo 00.jpg";
import ph00Webp from "@app/assets/images/Pick-up - Histo 00.webp";
import ph01Jpg from "@app/assets/images/Pick-up - Histo 01.jpg";
import ph01Webp from "@app/assets/images/Pick-up - Histo 01.webp";
import ph02Jpg from "@app/assets/images/Pick-up - Histo 02.jpg";
import ph02Webp from "@app/assets/images/Pick-up - Histo 02.webp";
import ph03Jpg from "@app/assets/images/Pick-up - Histo 03.jpg";
import ph03Webp from "@app/assets/images/Pick-up - Histo 03.webp";
import ph04Jpg from "@app/assets/images/Pick-up - Histo 04.jpg";
import ph04Webp from "@app/assets/images/Pick-up - Histo 04.webp";

const pickups = [
  {
    pickup: { webp: ph00Webp, fallback: ph00Jpg, width: 1125, height: 2000 },
  },
  {
    pickup: { webp: ph01Webp, fallback: ph01Jpg, width: 1125, height: 2000 },
  },
  {
    pickup: { webp: ph02Webp, fallback: ph02Jpg, width: 1125, height: 2000 },
  },
  {
    pickup: { webp: ph03Webp, fallback: ph03Jpg, width: 1168, height: 2000 },
  },
  {
    pickup: { webp: ph04Webp, fallback: ph04Jpg, width: 946, height: 2000 },
  },
];

function PickupCollection() {
  return (
    <Box
      id="pickupCollection"
      sx={{
        width: "100%",
        py: 4,
        backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "fit",
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="text.secondary"
        sx={{ py: 4 }}
      >
        Du travail et du bonheur
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          mx: "auto",
          px: { xs: 2, md: 4 },
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: { xs: 2, md: 3 },
          alignItems: "stretch",
        }}
      >
        {pickups.map(({ pickup }) => (
          <Box
            key={pickup.fallback}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {pickup ? (
              <picture style={{ width: "100%" }}>
                <source srcSet={pickup.webp} type="image/webp" />
                <img
                  src={pickup.fallback}
                  alt="Pick-up Fit On The Road"
                  loading="lazy"
                  decoding="async"
                  width={pickup.width}
                  height={pickup.height}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: 320,
                    objectFit: "cover",
                    borderRadius: 6,
                    opacity: 0.9,
                  }}
                />
              </picture>
            ) : (
              <BusinessTwoToneIcon
                sx={{
                  fontSize: "60px",
                  filter:
                    "invert(68%) hue-rotate(3deg) brightness(130%) contrast(106%)",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "grey.400",
          py: 4,
        }}
      >
        Le concept de Fit ON THE ROAD est né
      </Typography>
    </Box>
  );
}

export default PickupCollection;
