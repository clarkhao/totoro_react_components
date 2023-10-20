import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Pagination from "../../component/next-pagination/pagination";
import { ListContext, useFetch } from "../../component/next-pagination/hook";
import React from "react";

function PaginationWithContext() {
  const { listState, listDispatch } = useFetch();
  
  return (
    <ListContext.Provider value={{ listState, listDispatch }}>
      <Pagination lastPageIndex={9}/>
    </ListContext.Provider>
  );
}

const meta: Meta<typeof PaginationWithContext> = {
  title: "UI/Pagination",
  component: PaginationWithContext,
  tags: ["autodocs"],
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

export const PaginationDefault: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
