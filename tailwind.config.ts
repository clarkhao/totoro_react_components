import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#FF2773",
        "brand-primary-light": "#FF4D95",
        "brand-secondary": "#2B1E70",
        "brand-secondary-light": "#252D9B",
        "text-primary": "#190134",
        "text-secondary": "#685879",
        "text-tertiary": "#B3ABBC",
        "text-success": "#5CC689",
        "text-error": "#EE7D52",
        "text-white": "#FFFFFF",
        "text-link": "#252D9B",
        "ele-primary": "#FFFFFF",
        "ele-secondary": "#685879",
        "ele-tertiary": "#B3ABBC",
        "ele-success": "#5CC689",
        "ele-error": "#EE7D52",
        "ele-neutral": "#EAEAEA",
        "ele-overlay": "#2B1E70",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
