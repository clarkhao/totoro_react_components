import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Rating from "../component/rating/rating";
import React from "react";

const meta: Meta<typeof Rating> = {
  title: "UI/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const RatingDefault: Story = {
  args: {
    stars: 3.5,
    size: "base"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
