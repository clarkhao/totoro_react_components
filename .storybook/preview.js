import "../src/app/globals.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: "Light",
      list: [
        {
          name: "Light",
          class: [],
          color: "#ffffff",
          default: true,
        },
        {
          name: "Dark",
          // The class dark will be added to the body tag
          class: ["dark"],
          color: "#000000",
        },
      ],
    },
  },
};
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const PrimaryDark = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    themes: {
      themeOverride: "dark", // Story level override
    },
  },
};

export default preview;
