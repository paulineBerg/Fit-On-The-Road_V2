import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@pages/_app"));
const Home = lazy(() => import("@pages/index"));
const Entreprises = lazy(() => import("@pages/entreprises"));
const AboutUs = lazy(() => import("@pages/about-us"));
const Particuliers = lazy(() => import("@pages/particuliers"));
const Terms = lazy(() => import("@pages/terms"));

const Fallback = () => <div aria-hidden="true" />;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Fallback />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "entreprises",
        element: (
          <Suspense fallback={<Fallback />}>
            <Entreprises />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<Fallback />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "particuliers",
        element: (
          <Suspense fallback={<Fallback />}>
            <Particuliers />
          </Suspense>
        ),
      },
      {
        path: "terms",
        element: (
          <Suspense fallback={<Fallback />}>
            <Terms />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
