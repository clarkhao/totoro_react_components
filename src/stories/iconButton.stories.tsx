import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { IconButton } from "../component/button/iconButton";
import React from "react";
import { FaApple, FaCartShopping } from "react-icons/fa6";

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
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const IconBtnDefault: Story = {
  args: {
    children: <FaCartShopping className="w-10 h-auto dark:text-white"/>,
    size: 'base',
    num: 8
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
