import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../component/badge/cvaBadge";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconButton } from "../../component/badge/iconButton";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeDefault: Story = {
  args: {
    children: (
      <IconButton
        size={"base"}
        fill={"borderless"}
        shape={"circular"}
        disabled={false}
      >
        <FontAwesomeIcon icon={faBell} className="h-6" />
      </IconButton>
    ),
    num: "!",
    intent: "error",
    isDot: false,
    isAnimated: true,
    className: "right-0 top-0",
  },
};
