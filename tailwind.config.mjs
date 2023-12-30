const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rock: ["RockOfTimes"],
        swiss: ["Swiss"],
        rocket: ["Rocket"],
        "rocket-half": ["Rocket-half"],
        "ocr-a": ["OCR-A"],
      },
    },
  },
  plugins: [],
};
