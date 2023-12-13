import React, { Fragment } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { Tooltip } from "../tooltip/tooltip";
import { TodoListItem } from "../dropdown/dndDropdown";
import { DndListContext } from "./dndListHook";
import { CustomDraggable } from "./draggable";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./dnd-transition.css";
import { FilterNSort } from "./filterNsort";
import { FilterNSortContext } from "./hook";

export function DndList() {
  const dndList = React.useContext(DndListContext);
  const filterNSort = React.useContext(FilterNSortContext);
  const editorRef = React.useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    if (editorRef.current?.innerHTML) {
      let content = editorRef.current?.innerHTML;
      content = content.replace(/<\/?div>/g, "");
      dndList?.dndListDispatch({ type: "create-item", payload: { content } });
    }
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };
  //drop event handler

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (dndList?.dndListState.list.some((el) => el.active)) {
      console.log("active");
      event.preventDefault();
    }
  };
  const renderList = React.useMemo(() => {
    const category = +(filterNSort?.filterState.category ?? 0);
    const filterTags = filterNSort?.filterState.filterTags;
    //const sort = filterNSort?.filterState.sort;
    const list = dndList?.dndListState.list;
    console.log(filterTags);
    switch (category) {
      case 1: {
        if (!filterTags || filterTags.length === 0) {
          return list?.filter((el) => el.completed === false);
        } else {
          return list
            ?.filter((el) => el.completed === false)
            .filter((el) =>
              el.selectedTags.some((tag) => filterTags.includes(tag)),
            );
        }
      }

      case 2: {
        if (!filterTags || filterTags.length === 0) {
          return list?.filter((el) => el.completed === true);
        } else {
          return list
            ?.filter((el) => el.completed === true)
            .filter((el) =>
              el.selectedTags.some((tag) => filterTags.includes(tag)),
            );
        }
      }
      default: {
        if (!filterTags || filterTags.length === 0) {
          return list;
        } else {
          return list?.filter((el) =>
            el.selectedTags.some((tag) => filterTags.includes(tag)),
          );
        }
      }
    }
  }, [filterNSort?.filterState, dndList?.dndListState.list]);
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="relative flex">
          <div
            ref={editorRef}
            contentEditable={true}
            className={[
              "block p-2.5 pr-10 w-full text-sm rounded-sm border-none",
              "text-gray-900 bg-gray-100 focus:outline-gray-300",
              "dark:bg-gray-600 dark:text-white dark:focus:outline-gray-600 dark:focus:outline-1",
            ].join(" ")}
          />
          <Tooltip
            text="Add new item"
            className="absolute right-1 -bottom-[2px]"
          >
            <FaSquarePlus
              className={[
                "w-8 h-auto text-gray-700 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-200",
                "cursor-pointer",
              ].join(" ")}
              onClick={handleAdd}
            />
          </Tooltip>
        </div>
        <FilterNSort />
        <main
          className="w-full relative flex justify-center items-center gap-2 mt-4 bg-gray-50 rounded-md"
          onDragOver={handleDragOver}
        >
          {dndList?.dndListState.list &&
          dndList?.dndListState.list.length > 0 ? (
            <div
              className={[
                "w-full flex flex-col justify-center items-center gap-4 p-2",
              ].join(" ")}
            >
              <TransitionGroup component={null}>
                {renderList?.map((item, index) => {
                  return (
                    <CSSTransition
                      key={`item-${index}`}
                      classNames="dnd-item"
                      timeout={300}
                    >
                      {dndList.dndListState.dropped > -1 ? (
                        <CSSTransition
                          in={dndList.dndListState.dragged === index}
                          classNames={
                            dndList.dndListState.lastDragged >
                            dndList.dndListState.dragged
                              ? "dnd-sort-down"
                              : "dnd-sort-up"
                          }
                          timeout={300}
                        >
                          <CustomDraggable
                            index={index}
                            className={[
                              dndList.dndListState.dragged === index &&
                              dndList.dndListState.list[index].active
                                ? "opacity-20"
                                : "",
                              `z-[${index + 1}] h-[92px]`,
                            ].join(" ")}
                            style={{ position: "static" }}
                          >
                            <TodoListItem
                              content={{
                                completed: item.completed,
                                content: item.content,
                                due: item.due,
                                selectedTags: item.selectedTags,
                              }}
                              id={`item-${index}`}
                              index={index}
                            />
                          </CustomDraggable>
                        </CSSTransition>
                      ) : (
                        <CustomDraggable
                          index={index}
                          className={[
                            dndList.dndListState.dragged === index &&
                            dndList.dndListState.list[index].active
                              ? "opacity-20"
                              : "",
                          ].join(" ")}
                        >
                          <TodoListItem
                            content={{
                              completed: item.completed,
                              content: item.content,
                              due: item.due,
                              selectedTags: item.selectedTags,
                            }}
                            id={`item-${index}`}
                            index={index}
                          />
                        </CustomDraggable>
                      )}
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </div>
          ) : null}
        </main>
      </div>
    </>
  );
}
