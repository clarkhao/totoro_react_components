import React, { FocusEventHandler, Fragment } from "react";
import { Badge } from "../badge/badge";
import { FilterNSortContext } from "../next-dnd-list/hook";
import { DndListContext } from "../next-dnd-list/dndListHook";

export function TagsArea({ index, ...props }: Record<string, unknown>) {
  const filterNSort = React.useContext(FilterNSortContext);
  const dndList = React.useContext(DndListContext);
  const inputRef = React.useRef<HTMLInputElement>(null);
  //tag inside the textinput
  const [tag, setTag] = React.useState<string>("");
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTag(evt.target.value);
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      console.log(dndList?.dndListState.list[index as number]);
      console.log(tag);
      if (tag && dndList?.dndListState.list[index as number]) {
        const selected =
          dndList?.dndListState.list[index as number].selectedTags ??
          ([] as Array<string>);
        filterNSort?.filterDispatch({
          type: "create-tag",
          payload: (evt.target as HTMLInputElement).value,
        });
        dndList?.dndListDispatch({
          type: "set-item-tags",
          payload: {
            index: index as number,
            tags: selected?.includes((evt.target as HTMLInputElement).value)
              ? [...selected]
              : [...selected, (evt.target as HTMLInputElement).value],
          },
        });
      }
      setTag("");
    } else if (
      evt.key === "Backspace" &&
      dndList?.dndListState.list[index as number]
    ) {
      if (!tag || tag.length === 0) {
        dndList?.dndListDispatch({
          type: "set-item-tags",
          payload: {
            index: index as number,
            tags: [
              ...(dndList?.dndListState.list[index as number].selectedTags ??
                []),
            ].slice(0, -1),
          },
        });
      }
    }
  };

  const getTags = React.useCallback(() => {
    const allTags = filterNSort?.filterState.tags;
    const indexes =
      dndList?.dndListState.list[index as number] &&
      dndList?.dndListState.list[index as number].selectedTags;
    return allTags?.filter((el) => indexes?.includes(el.content));
  }, [filterNSort?.filterState.tags, dndList?.dndListState.list, index]);

  const handleRemove = (content: string) => {
    dndList?.dndListDispatch({
      type: "set-item-tags",
      payload: {
        index: index as number,
        tags: [
          ...(dndList?.dndListState.list[index as number].selectedTags ?? []),
        ].filter((el) => el !== content),
      },
    });
  };
  return (
    <div
      className={[
        "flex flex-row flex-wrap justify-start items-center gap-y-2 p-1 border-none w-full max-w-[348px]",
        "bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500",
      ].join(" ")}
    >
      {getTags()?.map((el, index) => {
        return (
          <Fragment key={`tags-area-${index}`}>
            <Badge
              actual={el.content}
              color={el.color}
              isRemoved
              removeHandler={() => handleRemove(el.content)}
            />
          </Fragment>
        );
      })}
      <input
        type="text"
        ref={inputRef}
        className={[
          "border-none outline-none focus:border-none focus:outline-none focus:ring-0 flex-1 px-1 py-0 min-w-[100px]",
          "bg-transparent dark:text-white focus:caret-black",
        ].join(" ")}
        value={tag}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={
          props.handler as FocusEventHandler<HTMLInputElement> | undefined
        }
        placeholder="Add new tag..."
      />
    </div>
  );
}
