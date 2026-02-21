import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function LogoClic() {
  return (
    <Box id="logo-clic">
      <Link href="/" sx={{ borderRadius: "999px" }}>
        <img
          src="/logos/Full - Long - Kettle - Fond noir.svg"
          style={logoStyle}
          alt="logo fit on the road"
        />
      </Link>
    </Box>
  );
}

export default LogoClic;
