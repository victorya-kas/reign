/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gold-gradient-270":
          "linear-gradient(270deg, #533419 0%, #1E0E01 77.48%, #1C0C00 100%)",
          "gold-gradient-286": "linear-gradient(286deg, rgba(97, 88, 69, 0) 23%, rgb(209, 174, 109) 50%, rgba(97, 88, 69, 0) 84%)",
        "dark-gold-gradient":
          "linear-gradient(180deg, #35251C 0%, #170C06 100%)",
        "black-gradient-270": "linear-gradient(270deg, #0E0601 0%, #070402 100%)",
        "black-gradient-180": "linear-gradient(180deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.00) 85.14%)"
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"]
      },
      fontSize: {
        "20-40": "clamp(20px, 100%, 40px)",
      },
      screens: {
        "mobile": "576px",
        "laptop": "840px",
        "desktop-sm": "1024px",
        "desktop-md": "1280px",
        "desktop-lg": "1440px",
        "desktop-xl": "1536px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addComponents }) {
      const newComponents = {
        ".text-silver": {
          fontFamily: "Jost, sans-serif",
          color: "transparent",
          backgroundImage:
            "linear-gradient(101deg, #DDD 8.66%, #2C2C2C 130.2%)",
          backgroundClip: "text",
          fontWeight: "800",
          fontStyle: "italic",
          lineHeight: 1,
        },
        ".text-gold": {
          fontFamily: "Jost, sans-serif",
          color: "transparent",
          backgroundImage: "linear-gradient(180deg, #E6C486 0%, #9B752C 100%)",
          backgroundClip: "text",
          fontWeight: "800",
          lineHeight: 1,
        },
        ".shadow-1": {
          filter: "drop-shadow(var(--shadow1))",
        },
        ".shadow-2": {
          filter: "drop-shadow(var(--shadow2))"
        },
        ".p-container": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          maxWidth: "1980px",
          minWidth: "375px",
          overflow: "hidden"
        }
      };
      addComponents(newComponents, ["responsive", "hover"]);
    }),
  ],
};
