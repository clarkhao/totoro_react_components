import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Badge, getRandomColor } from "../../component/badge/badge";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const BadgeDefault: Story = {
  args: {
    actual: "Daily",
    isRemoved: false,
    color: "blue",
  },
};
export const BadgeDeleteDefault: Story = {
  args: {
    actual: "Daily",
    isRemoved: true,
    color: "pink",
  },
};
export const BadgeExtraTextDefault: Story = {
  args: {
    actual: "EnjoyDailyLif",
    isRemoved: true,
    color: "green",
  },
};
