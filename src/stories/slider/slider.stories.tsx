import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../../component/slider/slider";

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
};
