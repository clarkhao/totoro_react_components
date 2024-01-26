import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../component/button/cvaButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    intent: "primary",
    fill: "contained",
    size: "base",
    disabled: false,
    state: "pre",
    className: "w-40",
    children: <>HelloWorld</>,
    withIcon: false,
    icon: <FontAwesomeIcon icon={faPen} className="w-4 h-auto" />,
  },
};
