import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { TagsArea } from "../../component/richText/tagsArea";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";
import {
  DndListContext,
  useDndList,
} from "../../component/next-dnd-list/dndListHook";

type TStoryTagsArea = {};
function StoryTagsArea({ ...props }: TStoryTagsArea) {
  const { filterState, filterDispatch } = useFilterNSort();
  const { dndListState, dndListDispatch } = useDndList();
  React.useEffect(() => {
    dndListDispatch({
      type: "create-item",
      payload: { content: "Hello World" },
    });
  }, []);
  return (
    <FilterNSortContext.Provider value={{ filterState, filterDispatch }}>
      <DndListContext.Provider value={{ dndListState, dndListDispatch }}>
        <TagsArea index={0} />
      </DndListContext.Provider>
    </FilterNSortContext.Provider>
  );
}

const meta: Meta<typeof StoryTagsArea> = {
  title: "UI/Input/tagsArea",
  component: StoryTagsArea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof StoryTagsArea>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TagAreaDefault: Story = {
  args: {},
};
