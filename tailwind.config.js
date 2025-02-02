/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "golden": "#dc9644",
        "golden-1": "#e09b49",
        "golden-dark-1": "#a77132",
        "golden-dark-2": "#493824",
        "golden-light-1": "#ffc99d",
        "golden-light-2": "#e8a454",
        "golden-light-3": "#e6c486",
        "dark-1": "#0d0d0d",
        "dark-2": "#212121",
        "dark-3": "#222A2E",
        "dark-4": "#17181D",
        "dark-5": "#141414",
        "light": "#d3d3d3",
      },
      backgroundImage: {
        "gold-gradient-270":
          "linear-gradient(270deg, #533419 0%, #1E0E01 77.48%, #1C0C00 100%)",
          "gold-gradient-286": "linear-gradient(286deg, rgba(97, 88, 69, 0) 23%, rgb(209, 174, 109) 50%, rgba(97, 88, 69, 0) 84%)",
        "dark-gold-gradient":
          "linear-gradient(180deg, #35251C 0%, #170C06 100%)",
        "black-gradient-270": "linear-gradient(270deg, #0E0601 0%, #070402 100%)",
        "black-gradient-180": "linear-gradient(180deg, rgba(0, 0, 0, 0.90) 45%, rgba(0, 0, 0, 0.00) 85.14%)"
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        bebas: ["Bebas-Neue", "sans-serif"]
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
      animation: {
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 1, 3) infinite',
      }
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
        ".text-silver-1": {
          fontFamily: "Jost, sans-serif",
          color: "transparent",
          backgroundImage:
            "linear-gradient(0turn, rgba(96, 102, 109, 1) 0%, rgba(237, 237, 232, 1) 100%)",
          backgroundClip: "text",
          fontWeight: "400",
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
        ".text-gold-1": {
          fontFamily: "Jost, sans-serif",
          color: "transparent",
          backgroundImage: "linear-gradient(0turn,rgba(139,90,45,1) 0%,rgba(224,203,157,1) 100%)",
          backgroundClip: "text",
          fontWeight: "400",
          lineHeight: 1,
        },
        ".text-gold-2": {
          fontFamily: "Jost, sans-serif",
          color: "transparent",
          backgroundImage: "linear-gradient(0.5turn,rgba(225,194,170,1) 0%,rgba(176,95,37,1) 100%)",
          bacgroundPosition: "center",
          backgroundClip: "text",
          fontWeight: "800",
          lineHeight: 1,
        },
        ".text-gold-3": {
          fontFamily: "Jost, sans-serif",
          color: "transparent",
          backgroundImage: "linear-gradient(0.5turn,rgba(255,191,116,1) 0%,rgba(183,106,17,1) 99%)",
          bacgroundPosition: "center",
          backgroundClip: "text",
          fontWeight: "800",
          lineHeight: 1,
        },
        ".text-gold-bebas": {
          fontFamily: "Bebas-Neue, sans-serif",
          color: "transparent",
          backgroundImage: "linear-gradient(180deg, #E6C486 0%, #9B752C 100%)",
          backgroundClip: "text",
          fontWeight: "800",
          lineHeight: 1,
        },
        ".shadow-1": {
          filter: "drop-shadow(var(--shadow1))",
        },
        ".shadow-1-md": {
          filter: "drop-shadow(var(--shadow1-md))"
        },
        ".shadow-2": {
          filter: "drop-shadow(var(--shadow2))"
        },
        ".shape-trapezoid": {
          clipPath: "polygon(0 0, 100% 0, 94% 100%, 6% 100%)"
        },
        ".shape-none": {
          clipPath: "none"
        },
      };
      addComponents(newComponents, ["responsive", "hover"]);
    }),
  ],
};
