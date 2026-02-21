import React from "react";
import { alpha, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import ph00 from "@app/assets/images/Pick-up - Histo 00.jpg";
import ph01 from "@app/assets/images/Pick-up - Histo 01.jpg";
import ph02 from "@app/assets/images/Pick-up - Histo 02.jpg";
import ph03 from "@app/assets/images/Pick-up - Histo 03.jpg";
import ph04 from "@app/assets/images/Pick-up - Histo 04.jpg";

const pickups = [
  {
    pickup: ph00,
  },
  {
    pickup: ph01,
  },
  {
    pickup: ph02,
  },
  {
    pickup: ph03,
  },
  {
    pickup: ph04,
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
                <img
                  src={pickup}
                  alt={`${pickup} pickup`}
                  className="object-contain"
                  style={pickupStyle}
                />
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
