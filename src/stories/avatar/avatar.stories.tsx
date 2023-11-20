import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Avatar } from "../../component/avatar/avatar";
import React from "react";
import { FaApple } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AvatarDefault: Story = {
  args: {
    size: "md",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed",
  },
};
