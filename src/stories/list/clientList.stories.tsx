import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { ListRender } from "../../component/next-client-list/list";
import Item from "../../component/items/blogItem";
import React from "react";

const meta: Meta<typeof ListRender> = {
  title: "UI/List/ListRender",
  component: ListRender,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ListRender>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const InfiniteList: Story = {
  args: {
    element: Item,
    renderWays: "infinite",
  },
};
export const PaginationList: Story = {
  args: {
    element: Item,
    renderWays: "pagination",
  },
};
