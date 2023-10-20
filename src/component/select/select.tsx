import React, { useTransition } from "react";
import { FilterContext } from "../fitler/hook";
import { FilterNSortContext } from "../next-dnd-list/hook";
import { useSortStore } from "../next-dnd-list/store";

export interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * items
   */
  items: Array<{ id: string; title: string }>;
  /**
   * id
   */
  index?: number;
  /**
   * selectKey
   */
  selectKey?: string;
  /**
   * title
   */
  title?: string;
  /**
   * size?
   */
  height?: "tiny" | "small" | "base" | "large";
}

export function Select({ items, id, ...rest }: ISelect) {
  const filter = React.useContext(FilterContext);
  const filterNSort = React.useContext(FilterNSortContext);
  const [isPending, startTransition] = useTransition();
  const [sort] = useSortStore((state) => [state.sort]);
  const getSize = React.useMemo(() => {
    switch (rest.height) {
      case "tiny":
        return "xs:h-8 xs:text-sm rounded-md";
      case "small":
        return "xs:h-10 xs:text-sm rounded-sm";
      case "base":
        return "xs:h-14 xs:text-base rounded-md";
      case "large":
        return "xs:h-14 xs:text-base rounded-lg";
      default:
        return "xs:h-14 xs:text-base rounded-md";
    }
  }, [rest.height]);
  return (
    <>
      <select
        className={[
          " h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm block py-1 pl-1 pr-8",
          "focus:ring-violet-500 focus:border-violet-500",
          "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          "overflow-hidden",
          getSize,
        ].join(" ")}
        {...rest}
      >
        {rest.title && <option>{rest.title}</option>}
        {items.map((item, index) => (
          <option
            key={`${rest.title}-${index}`}
            value={index}
            className="text-sm"
            selected={
              filter?.filterState.selected === index ||
              filterNSort?.filterState.category === index ||
              (filterNSort?.filterState.sort[rest.index ?? 0] &&
                filterNSort?.filterState.sort[rest.index ?? 0][
                  rest.selectKey!
                ] === index) ||
              (sort[rest.index ?? 0] &&
                sort[rest.index ?? 0][rest.selectKey!] === index)
            }
          >
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
}
