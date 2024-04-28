/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(270deg, #533419 0%, #1E0E01 77.48%, #1C0C00 100%)",
        "dark-gold-gradient":
          "linear-gradient(180deg, #35251C 0%, #170C06 100%)",
        "black-gradient": "linear-gradient(270deg, #0E0601 0%, #070402 100%)",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        "12-24-s": "clamp(12px, 2vh, 24px)",
        "20-40-l": "clamp(20px, 3vh, 40px)",
      },
      screens: {
        mobile: "480px",
        laptop: "640px",
        "desktop-sm": "1024px",
        "desktop-md": "1280px",
        "desktop-lg": "1440px",
        "desktop-xl": "1536px",
      },
      textShadow: {
        "button-black": "0px 0px 4px rgba(0, 0, 0, 0.90)",
      },
      position: {
        "top-left": "top-0 left-0",
        "top-right": "",
        "bottom-left": "",
        "botton-right": "",
        "top-center": "",
        "bottom-center": "",
        "left-center": "",
        "right-center": "",
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
        }
      };
      addComponents(newComponents, ["responsive", "hover"]);
      matchUtilities(
        {
          position: (value) => ({
            position: value,
          }),
        },
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
