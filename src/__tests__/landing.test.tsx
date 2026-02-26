import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import { style } from "@styles/theme-material/style";
import LandingPage from "@pages/index";
import { homeFaqs } from "@features/landing/FAQSectionHome";

const renderWithProviders = (ui: React.ReactElement) => {
  const theme = createTheme(style);
  return render(
    <MemoryRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <HelmetProvider>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </HelmetProvider>
    </MemoryRouter>,
  );
};

describe("LandingPage", () => {
  it("affiche le hero avec le titre principal", () => {
    renderWithProviders(<LandingPage />);
    expect(
      screen.getByRole("heading", {
        name: /Coach sportif à Versailles.*Yvelines/i,
      }),
    ).toBeInTheDocument();
  });

  it("rend une seule balise H1 et une FAQ avec JSON-LD", () => {
    renderWithProviders(<LandingPage />);

    const h1s = document.querySelectorAll("h1");
    expect(h1s).toHaveLength(1);

    return waitFor(() => {
      const faqScript = Array.from(
        document.querySelectorAll('script[type="application/ld+json"]'),
      ).find((script) => {
        try {
          const parsed = JSON.parse(script.textContent ?? "{}");
          return parsed?.["@type"] === "FAQPage";
        } catch (e) {
          return false;
        }
      });

      expect(faqScript).toBeTruthy();
      const parsed = JSON.parse(faqScript?.textContent ?? "{}");
      expect(parsed.mainEntity).toHaveLength(homeFaqs.length);
    });
  });

  it("contient les deux CTA segmentés", () => {
    renderWithProviders(<LandingPage />);
    expect(
      screen.getByRole("link", { name: /Entreprise – Audit QVT offert/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Particulier – Séance découverte/i }),
    ).toBeInTheDocument();
  });

  it("met en avant les zones d'intervention locales", () => {
    renderWithProviders(<LandingPage />);
    expect(
      screen.getByRole("heading", {
        name: /Zones d'intervention – Versailles & Yvelines \(78\)/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Versailles/i)[0]).toBeInTheDocument();
  });
});
