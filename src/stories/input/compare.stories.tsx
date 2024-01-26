import type { Meta, StoryObj } from "@storybook/react";
import { CompareList } from "../../component/next-input/compare";
import React from "react";

const meta: Meta<typeof CompareList> = {
  title: "UI/Input",
  component: CompareList,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ListDefault: Story = {
  args: {
    data: [
      {
        kind: "min",
        value: false,
        message: "Must be 4 or more characters long",
      },
      {
        kind: "max",
        value: true,
        message: "Must be 32 or fewer characters long",
      },
    ],
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-full h-screen">
          <Story />
        </div>
      );
    },
  ],
};
