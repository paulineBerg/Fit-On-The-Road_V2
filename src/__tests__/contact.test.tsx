import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Contact from "@shared/Contact";
import { UserType } from "@app/types/types";
import { style } from "@styles/theme-material/style";

const renderContact = (
  props?: Partial<React.ComponentProps<typeof Contact>>,
) => {
  const theme = createTheme(style);
  return render(
    <ThemeProvider theme={theme}>
      <Contact {...props} />
    </ThemeProvider>,
  );
};

describe("Contact form", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__FIT_CONFIG__ = {};
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      }),
    ) as any;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("bloque un email invalide avant d'envoyer", async () => {
    renderContact();
    fireEvent.change(screen.getByPlaceholderText(/Adresse mail/i), {
      target: { value: "oops" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Mes attentes/i), {
      target: { value: "Message valide" },
    });
    fireEvent.click(screen.getByRole("button", { name: /contactez-moi/i }));

    expect(
      await screen.findByText(/Adresse email invalide/i),
    ).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("rend le message obligatoire avec au moins 5 caractères", async () => {
    renderContact();
    fireEvent.change(screen.getByPlaceholderText(/Adresse mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Mes attentes/i), {
      target: { value: "1234" },
    });
    fireEvent.click(screen.getByRole("button", { name: /contactez-moi/i }));

    expect(await screen.findByText(/≥ 5 caractères/i)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("garde la valeur précédente si la sélection devient nulle", () => {
    renderContact({ defaultUserType: UserType.ENTERPRISE });
    const entreprises = screen.getByRole("button", { name: /Entreprises/i });

    expect(entreprises).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(entreprises); // MUI renvoie value null si on re-clique la sélection
    expect(entreprises).toHaveAttribute("aria-pressed", "true");
  });

  it("permet de changer de type d'utilisateur", () => {
    renderContact({ defaultUserType: UserType.ENTERPRISE });
    const particuliers = screen.getByRole("button", { name: /Particuliers/i });

    fireEvent.click(particuliers);
    expect(particuliers).toHaveAttribute("aria-pressed", "true");
  });
});
