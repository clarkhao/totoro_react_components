import type { Meta, StoryObj } from "@storybook/react";
import { DndList } from "../../component/next-dnd-list/dndList";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";
import {
  DndListContext,
  useDndList,
} from "../../component/next-dnd-list/dndListHook";

const meta: Meta<typeof DndList> = {
  title: "Scenary/DndAndTodoList",
  component: DndList,
  parameters: {
    layout: ["padded"],
  },
};

export default meta;
type Story = StoryObj<typeof DndList>;

export const DndListDefault: Story = {
  args: {},
  decorators: [
    (Story) => {
      const { filterState, filterDispatch } = useFilterNSort();
      const { dndListState, dndListDispatch } = useDndList();

      return (
        <DndListContext.Provider value={{ dndListState, dndListDispatch }}>
          <FilterNSortContext.Provider value={{ filterState, filterDispatch }}>
            <Story />
          </FilterNSortContext.Provider>
        </DndListContext.Provider>
      );
    },
  ],
};
