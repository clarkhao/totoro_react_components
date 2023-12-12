import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Number } from "../../component/group-text-animation/number";
import React from "react";

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
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const NumberDefault: Story = {
  args: {
    numbers: { start: "0.00", end: "1000.00" },
    size: "large",
  },
  decorators: [],
};
