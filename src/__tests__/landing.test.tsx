import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { style } from "@styles/theme-material/style";
import LandingPage from "@pages/index";

const renderWithProviders = (ui: React.ReactElement) => {
  const theme = createTheme(style);
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );
};

describe("LandingPage", () => {
  it("affiche le hero avec le titre principal", () => {
    renderWithProviders(<LandingPage />);
    expect(
      screen.getByText(/La salle de sport qui se déplace/i),
    ).toBeInTheDocument();
  });

  it("contient le bouton de contact", () => {
    renderWithProviders(<LandingPage />);
    expect(
      screen.getByRole("button", { name: /c'est parti/i }),
    ).toBeInTheDocument();
  });
});
