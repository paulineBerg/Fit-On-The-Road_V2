/* eslint react/no-unstable-nested-components: off */
import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import LandingPage from "@pages/index";
import { UserType } from "@app/types/types";
import { style } from "@styles/theme-material/style";

// All lazy-loaded feature components are mocked to speed up the render and avoid heavy assets in tests.
vi.mock("@features/EnterpriseFeatures", () => ({
  __esModule: true,
  default: () => <div data-testid="enterprise-features" />,
}));
vi.mock("@features/IndividualFeatures", () => ({
  __esModule: true,
  default: () => <div data-testid="individual-features" />,
}));
vi.mock("@features/landing/Video", () => ({
  __esModule: true,
  default: () => <div data-testid="video-section" />,
}));
vi.mock("@features/Highlights", () => ({
  __esModule: true,
  default: () => <div data-testid="highlights-section" />,
}));
vi.mock("@features/Pricing", () => ({
  __esModule: true,
  default: () => <div data-testid="pricing-section" />,
}));
vi.mock("@features/Testimonials", () => ({
  __esModule: true,
  default: () => <div data-testid="testimonials-section" />,
}));
vi.mock("@features/FAQ", () => ({
  __esModule: true,
  default: () => <div data-testid="faq-section" />,
}));
vi.mock("@shared/Contact", () => ({
  __esModule: true,
  default: ({ defaultUserType }: { defaultUserType: UserType }) => (
    <div data-testid={`contact-${defaultUserType}`} />
  ),
}));
vi.mock("@features/PhoneApp", () => ({
  __esModule: true,
  default: () => <div data-testid="phone-app" />,
}));

describe("Landing page sections", () => {
  it("affiche le héros et les ancres clés", () => {
    const theme = createTheme(style);
    render(
      <MemoryRouter>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading</div>}>
              <LandingPage />
            </Suspense>
          </ThemeProvider>
        </HelmetProvider>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Coach sportif à Versailles.*Yvelines.*Sport en entreprise/i,
      }),
    ).toBeInTheDocument();

    expect(document.getElementById("services")).not.toBeNull();
    expect(document.getElementById("top")).not.toBeNull();
  });
});
