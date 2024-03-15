import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../../component/tooltip/responsiveTooltip";
import React from "react";
import { Button } from "../../component/button/cvaButton";
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

export const BtnResponsiveTooltip: Story = {
  args: {
    tips: () => <p className="text-sm">Hello World</p>,
    children: (
      <Button
        intent={"primary"}
        fill={"contained"}
        disabled={false}
        size={"base"}
        state={"pre"}
        className="w-48 peer"
      >
        Primary Base
      </Button>
    ),
    isAuto: true,
    pos: "right",
    bgColor: "blue",
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

export const ChipResponsiveTooltip: Story = {
  args: {
    tips: (
      data: Record<string, React.Dispatch<React.SetStateAction<boolean>>>,
    ) => {
      console.log(data);
      return <p className="text-sm">Popup</p>;
    },
    children: (
      <Chip actual="Hello World" btnColor="blue" bgColor="blue" isRemoved />
    ),
    isAuto: false,
    bgColor: "dark",
    pos: "right",
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
