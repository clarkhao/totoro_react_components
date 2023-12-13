import type { Meta, StoryObj } from "@storybook/react";
import FoldingItem from "../../component/next-navigation/foldingItem";
import { FiAirplay } from "react-icons/fi";
import React from "react";

const meta: Meta<typeof FoldingItem> = {
  title: "UI/Menu/FoldingItem",
  component: FoldingItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemDefault: Story = {
  args: {
    title: "subject",
    sub: ["one", "two", "three"],
    icon: { title: <FiAirplay />, sub: [] },
  },
};
