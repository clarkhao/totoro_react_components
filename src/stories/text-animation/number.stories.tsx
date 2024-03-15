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
    start: 0.0,
    end: 1000.0,
    size: "large",
  },
  decorators: [],
};
