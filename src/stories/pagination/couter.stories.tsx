import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "../../component/next-pagination/counter";
import React from "react";
import {
  DynamicListContext,
  usePage,
} from "../../component/next-pagination/dynamicHook";

const meta: Meta<typeof Counter> = {
  title: "UI/Pagination/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const CounterDefault: Story = {
  args: {
    isNext: true,
    isPrev: true,
    total: 99,
    range: [1, 99],
  },
  decorators: [
    (Story) => {
      const { listState, listDispatch } = usePage();
      return (
        <DynamicListContext.Provider value={{ listState, listDispatch }}>
          <Story />
        </DynamicListContext.Provider>
      );
    },
  ],
};
