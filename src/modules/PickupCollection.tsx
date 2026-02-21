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

const pickupStyle = {
  margin: "0 32px",
  opacity: 0.7,
};

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
      <h2>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.secondary"
          sx={{ py: 4 }}
        >
          Du travail et du bonheur
        </Typography>
      </h2>
      <div className="flex justify-evenly gap-4">
        {pickups.map(({ pickup }) => (
          <div className="flex flex-col gap-2 items-center justify-center w-[5%]">
            <div className="h-[300px] w-[250px] flex align-middle justify-center">
              {pickup && (
                <picture>
                  <source srcSet={pickup.webp} type="image/webp" />
                  <img
                    src={pickup.fallback}
                    alt="Pick-up Fit On The Road"
                    className="object-contain"
                    style={pickupStyle}
                    loading="lazy"
                    decoding="async"
                    width={pickup.width}
                    height={pickup.height}
                  />
                </picture>
              )}
              {!pickup && (
                <BusinessTwoToneIcon
                  sx={{
                    fontSize: "60px",
                    filter:
                      "invert(68%) hue-rotate(3deg) brightness(130%) contrast(106%)",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
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
