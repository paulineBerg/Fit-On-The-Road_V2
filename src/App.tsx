import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@pages/_app"));
const Home = lazy(() => import("@pages/index"));
const Entreprises = lazy(() => import("@pages/entreprises"));
const AboutUs = lazy(() => import("@pages/about-us"));
const Particuliers = lazy(() => import("@pages/particuliers"));
const Terms = lazy(() => import("@pages/terms"));

// Route metadata now lives in src/shared/routes.config.json for sitemap generation.

function PageFallback() {
  return (
    <div
      style={{
        minHeight: "40vh",
        display: "grid",
        placeItems: "center",
        color: "#c62828",
        fontWeight: 600,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        letterSpacing: "0.02em",
      }}
    >
      Chargement…
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "entreprises",
          element: <Entreprises />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "particuliers",
          element: <Particuliers />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
