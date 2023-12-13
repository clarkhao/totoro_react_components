import type { Meta, StoryObj } from "@storybook/react";
import { Hamberger } from "../../component/hamberger/hamberger";
import React from "react";
import {
  DropContext,
  useDropdown,
} from "../../component/dropdown/nextDropHook";

const meta: Meta<typeof Hamberger> = {
  title: "UI/hamberger",
  component: Hamberger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HambergerDefault: Story = {
  args: {},
  decorators: [
    (Story) => {
      const { dropState, dropDispatch } = useDropdown();
      return (
        <DropContext.Provider value={{ dropState, dropDispatch }}>
          <Story />
        </DropContext.Provider>
      );
    },
  ],
};
