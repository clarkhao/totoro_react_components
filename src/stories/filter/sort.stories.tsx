import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SortGroup } from "../../component/next-dnd-list/sort";
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

function SortWrapper(props: TFilterNSortWrapper) {
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
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SelectBy: Story = {
  args: {},
};
