import React from "react";
import { routes } from "generouted/react-router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
