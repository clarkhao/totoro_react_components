import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CustomAbsDrop } from "../../component/dropdown/customAbsDrop";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";

const Clickable = ({ title, ...props }: Record<string, any>) => {
  return (
    <div onClick={props.handler} className="cursor-pointer bg-gray-300">
      {title}
    </div>
  );
};

const meta: Meta<typeof CustomAbsDrop> = {
  title: "UI/dropdown/CustomAbsDrop",
  component: CustomAbsDrop,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CustomAbsDrop>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const CustomDropdownDefault: Story = {
  args: {
    clickable: () =>
      FaCalendarCheck({
        style: { color: "red", width: "24px", height: "auto" },
      }),
    children: <p>Hello</p>,
    className: "left-4",
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-10">
          <Story />
        </div>
      );
    },
  ],
};
