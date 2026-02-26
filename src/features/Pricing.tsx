import React from "react";
import Box from "@mui/material/Box";

import PricingEntreprises from "./PricingEntreprises";
import PricingParticuliers from "./PricingParticuliers";

function Pricing() {
  return (
    <Box id="pricing" sx={{ scrollMarginTop: { xs: 80, md: 128 } }}>
      <PricingEntreprises containerSx={{ pb: { xs: 3, md: 4 } }} />
      <PricingParticuliers containerSx={{ pt: { xs: 2, md: 3 } }} />
    </Box>
  );
}

export default Pricing;
