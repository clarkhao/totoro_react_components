import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Carousel } from "../../component/carousel/carousel";
import React from "react";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
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

export const CarouselDefault: Story = {
  args: {
    imageUrls: [
      "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "https://api.slingacademy.com/public/sample-photos/3.jpeg",
      "https://api.slingacademy.com/public/sample-photos/4.jpeg",
    ],
    imageSize: { width: 450, height: 450 },
  },
  decorators: [
    (Story) => (
      <div className="w-[450px] overflow-hidden">
        <Story />
      </div>
    )
  ]
};
