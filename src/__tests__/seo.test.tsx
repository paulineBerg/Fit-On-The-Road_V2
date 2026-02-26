import React from "react";
import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

import Seo from "@shared/Seo";

describe("SEO component", () => {
  it("définit le title, la meta description et la canonical", () => {
    render(
      <HelmetProvider>
        <Seo
          title="Titre test"
          description="Description test"
          canonicalPath="/foo"
          keywords="sport, coaching"
        />
      </HelmetProvider>,
    );

    return waitFor(() => {
      expect(document.title).toBe("Titre test");
      const description = document.querySelector("meta[name='description']");
      expect(description?.getAttribute("content")).toBe("Description test");

      const canonical = document.querySelector("link[rel='canonical']");
      expect(canonical?.getAttribute("href")).toContain("/foo");

      const keywords = document.querySelector("meta[name='keywords']");
      expect(keywords?.getAttribute("content")).toBe("sport, coaching");
    });
  });
});
