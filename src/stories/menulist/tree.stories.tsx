import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Tree } from "../../component/next-navigation/tree";
import React from "react";

const meta: Meta<typeof Tree> = {
  title: "UI/Menu/Tree",
  component: Tree,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Tree>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SortTableDefault: Story = {
  args: {},
};
