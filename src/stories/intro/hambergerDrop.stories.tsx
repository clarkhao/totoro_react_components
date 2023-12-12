import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { HambergerDrop } from "../../component/intro/hambergerDrop";
import React from "react";

const meta: Meta<typeof HambergerDrop> = {
  title: "UI/dropdown/withHamberger",
  component: HambergerDrop,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const WithHamberger: Story = {
  args: {
    className: "fixed right-10 top-10",
    color: "blue",
  },
};
