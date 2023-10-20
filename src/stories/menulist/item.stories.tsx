import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import FoldingItem from "../../component/next-navigation/foldingItem";
import { FiAirplay } from "react-icons/fi";
import React from "react";

const meta: Meta<typeof FoldingItem> = {
  title: "UI/Menu/FoldingItem",
  component: FoldingItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const MenuItemDefault: Story = {
  args: {
    title: "subject",
    sub: ["one", "two", "three"],
    icon: { title: <FiAirplay />, sub: [] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
