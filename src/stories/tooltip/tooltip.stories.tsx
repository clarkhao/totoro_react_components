import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../../component/tooltip/tooltip";
import React from "react";
import { Button } from "../../component/button/button";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const RatingDefault: Story = {
  args: {
    text: "Hello World",
    children: <Button size="base">Hover me</Button>,
  },
};
