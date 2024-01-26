import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../../component/badge/iconButton";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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

export const IconButtonDefault: Story = {
  args: {
    intent: "primary",
    fill: "contained",
    size: "base",
    shape: "circular",
    disabled: false,
    children: <FontAwesomeIcon icon={faBell} className="h-6" />,
  },
};
