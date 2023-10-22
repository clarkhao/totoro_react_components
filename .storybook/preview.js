import "../src/app/globals.css";
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

const preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false, // Enable dark mode by default on all stories
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#222233",
        },
        {
          name: "grey",
          value: "#999999",
        },
      ],
    },
  },
  
};

export default preview;
