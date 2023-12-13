import type { Meta, StoryObj } from "@storybook/react";
import Rating from "../component/rating/rating";

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

export const RatingDefault: Story = {
  args: {
    stars: 3.5,
    size: "base",
  },
};
