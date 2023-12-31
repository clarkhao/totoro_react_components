import type { Meta, StoryObj } from "@storybook/react";
import { TagSelect } from "../../component/richText/tagSelect";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";
import {
  DndListContext,
  useDndList,
} from "../../component/next-dnd-list/dndListHook";

function StoryTagSelect() {
  const { filterState, filterDispatch } = useFilterNSort();
  const { dndListState, dndListDispatch } = useDndList();
  React.useEffect(() => {
    dndListDispatch({
      type: "create-item",
      payload: { content: "Hello World" },
    });
    filterDispatch({ type: "create-tag", payload: "Hello" });
    filterDispatch({ type: "create-tag", payload: "World" });
  }, [dndListDispatch, filterDispatch]);
  return (
    <div className="w-full">
      <FilterNSortContext.Provider value={{ filterState, filterDispatch }}>
        <DndListContext.Provider value={{ dndListState, dndListDispatch }}>
          <div className="w-[348px]">
            <TagSelect index={0} />
          </div>
        </DndListContext.Provider>
      </FilterNSortContext.Provider>
    </div>
  );
}

const meta: Meta<typeof StoryTagSelect> = {
  title: "UI/Input/TagSelect",
  component: StoryTagSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof StoryTagSelect>;

export const TagSelectDefault: Story = {
  args: {},
};
