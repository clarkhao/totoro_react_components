import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import ds from "./data/design.json";

//import and read design json file
const colors = ds.colors;
const colorSet: { [key: string]: string } = {};

const lightColorList = Object.entries(colors.light) as Array<Array<string>>;
lightColorList.forEach((v) => {
  if (v[0] !== "text") {
    colorSet[`light-${v[0]}`] = v[1];
  }
});
const lightTextColorList = Object.entries(colors.light.text) as Array<
  Array<string>
>;
lightTextColorList.forEach((v) => {
  colorSet[`light-${v[0]}`] = v[1];
});
const darkColorList = Object.entries(colors.dark) as Array<Array<string>>;
darkColorList.forEach((v) => {
  if (v[0] !== "text") {
    colorSet[`dark-${v[0]}`] = v[1];
  }
});
const darkTextColorList = Object.entries(colors.dark.text) as Array<
  Array<string>
>;
darkTextColorList.forEach((v) => {
  colorSet[`dark-${v[0]}`] = v[1];
});

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
        ...colorSet,
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      animation: {
        "ping-once": "ping 300ms ease-out 1",
        ripple: "ripple 1s linear infinite",
        smripple: "ripple sm",
      },
      keyframes: {
        ripple: {
          "0%": { width: "0px", height: "0px", opacity: "0.5 " },
          "100%": { width: "500px", height: "500px", opacity: "0" },
        },
        smripple: {
          "0%": { width: "0px", height: "0px", opacity: "0.5 " },
          "100%": { width: "30px", height: "30px", opacity: "0" },
        },
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
