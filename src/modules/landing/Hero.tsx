import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import coverJpeg from "../../assets/images/individual-collective-coaching.jpeg";
import coverWebp from "../../assets/images/individual-collective-coaching.webp";

function Hero() {
  // #region SCROLLING FUNCTION
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  // #endregion

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundImage: `image-set(url("${coverWebp}") type("image/webp"), url("${coverJpeg}") type("image/jpeg"))`,
        // backgroundImage: `linear-gradient(#000, ${alpha("#690000", 0.0)})`,
        // backgroundImage: `diamond-gradient(#000, ${alpha("#000000", 0.7)})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "38%",
        backgroundPositionY: "50%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box sx={{ height: "100%" }} />
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: "clamp(3rem, 10vw, 3.4rem)",
              textAlign: "center",
              color: "primary.light",
            }}
          >
            FIT ON THE ROAD : La salle de sport qui se déplace
          </Typography>
          {/* HERO SUBTEXT */}
          <Typography
            textAlign="center"
            color="text"
            sx={{
              alignSelf: "center",
              width: { sm: "100%", md: "80%" },
              padding: "8px",
              background:
                "linear-gradient(to top, rgba(255, 0, 0, 0.7) 0%, rgba(255, 0, 0, 0.7) 100%, transparent 10.01%) no-repeat left bottom / 0 100%",
              transition: "background-size 0.5s",
              color: "transparent",
              "&:hover": {
                color: "white",
                backgroundSize: "100% 100%",
              },
              borderRadius: "4px",
              backdropFilter: "grey(90%)",
            }}
          >
            En groupe ou individuel, notre suivi aura toujours pour objectif de
            permettre à chacun de terminer une séance et de progresser quel que
            soit le niveau.
          </Typography>
          {/* </Card> */}
          {/* HERO CALL TO ACTION */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => scrollToSection("contact")}
            >
              {`C'EST PARTI !`}
            </Button>
          </Stack>
        </Stack>
        {/* <Video /> */}
      </Container>
    </Box>
  );
}

export default Hero;
