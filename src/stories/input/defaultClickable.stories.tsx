import type { Meta, StoryObj } from "@storybook/react";
import { Clickable } from "../../component/next-input/defaultClickable";

const meta: Meta<typeof Clickable> = {
  title: "UI/Input",
  component: Clickable,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ClickableDefault: Story = {
  args: {
    labelText: "Select",
    height: "sm",
  },
};
