import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CustomDropdown } from "../../component/dropdown/customDropdown";
import React from "react";
const Clickable = ({title, ...props}: Record<string, any>) => {
  return <div onClick={props.handler} className="cursor-pointer bg-gray-300">{title}</div>
}

const meta: Meta<typeof CustomDropdown> = {
  title: "UI/dropdown/CustomDropdown",
  component: CustomDropdown,
  tags: ["autodocs"],
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

export const CustomDropdownDefault: Story = {
  args: {
    title: "Hello",
    children: "World"
  },
};
