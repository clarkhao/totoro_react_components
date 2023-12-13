import type { Meta, StoryObj } from "@storybook/react";
import { DynamicPagination } from "../../component/next-pagination/dynamic";
import React from "react";
import {
  DynamicListContext,
  usePage,
} from "../../component/next-pagination/dynamicHook";

const meta: Meta<typeof DynamicPagination> = {
  title: "UI/Pagination",
  component: DynamicPagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicPaginationDefault: Story = {
  args: {
    isNext: true,
    isPrev: true,
    total: 1000,
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
