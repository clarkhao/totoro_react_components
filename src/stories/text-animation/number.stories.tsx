import type { Meta, StoryObj } from "@storybook/react";
import { Number } from "../../component/group-text-animation/number";

const meta: Meta<typeof Number> = {
  title: "UI/Text-Animation/Number",
  component: Number,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Number>;

export const NumberDefault: Story = {
  args: {
    numbers: { start: "0.00", end: "1000.00" },
    size: "large",
  },
  decorators: [],
};
