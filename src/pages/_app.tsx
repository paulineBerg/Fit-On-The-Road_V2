import React from "react";
import { Outlet } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { style } from "@app/styles/theme-material/style";
import AppAppBar from "@layouts/AppAppBar";
import Footer from "@layouts/Footer";

const defaultTheme = createTheme(style);

function Layout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <CssBaseline />
      <AppAppBar />
      <main id="main-content">
        <Outlet />
      </main>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
