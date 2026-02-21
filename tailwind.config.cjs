/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./src/pages/**/*.ts",
    "./src/components/**/*.ts",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        "neueMontreal-Regular": ["NeueMontreal-Regular", "sans-serif"],
        "neueMontreal-Medium": ["NeueMontreal-Medium", "sans-serif"],
        "neueMontreal-Bold": ["NeueMontreal-Bold", "sans-serif"],
        normal: ["NeueMontreal-Regular", "sans-serif"],
        medium: ["NeueMontreal-Medium", "sans-serif"],
        bold: ["NeueMontreal-Bold", "sans-serif"],
      },
      colors: {
        // primaryBlack to replace
        primaryBlack: "#000000",
        statusDangerDark: "#ED2012",
        statusDanger: "#FABCB8",
        statusDangerLight: "#FDE9E7",
        statusInfoDark: "#00C2FF",
        statusInfo: "#B2EDFF",
        statusInfoLight: "#E5F9FF",
        statusWarningDark: "#FFC805",
        statusWarning: "#FFEEB2",
        statusWarningLight: "#FFF9E5",
        statusSuccessDark: "#4BC837",
        statusSuccess: "#C9EEC3",
        statusSuccessLight: "#EDF9EB",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
