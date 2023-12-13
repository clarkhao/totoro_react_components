import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDefault } from "../../component/avatar/avatarInput";
import React from "react";
import { FiCamera } from "react-icons/fi";

const meta: Meta<typeof AvatarDefault> = {
  title: "UI/Avatar/Dropdown",
  component: AvatarDefault,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof AvatarDefault>;

export const AvatarByInput: Story = {
  args: {
    handler: console.log,
    children: (data: Record<string, unknown>) => (
      <div className="w-full px-6 p-2">{data.name as string}</div>
    ),
    userInfo: {
      avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed",
      name: "Clark",
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
    size: "md",
  },
};
