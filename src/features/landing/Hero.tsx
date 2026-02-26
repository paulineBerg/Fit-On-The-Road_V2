import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

import heroAvif480 from "@assets/images/optimized/overview-480.avif";
import heroAvif768 from "@assets/images/optimized/overview-768.avif";
import heroAvif1024 from "@assets/images/optimized/overview-1024.avif";
import heroAvif1280 from "@assets/images/optimized/overview-1280.avif";
import heroWebp480 from "@assets/images/optimized/overview-480.webp";
import heroWebp768 from "@assets/images/optimized/overview-768.webp";
import heroWebp1024 from "@assets/images/optimized/overview-1024.webp";
import heroWebp1280 from "@assets/images/optimized/overview-1280.webp";
import heroJpg1280 from "@assets/images/optimized/overview-1280.jpg";

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
        <picture style={{ height: "100%", width: "100%", display: "block" }}>
          <source
            type="image/avif"
            srcSet={`
              ${heroAvif480} 480w,
              ${heroAvif768} 768w,
              ${heroAvif1024} 1024w,
              ${heroAvif1280} 1280w
            `}
            sizes="(max-width: 1200px) 100vw, 100vw"
          />
          <source
            type="image/webp"
            srcSet={`
              ${heroWebp480} 480w,
              ${heroWebp768} 768w,
              ${heroWebp1024} 1024w,
              ${heroWebp1280} 1280w
            `}
            sizes="(max-width: 1200px) 100vw, 100vw"
          />
          <img
            ref={heroImgRef}
            src={heroJpg1280}
            alt="Séance de coaching Fit On The Road"
            width={1600}
            height={1600}
            decoding="async"
            loading="eager"
            // React 18 ne connaît pas encore l'attribut natif fetchpriority en camelCase
            /* eslint-disable-next-line react/no-unknown-property */
            fetchpriority="high"
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
