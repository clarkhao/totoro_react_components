import type { Meta, StoryObj } from "@storybook/react";
import { SortGroup } from "../../component/next-dnd-list/sort";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";

function SortWrapper() {
  const { filterState, filterDispatch } = useFilterNSort();
  return (
    <FilterNSortContext.Provider value={{ filterState, filterDispatch }}>
      <SortGroup />
    </FilterNSortContext.Provider>
  );
}

const meta: Meta<typeof SortWrapper> = {
  title: "UI/Filter/Sort",
  component: SortWrapper,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof SortWrapper>;

export const SelectBy: Story = {
  args: {},
};
