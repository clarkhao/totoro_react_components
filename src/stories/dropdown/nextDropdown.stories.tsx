import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { NextDropdown } from "../../component/dropdown/nextDropdown";
import React from "react";
import {
  DropContext,
  useDropdown,
} from "../../component/dropdown/nextDropHook";
import { Hamberger } from "../../component/hamberger/hamberger";

const meta: Meta<typeof NextDropdown> = {
  title: "UI/dropdown",
  component: NextDropdown,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Dropdown_V2: Story = {
  args: {
    clickable: () => <Hamberger color="gray" id="gray" />,
    children: <p className="w-80 h-80 bg-slate-900"></p>,
    className: "top-0",
  },
  decorators: [
    (Story) => {
      const { dropState, dropDispatch } = useDropdown();

      return (
        <div className="relative w-20 left-1/2 -translate-x-1/2">
          <DropContext.Provider value={{ dropState, dropDispatch }}>
            <Story />
          </DropContext.Provider>
        </div>
      );
    },
  ],
};
