import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../component/chip/chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipDefault: Story = {
  args: {
    actual: "Learn More...",
    isRemoved: false,
    bgColor: "blue",
    btnColor: "blue",
    size: "xs",
    children: <FontAwesomeIcon icon={faHome} className="w-[14px] h-auto" />,
  },
};
