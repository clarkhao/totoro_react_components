import { CustomDropdown } from "../dropdown/customDropdown";
import { Select } from "../select/select";
import {
  FaSquarePlus,
  FaPlus,
  FaXmark,
  FaGripVertical,
  FaEllipsisVertical,
  FaTrashCan,
} from "react-icons/fa6";
import React from "react";
import { FilterNSortContext, TSelected } from "./hook";
import { DefaultClickable } from "../dropdown/defaultClickable";
import { AddSort } from "./addSort";
import { Badge } from "../badge/badge";
import { CustomAbsDrop } from "../dropdown/customAbsDrop";
import { useSortStore } from "./store";

type TFilterNSort = {};

export function FilterNSort({ ...props }: TFilterNSort) {
  const filterNSort = React.useContext(FilterNSortContext);
  const [sort, setSortGroup] = useSortStore((state) => [
    state.sort,
    state.setSortGroup,
  ]);
  //tag inside the textinput
  const [tag, setTag] = React.useState<string>("");
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTag(evt.target.value);
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter" && tag) {
      filterNSort?.filterDispatch({
        type: "create-tag",
        payload: (evt.target as HTMLInputElement).value,
      });
      setTag("");
    }
  };

  const handleTagAdd = () => {
    filterNSort?.filterDispatch({
      type: "create-tag",
      payload: tag,
    });
    setTag("");
  };

  const handleCreateSort = (num: number) => {
    setSortGroup((prev) => prev.concat({ type: num, order: 0 }));
  };

  const handleDeleteSort = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    i: number
  ) => {
    console.log(i);
    setSortGroup((prev) => prev.filter((_, index) => index !== i));
  };
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number,
    key: string
  ) => {

  };
  return (
    <div className="flex flex-row justify-start items-start gap-3">
      <Select
        height="tiny"
        items={[
          { id: "todolist", title: "Todo List" },
          { id: "onprogress", title: "OnProgress" },
          { id: "completed", title: "Completed" },
        ]}
        index={0}
        onChange={(e) => {
          filterNSort?.filterDispatch({
            type: "set-category",
            payload: e.target.value,
          });
        }}
      />
      <div className="w-32">
        <CustomDropdown
          title="Filter by Tags"
          clickable={DefaultClickable}
          isAbs
          className="top-10 -left-[64px]"
        >
          <div className="w-64 shadow-md">
            <div className="relative flex">
              <input
                type="text"
                className={[
                  "border-none outline-none focus:border-none focus:outline-none focus:ring-0 flex-1 p-1 pr-8 min-w-[100px]",
                  "bg-transparent dark:text-white focus:caret-black",
                ].join(" ")}
                value={tag}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Add new tag..."
              />
              <FaSquarePlus
                className={[
                  "w-6 h-auto text-gray-700 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-200",
                  "cursor-pointer absolute right-1 bottom-[2px]",
                ].join(" ")}
                onClick={handleTagAdd}
              />
            </div>
            <main className="w-full pt-1 flex flex-col justify-start items-start gap-1 min-h-[200px] max-h-[400px] overflow-auto bg-gray-100">
              {filterNSort?.filterState.tags.map((item, index) => {
                return (
                  <div
                    key={`item-${index}`}
                    className="px-2 flex flex-row justify-between items-center w-full hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    <div className="flex-1 flex items-center rounded ">
                      <input
                        id={`checkbox-item-${index}`}
                        type="checkbox"
                        value=""
                        checked={
                          filterNSort?.filterState.filterTags.indexOf(
                            item.content
                          ) !== -1
                        }
                        className={[
                          "w-4 h-4 text-brand-secondary bg-gray-100 border-gray-300 rounded focus:ring-violet-300 focus:ring-2",
                          "dark:text-violet-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700",
                        ].join(" ")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            filterNSort?.filterDispatch({
                              type: "select-filter-tags",
                              payload: item.content,
                            });
                          } else {
                            filterNSort?.filterDispatch({
                              type: "deselect-filter-tags",
                              payload: item.content,
                            });
                          }
                        }}
                      />
                      <label
                        htmlFor={`checkbox-item-${index}`}
                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        <Badge actual={item.content} color={item.color} />
                      </label>
                    </div>
                    <div className="relative">
                      <CustomAbsDrop
                        clickable={() => FaEllipsisVertical({})}
                        id={0}
                        className="right-0"
                      >
                        <div
                          className="flex flex-row justify-start items-center gap-2 p-1 bg-ele-error rounded-md hover:bg-ele-error/80 text-white text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            filterNSort?.filterDispatch({
                              type: "delete-tag",
                              payload: item.content,
                            });
                          }}
                        >
                          <FaTrashCan className="w-4 h-auto" />
                          <span>Delete</span>
                        </div>
                      </CustomAbsDrop>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </CustomDropdown>
      </div>
      <div className="w-[1px] h-8 bg-gray-300/40"></div>
      <CustomDropdown
        title="Sort by ..."
        clickable={DefaultClickable}
        isAbs
        className="top-10 -left-[78px]"
      >
        <div className="flex flex-col justify-start items-start bg-gray-200 dark:bg-gray-600 rounded-md w-64 shadow-md">
          {sort.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-row justify-between items-center p-2 w-full bg-gray-200 dark:bg-gray-600 "
              >
                <span className="flex flex-row justify-start items-center gap-1">
                  <FaGripVertical className="dark:text-gray-200 text-gray-50 cursor-move" />
                  <Select
                    height="tiny"
                    items={[
                      { id: "date", title: "Date" },
                      { id: "tags", title: "Tags" },
                    ]}
                    index={i}
                    selectKey="type"
                    onChange={(e) => {
                      const items = [
                        { id: "date", title: "Date" },
                        { id: "tags", title: "Tags" },
                      ];
                      handleSelectChange(e, i, "type");
                    }}
                  />
                  <Select
                    height="tiny"
                    items={[
                      { id: "asc", title: "Ascending" },
                      { id: "dsc", title: "Descending" },
                    ]}
                    index={i}
                    selectKey="order"
                    onChange={(e) => {
                      const items = [
                        { id: "asc", title: "Ascending" },
                        { id: "dsc", title: "Descending" },
                      ];
                      handleSelectChange(e, i, "order");
                    }}
                  />
                </span>
                <FaXmark
                  className="dark:text-gray-200 cursor-pointer text-gray-500 w-4 h-auto hover:bg-gray-300"
                  onClick={(e) => handleDeleteSort(e, i)}
                />
              </div>
            );
          })}

          <div className="w-full relative">
            <CustomAbsDrop
              title="Add Sort"
              clickable={AddSort}
              id={0}
              className="top-20"
            >
              <div className="-mt-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 min-h-[200px] p-2 w-64 rounded-md shadow-md">
                {["date", "tags"].map((el, index) => {
                  return (
                    <p
                      key={`other-${index}`}
                      onClick={() => handleCreateSort(index)}
                      className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-1 rounded-sm "
                    >
                      {["date", "tags"][index]}
                    </p>
                  );
                })}
              </div>
            </CustomAbsDrop>
          </div>
        </div>
      </CustomDropdown>
    </div>
  );
}
