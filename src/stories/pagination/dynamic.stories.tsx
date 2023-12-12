import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { DynamicPagination } from "../../component/next-pagination/dynamic";
import { ListContext, useFetch } from "../../component/next-pagination/hook";
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
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
