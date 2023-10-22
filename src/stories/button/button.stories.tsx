import type { Meta, StoryObj } from "@storybook/react";
import { IButton, Button } from "../../component/button/button";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { Title, Subtitle, Description, Controls, Stories, Story, Source } from '@storybook/blocks';

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    isPrimary: true,
    width: "w-48",
    size: 'base'
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    isPrimary: false,
    width: "w-48",
    size: 'base'
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: "Button",
    isPrimary: true,
    width: "w-48",
    isOutlined: true,
    size: 'base'
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: "Button",
    isPrimary: false,
    width: "w-48",
    isOutlined: true,
    size: 'base'
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
    isPrimary: true,
    size: 'base'
  },
};
