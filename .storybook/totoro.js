// .storybook/YourTheme.js

import { create } from "@storybook/theming/create";
import Logo from "./components.png";

export default create({
  base: "light",
  brandTitle: "Clark's Components",
  brandUrl: "https://github.com/clarkhao/totoro_react_components",
  brandImage: undefined,
  brandTarget: "_self",
});
