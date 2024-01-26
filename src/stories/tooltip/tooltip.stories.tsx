import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../../component/tooltip/cvaTooltip";
import React from "react";
import { Button } from "../../component/button/button";
import { Chip } from "../../component/chip/chip";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BtnTooltip: Story = {
  args: {
    tips: () => <p className="text-sm">Hello World</p>,
    children: <Button size="base">Hover me</Button>,
  },
  decorators: [
    (Story) => {
      return (
        <div className="relative">
          <Story />
        </div>
      );
    },
  ],
};

export const ChipTooltip: Story = {
  args: {
    tips: (
      data: Record<string, React.Dispatch<React.SetStateAction<boolean>>>,
    ) => {
      return (
        <p className="text-sm" onClick={() => data.setShowTooltip(false)}>
          Hello World
        </p>
      );
    },
    children: (
      <Chip actual="Hello World" btnColor="blue" bgColor="blue" isRemoved />
    ),
    isAuto: false,
  },
  decorators: [
    (Story) => {
      return (
        <div className="relative">
          <Story />
        </div>
      );
    },
  ],
};
