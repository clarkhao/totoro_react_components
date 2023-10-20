import type { Meta, StoryObj } from "@storybook/react";
import { IButton, Button } from "../../component/button/button";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      story: { inline: false }, // render the story in an iframe
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    width: "w-48",
  },

};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    width: "w-48",
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    width: "w-48",
    isOutlined: true,
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    width: "w-48",
    isOutlined: true,
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <FaGoogle />
        <span>Button</span>
      </>
    ),
    width: "w-48",
    variant: "primary",
  },
};
