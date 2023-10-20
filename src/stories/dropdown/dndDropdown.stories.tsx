import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { TodoListItem } from "../../component/dropdown/dndDropdown";
import React from "react";
import {
  FilterNSortContext,
  useFilterNSort,
} from "../../component/next-dnd-list/hook";
import { CustomDraggable } from "../../component/next-dnd-list/draggable";
import {
  DndListContext,
  useDndList,
} from "../../component/next-dnd-list/dndListHook";

type TDragableItem = {};
function DragableItem({ ...props }: TDragableItem) {
  const { filterState, filterDispatch } = useFilterNSort();
  const { dndListState, dndListDispatch } = useDndList();
  //drop event handler
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const transferData = e.dataTransfer.getData("text/plain").split("/");
    console.log(transferData);
    dndListDispatch({
      type: "set-item-position",
      payload: {
        index: 0,
        x: dndListState.list[0].position.x + dndListState.list[0].offset.x,
        y: dndListState.list[0].position.y + dndListState.list[0].offset.y,
      },
    });
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (dndListState.list[0].active) event.preventDefault();
  };
  React.useEffect(() => {
    dndListDispatch({
      type: "create-item",
      payload: { content: "Hello World" },
    });
  }, []);
  return (
    <DndListContext.Provider value={{ dndListState, dndListDispatch }}>
      <div
        className="w-full h-[600px] relative"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {dndListState.list[0] ? (
          <CustomDraggable
            index={0}
            style={{
              position: "absolute",
              left: `${
                dndListState.list[0] ? dndListState.list[0].position.x : 0
              }px`,
              top: `${
                dndListState.list[0] ? dndListState.list[0].position.y : 0
              }px`,
            }}
          >
            <FilterNSortContext.Provider
              value={{ filterState, filterDispatch }}
            >
              <div className="">
                <TodoListItem
                  id="id"
                  index={0}
                  content={{
                    content: dndListState.list[0].content,
                    completed: dndListState.list[0].completed,
                    due: dndListState.list[0].due,
                    selectedTags: [],
                  }}
                />
              </div>
            </FilterNSortContext.Provider>
          </CustomDraggable>
        ) : null}
      </div>
    </DndListContext.Provider>
  );
}

const meta: Meta<typeof DragableItem> = {
  title: "UI/dropdown/dndDropdown",
  component: DragableItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DragableItem>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TotoListItemDefault: Story = {
  args: {},
};
