import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Slider } from "../../component/slider/slider";
import React from "react";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
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

export const SliderDefault: Story = {
  args: {
    imageList: [
      {
        from: "https://doggycatty.s3.amazonaws.com/app/slider/green.jpg",
        to: "",
      },
      {
        from: "https://doggycatty.s3.amazonaws.com/app/slider/red.jpg",
        to: "",
      },
      {
        from: "https://doggycatty.s3.amazonaws.com/app/slider/white.jpg",
        to: "",
      },
      {
        from: "https://doggycatty.s3.amazonaws.com/app/slider/dark.jpg",
        to: "",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
