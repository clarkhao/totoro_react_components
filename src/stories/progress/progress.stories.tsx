import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Progress } from "../../component/progress/progress";
import React from "react";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
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

export const ProgressDefault: Story = {
  args: {
    header: "React",
    count: 7,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
