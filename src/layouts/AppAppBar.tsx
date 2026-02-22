import React from "react";

import {
  alpha,
  IconButton,
  Box,
  Button,
  Stack,
  Container,
  AppBar,
  Toolbar,
  Divider,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRounded from "@mui/icons-material/CloseRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import LogoClic from "@components/LogoClic";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const sections = [
  {
    title: "Services",
    dst: "services",
  },
  {
    title: "Tarifs",
    dst: "pricing",
  },
  {
    title: "En savoir plus",
    dst: "more",
  },
];

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const blurActive = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    if (!newOpen) blurActive();
    setOpen(newOpen);
  };

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
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: `linear-gradient(#000000, ${alpha("#000000", 0.0)})`,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundImage: "none",
            mt: 2,
          }}
        >
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px ${alpha(
                "#8B725D",
                0.7,
              )}, 1px 1.5px 2px -1px ${alpha(
                "#8B725D",
                0.65,
              )}, 4px 4px 12px -2.5px ${alpha("#8B725D", 0.65)}`,
            })}
          >
            {/* MENU DESKTOP VERSION */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <LogoClic />
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
                {sections.map((section) => (
                  <Button
                    key={section.dst}
                    color="inherit"
                    variant="text"
                    size="small"
                    onClick={() => scrollToSection(section.dst)}
                    sx={{ borderRadius: "999px", textTransform: "none" }}
                  >
                    {section.title}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                sx={{ borderRadius: "999px" }}
                onClick={() => {
                  navigate("entreprises#top");
                  scrollToTop();
                }}
              >
                Entreprises
              </Button>
              <Button
                variant="text"
                sx={{ borderRadius: "999px" }}
                onClick={() => {
                  navigate("particuliers#top");
                  scrollToTop();
                }}
              >
                Particuliers
              </Button>
              <Button
                variant="text"
                sx={{ borderRadius: "999px" }}
                onClick={() => {
                  navigate("about-us#top");
                  scrollToTop();
                }}
              >
                A propos
              </Button>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/fit.on.the.road?igsh=MWN1dTZ1M3RtZDhpaw=="
                aria-label="Instagram"
                sx={{ alignSelf: "center" }}
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={() => scrollToSection("contact")}
              >
                CONTACTEZ-MOI !
              </Button>
            </Box>
            {/* MENU MOBILE VERSION */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={toggleDrawer(false)}
                      size="small"
                      aria-label="button to toggle theme"
                      sx={{
                        minWidth: "32px",
                        height: "32px",
                        p: "4px",
                        borderRadius: "100%",
                      }}
                    >
                      <CloseRounded fontSize="small" />
                    </Button>
                  </Box>
                  <Stack component="nav" spacing={1} aria-label="Navigation">
                    {sections.map((section) => (
                      <Button
                        key={`drawer-${section.dst}`}
                        color="inherit"
                        variant="text"
                        fullWidth
                        onClick={() => {
                          blurActive();
                          scrollToSection(section.dst);
                        }}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        {section.title}
                      </Button>
                    ))}
                  </Stack>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={() => {
                        blurActive();
                        navigate("entreprises#top");
                        scrollToTop();
                        setOpen(false);
                      }}
                    >
                      Entreprises
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={() => {
                        blurActive();
                        navigate("particuliers#top");
                        scrollToTop();
                        setOpen(false);
                      }}
                    >
                      Particuliers
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={() => {
                        blurActive();
                        navigate("about-us#top");
                        scrollToTop();
                        setOpen(false);
                      }}
                    >
                      A propos
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={() => {
                        blurActive();
                        scrollToSection("contact");
                      }}
                    >
                      CONTACTEZ-MOI !
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
