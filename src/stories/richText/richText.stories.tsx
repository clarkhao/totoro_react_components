import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { RichText } from "../../component/richText/richText";
import React from "react";

const meta: Meta<typeof RichText> = {
  title: "UI/RichText",
  component: RichText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof RichText>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const RatingDefault: Story = {
  args: {},
};
