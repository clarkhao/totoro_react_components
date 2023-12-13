import type { Meta, StoryObj } from "@storybook/react";
import { ListRender } from "../../component/next-client-list/list";
import Item from "../../component/items/blogItem";

const meta: Meta<typeof ListRender> = {
  title: "UI/List/ListRender",
  component: ListRender,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ListRender>;

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
