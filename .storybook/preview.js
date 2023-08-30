import "../src/app/globals.css";
import { withThemeByClassName } from "@storybook/addon-styling";

const globalDecorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  console.log(theme);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        padding: "12px",
        overflow: "auto",
        backgroundColor:
          theme == null || theme.length === 0 || theme === "light"
            ? "#ffffff"
            : "#222233",
      }}
    >
      <StoryFn />
    </div>
  );
};

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
