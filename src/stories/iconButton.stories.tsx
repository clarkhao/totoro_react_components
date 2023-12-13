import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../component/button/iconButton";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconBtnDefault: Story = {
  args: {
    children: <FaCartShopping className="w-10 h-auto dark:text-white" />,
    size: "base",
    num: 8,
  },
};
