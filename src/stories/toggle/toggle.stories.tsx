import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../component/toggle/toggle";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleDefault: Story = {
  args: {},
};
