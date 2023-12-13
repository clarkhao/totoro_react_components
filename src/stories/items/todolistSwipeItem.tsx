import type { Meta, StoryObj } from "@storybook/react";
import { TodoListSwipeItem } from "../../component/items/todoListSwipeItem";
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

function DragableItem() {
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
  }, [dndListDispatch]);
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
              <TodoListSwipeItem
                id="id"
                content={{
                  completed: false,
                  content: "Hello",
                  due: new Date(),
                  selectedTags: [],
                }}
                index={0}
              />
            </FilterNSortContext.Provider>
          </CustomDraggable>
        ) : null}
      </div>
    </DndListContext.Provider>
  );
}

const meta: Meta<typeof DragableItem> = {
  title: "UI/Item/TodoListSwipeItem",
  component: DragableItem,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DragableItem>;

export const TotoListSwipeItemDefault: Story = {
  args: {},
};
