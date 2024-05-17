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
        jost: ["Jost", "sans-serif"],
        story: ["v_CCTheStorySoFar"]
      },
      padding: {
        "11-22": "clamp(11px, 3vh, 22px)",
      },
      fontSize: {
        "20-40": "clamp(20px, 100%, 40px)",
        "12-24": "clamp(12px, 2vw, 24px)",
        "10-20": "clamp(10px, 100%, 20px)",
        "11-22": "clamp(11px, 2vw, 22px)",
      },
      screens: {
        "mobile": "576px",
        "laptop": "840px",
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
        },
        ".text-story-gold": {
          fontFamily: "v_CCTheStorySoFar-Regular",
          color: "transparent",
          backgroundImage: "linear-gradient(180deg, #FCE9C9 0%, #B39F7D 100%)",
          backgroundClip: "text",
          fontWeight: "400"
        },
        ".shadow-1": {
          filter: "drop-shadow(var(--shadow1))",
        },
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
