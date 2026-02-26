import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoClic from "@components/LogoClic";
import PrivacyDialog from "@shared/PrivacyDialog";

// #region COPYRIGHT GENERATION
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="about-us" color="text.primary" fontWeight={600}>
        Fit On The Road
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}
// #endregion

function Footer() {
  const [privacyOpen, setPrivacyOpen] = React.useState(false);

  const openPrivacy = () => setPrivacyOpen(true);

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
              <Button
                variant="text"
                onClick={openPrivacy}
                sx={{
                  display: "list-item",
                  mx: 0.5,
                  opacity: 0.8,
                  textTransform: "none",
                  color: "text.secondary",
                  justifyContent: "flex-start",
                  minHeight: 44,
                  minWidth: 180,
                  textAlign: "left",
                }}
              >
                Politique de confidentialité
              </Button>
              <Button
                variant="text"
                onClick={openPrivacy}
                sx={{
                  display: "list-item",
                  mx: 0.5,
                  opacity: 0.8,
                  textTransform: "none",
                  color: "text.secondary",
                  justifyContent: "flex-start",
                  minHeight: 44,
                  minWidth: 180,
                  textAlign: "left",
                }}
              >
                Conditions générales
              </Button>
              <Button
                variant="text"
                onClick={openPrivacy}
                sx={{
                  display: "list-item",
                  mx: 0.5,
                  opacity: 0.8,
                  textTransform: "none",
                  color: "text.secondary",
                  justifyContent: "flex-start",
                  minHeight: 44,
                  minWidth: 180,
                  textAlign: "left",
                }}
              >
                Mentions légales
              </Button>
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
            <Box
              component="img"
              src="/icons/instagram.svg"
              alt="Instagram"
              sx={{ width: 24, height: 24, display: "block" }}
            />
          </IconButton>
        </Stack>
      </Box>
      <PrivacyDialog
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        disableScrollReset
      />
    </Container>
  );
}

export default Footer;
