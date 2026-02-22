import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Layout = lazy(() => import("@pages/_app"));
const Home = lazy(() => import("@pages/index"));
const Entreprises = lazy(() => import("@pages/entreprises"));
const AboutUs = lazy(() => import("@pages/about-us"));
const Particuliers = lazy(() => import("@pages/particuliers"));
const Terms = lazy(() => import("@pages/terms"));

// Route metadata now lives in src/shared/routes.config.json for sitemap generation.

function PageFallback() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "40vh",
        color: "primary.main",
      }}
    >
      <CircularProgress size={40} thickness={4} />
    </Box>
  );
}

const router = createBrowserRouter([
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
]);

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
