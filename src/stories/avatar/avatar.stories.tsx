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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AvatarDefault: Story = {
  args: {
    handler: console.log,
    children: (data: Record<string, any>) => <div className="w-full px-6 p-2">{data.name}</div>,
    userInfo: {
      avatarUrl: "https://avatar-api.clarkhao.repl.co/6.x/pixel-art/svg?seed",
      name: "Clark"
    },
    menu: {
      menu: [
        {
          title: "Subject",
          icon: {
            title: <FiCamera />,
          },
        },
        {
          title: "Play",
        },
      ],
      user: [{ title: "Signout" }],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
