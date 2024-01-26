import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdown } from "../../component/avatar/nextAvatarDrop";
import React from "react";

const meta: Meta<typeof AvatarDropdown> = {
  title: "UI/Avatar",
  component: AvatarDropdown,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithDropdown: Story = {
  args: {
    size: "md",
    shape: "square",
    children: (
      <p className="w-80 h-80 bg-light-secondary-dark-variant dark:bg-dark-secondary-dark-variant"></p>
    ),
    className: "",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-row justify-end">
          <Story />
        </div>
      );
    },
  ],
};
