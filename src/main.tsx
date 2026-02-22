import React from "react";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "@app/App";
import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
