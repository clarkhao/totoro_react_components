import type { Meta, StoryObj } from "@storybook/react";
import { CustomDropdown } from "../../component/dropdown/customDropdown";
import React from "react";

const meta: Meta<typeof CustomDropdown> = {
  title: "UI/dropdown",
  component: CustomDropdown,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CustomDropdown>;

export const Dropdown_V1: Story = {
  args: {
    title: "Hello",
    children: <div className="h-80 w-40 bg-gray-200 rounded-md"></div>,
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-[72px] fixed left-1/2 -translate-x-1/2">
          <Story />
        </div>
      );
    },
  ],
};
