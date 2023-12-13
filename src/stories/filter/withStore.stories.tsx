import type { Meta, StoryObj } from "@storybook/react";
import { FilterNSort } from "../../component/next-dnd-list/filterNsortWithStore";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";

function FilterNSortWrapper() {
  const { filterState, filterDispatch } = useFilterNSort();
  return (
    <FilterNSortContext.Provider value={{ filterState, filterDispatch }}>
      <FilterNSort />
    </FilterNSortContext.Provider>
  );
}

const meta: Meta<typeof FilterNSortWrapper> = {
  title: "UI/Filter/filterAndSortWithStore",
  component: FilterNSortWrapper,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FilterNSortWrapper>;

export const SelectDefault: Story = {
  args: {},
};
