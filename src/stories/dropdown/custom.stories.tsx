import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CustomDropdown } from "../../component/dropdown/customDropdown";
import React from "react";
const Clickable = ({title, ...props}: Record<string, any>) => {
  return <div onClick={props.handler} className="cursor-pointer bg-gray-300">{title}</div>
}

const meta: Meta<typeof CustomDropdown> = {
  title: "UI/dropdown",
  component: CustomDropdown,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CustomDropdown>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Dropdown_V1: Story = {
  args: {
    title: "Hello",
    children: <div className="h-80 w-40 bg-gray-200 rounded-md"></div>
  },
  decorators: [
    (Story) => {
      return <div className="w-[72px] fixed left-1/2 -translate-x-1/2">
        <Story />
      </div>
    }
  ]
};
