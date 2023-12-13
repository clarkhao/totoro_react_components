import React, { forwardRef } from "react";
import { Select } from "../select/select";
import { FilterNSortContext } from "./hook";
import { FaGripVertical, FaXmark } from "react-icons/fa6";
import { CustomAbsDrop } from "../dropdown/customAbsDrop";
import { AddSort } from "./addSort";
// eslint-disable-next-line @typescript-eslint/ban-types
type TSort = {};

export const SortGroup = forwardRef<HTMLDivElement, TSort>(function SortG(
  // eslint-disable-next-line no-empty-pattern
  {}: TSort,
  ref
) {
  const filterNSort = React.useContext(FilterNSortContext);
  const handleCreateSort = (num: number) => {
    filterNSort?.filterDispatch({ type: "create-select-group", payload: num });
  };

  const handleDeleteSort = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    i: number
  ) => {
    console.log(i);
    filterNSort?.filterDispatch({ type: "delete-select-group", payload: i });
  };
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number,
    key: string
  ) => {
    filterNSort?.filterDispatch({
      type: "update-select-group",
      payload: { index: i, key, value: +e.target.value },
    });
  };
  return (
    <div
      className="flex flex-col justify-start items-start bg-gray-200 dark:bg-gray-600 rounded-md w-64 shadow-md"
      ref={ref}
    >
      {filterNSort?.filterState.sort.map((item, i) => {
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
                  handleSelectChange(e, i, "order");
                }}
              />
            </span>
            <FaXmark
              className="dark:text-gray-200 cursor-pointer text-gray-500 w-4 h-auto hover:bg-gray-300"
              onClick={(e) => handleDeleteSort(e, i)}
              data-click="abs"
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
            {[0, 1]
              .filter(
                (_, i) =>
                  !filterNSort?.filterState.sort
                    .map((item) => item["type"])
                    .includes(i)
              )
              .map((el, index) => {
                return (
                  <p
                    key={`other-${index}`}
                    onClick={() => handleCreateSort(el)}
                    className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-1 rounded-sm "
                    data-click="abs"
                  >
                    {["date", "tags"][el]}
                  </p>
                );
              })}
          </div>
        </CustomAbsDrop>
      </div>
    </div>
  );
});

