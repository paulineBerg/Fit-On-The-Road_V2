import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoClic from "@app/modules/LogoClic";

// #region COPYRIGHT GENERATION
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="about-us">Fit On The Road</Link>&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}
// #endregion

function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      {/* FOOTER TOP */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "start" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          {/* LOGO BOX */}
          <Box sx={{ ml: "-15px" }}>
            <LogoClic />
          </Box>
          {/* SECTIONS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <div>
              <Link display="list-item" color="text.secondary" href="terms#top">
                Fit on the road officiel
              </Link>
              <Typography display="list-item" sx={{ mx: 0.5, opacity: 0.5 }}>
                Politique de confidentialié
              </Typography>
              <Typography display="list-item" sx={{ mx: 0.5, opacity: 0.5 }}>
                Conditions générales
              </Typography>
              <Typography display="list-item" sx={{ mx: 0.5, opacity: 0.5 }}>
                Mentions légales
              </Typography>
            </div>
            <div>
              <Link display="list-item" color="text.secondary" href="#top">
                TOP
              </Link>
            </div>
          </Box>
        </Box>
      </Box>
      {/* FOOTER BOTTOM */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/fit-on-the-road-a938b312a?utm_source=share&utm_campaign=share_via&utm_content=profile"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/fit.on.the.road?igsh=MWN1dTZ1M3RtZDhpaw=="
            aria-label="Instagram"
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}

export default Footer;
