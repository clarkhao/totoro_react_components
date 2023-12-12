import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { FilterNSort } from "../../component/next-dnd-list/filterNsort";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";
type TFilterNSortWrapper = {
  /**
   * children
   */
  children: React.ReactNode;
};

function FilterNSortWrapper(props: TFilterNSortWrapper) {
  const { filterState, filterDispatch } = useFilterNSort();
  return (
    <FilterNSortContext.Provider value={{ filterState, filterDispatch }}>
      <FilterNSort />
    </FilterNSortContext.Provider>
  );
}

const meta: Meta<typeof FilterNSortWrapper> = {
  title: "UI/Filter",
  component: FilterNSortWrapper,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FilterNSortWrapper>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SelectDefault: Story = {
  args: {},
};
