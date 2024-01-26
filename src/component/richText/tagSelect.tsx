import React from "react";
import { CustomDropdown } from "../dropdown/customDropdown";
import { TagsArea } from "./tagsArea";
import { FilterNSortContext } from "../next-dnd-list/hook";
import { DndListContext } from "../next-dnd-list/dndListHook";
import { FaEllipsisVertical, FaTrashCan } from "react-icons/fa6";
import { NextDropdown } from "../dropdown/dropdownV3";
import { Chip } from "../chip/chip";

type TTagSelect = {
  /**
   * index
   */
  index: number;
};

export function TagSelect({ ...props }: TTagSelect) {
  const filterNSort = React.useContext(FilterNSortContext);
  const dndList = React.useContext(DndListContext);

  const handleAddTag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number,
  ) => {
    const newTag = filterNSort?.filterState.tags[i]?.content;
    dndList?.dndListDispatch({
      type: "set-item-tags",
      payload: {
        index: props.index,
        tags: [...dndList.dndListState.list[props.index].selectedTags, newTag!],
      },
    });
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    filterNSort?.filterDispatch({
      type: "delete-tag",
      payload: filterNSort.filterState.tags[index].content,
    });
  };
  return (
    <CustomDropdown
      index={props.index}
      clickable={TagsArea}
      isAbs
      childHeight={272}
    >
      {filterNSort?.filterState.tags &&
      filterNSort?.filterState.tags.length > 0 ? (
        <div className="w-[348px] bg-gray-50 dark:bg-gray-600 p-1 flex flex-col justify-start shadow-lg">
          <TagsArea index={props.index} />
          <div className="max-h-48 overflow-auto">
            {filterNSort?.filterState.tags.map((el, index) => {
              return (
                <div
                  key={`tags-select-${index}`}
                  className={[
                    "hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer pl-1 flex flex-row justify-between items-center rounded-sm",
                  ].join(" ")}
                  onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                    handleAddTag(e, index)
                  }
                >
                  <div className="flex-1">
                    <Chip
                      actual={el.content}
                      bgColor={el.color}
                      btnColor={el.color}
                    />
                  </div>
                  <div className="">
                    <NextDropdown
                      clickable={() => FaEllipsisVertical({})}
                      className="right-0 bottom-1/2 translate-y-1/2 -translate-x-1/2"
                      autoPos={{
                        auto: false,
                        popupHeight: 0,
                        popupWidth: 0,
                      }}
                      isByHover={false}
                    >
                      <div
                        className="flex flex-row justify-start items-center gap-2 p-1 bg-ele-error rounded-md hover:bg-ele-error/80 text-white text-sm"
                        onClick={(
                          e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                        ) => handleDelete(e, index)}
                      >
                        <FaTrashCan />
                        <span>Delete</span>
                      </div>
                    </NextDropdown>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </CustomDropdown>
  );
}
