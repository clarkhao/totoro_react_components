import type { Meta, StoryObj } from "@storybook/react";
import Check from "../../component/group-rive/check";

const meta: Meta<typeof Check> = {
  title: "UI/Rive/Check",
  component: Check,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Check>;

export const Primary: Story = {
  args: {},
};
