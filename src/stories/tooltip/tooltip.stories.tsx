import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Tooltip } from "../../component/tooltip/tooltip";
import React from "react";
import { IButton, Button } from "../../component/button/button";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const RatingDefault: Story = {
  args: {
    text: "Hello World",
    children: <Button size="base">Hover me</Button>,
  },
};
