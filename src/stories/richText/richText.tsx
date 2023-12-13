import type { Meta, StoryObj } from "@storybook/react";
import { RichText } from "../../component/richText/richText";

const meta: Meta<typeof RichText> = {
  title: "UI/RichText",
  component: RichText,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const RatingDefault: Story = {
  args: {},
};
