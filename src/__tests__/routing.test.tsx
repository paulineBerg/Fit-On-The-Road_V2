/* eslint react/no-unstable-nested-components: off */
import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter, Outlet } from "react-router-dom";

import { routes } from "@app/App";

vi.mock("@pages/_app", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="layout">
      <Outlet />
    </div>
  ),
}));

vi.mock("@pages/index", () => ({
  default: () => <div data-testid="home-page">Home page</div>,
}));

vi.mock("@pages/about-us", () => ({
  default: () => <div data-testid="about-page">About us</div>,
}));

vi.mock("@pages/entreprises", () => ({
  default: () => <div data-testid="entreprises-page">Entreprises</div>,
}));

vi.mock("@pages/not-found", () => ({
  default: () => <div data-testid="not-found-page">404</div>,
}));

describe("App routing", () => {
  const renderWithRoute = (initialPath: string) => {
    const router = createMemoryRouter(routes, {
      initialEntries: [initialPath],
    });
    return render(
      <Suspense fallback={<div>Loading</div>}>
        <RouterProvider router={router} />
      </Suspense>,
    );
  };

  it("rend la page About Us sur /about-us", async () => {
    renderWithRoute("/about-us");
    expect(await screen.findByTestId("about-page")).toBeInTheDocument();
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });

  it("affiche la page 404 pour une route inconnue", async () => {
    renderWithRoute("/non-trouvee");
    expect(await screen.findByTestId("not-found-page")).toBeInTheDocument();
  });
});
