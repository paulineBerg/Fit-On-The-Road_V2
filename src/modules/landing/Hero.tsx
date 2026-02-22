import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

import coverJpeg from "../../assets/images/Overview.jpg";
import coverWebp from "../../assets/images/Overview.webp";
import coverMobileWebp from "../../assets/images/individual-private-coaching.webp";
import coverMobileJpeg from "../../assets/images/individual-private-coaching.jpg";

function Hero() {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // React 18 ne passe pas fetchpriority en attribut natif : on le force après le mount
    if (heroImgRef.current) {
      heroImgRef.current.setAttribute("fetchpriority", "high");
    }
  }, []);
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
        minHeight: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0c0b0a",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
        aria-hidden
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={coverMobileWebp}
            type="image/webp"
          />
          <source
            media="(max-width: 768px)"
            srcSet={coverMobileJpeg}
            type="image/jpeg"
          />
          <source srcSet={coverWebp} type="image/webp" />
          <img
            src={coverJpeg}
            alt=""
            loading="eager"
            decoding="async"
            ref={heroImgRef}
            width="1920"
            height="1080"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "38% 50%",
              display: "block",
            }}
          />
        </picture>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(120deg, ${alpha(
              "#000000",
              0.6,
            )} 0%, ${alpha("#000000", 0.35)} 60%, transparent 100%)`,
          }}
        />
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          position: "relative",
          zIndex: 1,
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
