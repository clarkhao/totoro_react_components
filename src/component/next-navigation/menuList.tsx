"use client";
import { Fragment } from "react";
import FoldingItem from "./foldingItem";
import { useMenuStore } from "./store";
import React from "react";
export type TMenuData = {
  title: string;
  sub?: Array<string>;
  icon?: {
    title: React.ReactNode | null;
    sub?: Array<React.ReactNode | null>;
  };
};
type TMenuList = {
  /**
   * menu content
   */
  data: Record<string, Array<TMenuData>>;
  /**
   * direction?
   */
  direction?: "row" | "column";
  /**
   * handleRoute
   */
  handleRoute?: (route: string) => void;
  /**
   * height
   */
  isCompact?: boolean;
  /**
   * children
   */
  children?: React.ReactNode;
};
function MenuList({ ...props }: TMenuList) {
  const [route, index] = useMenuStore((state) => [
    state.route,
    state.groupIndex,
  ]);
  React.useEffect(() => {
    (props.handleRoute ?? console.log)(
      `current route is ${route} and group is ${index}`,
    );
  }, [route]);
  const groups = Object.entries(props.data);
  return (
    <div
      className={[
        "z-10 w-full divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg",
        "dark:bg-gray-700 dark:text-white",
        props.isCompact ? "h-fit" : "h-screen",
      ].join(" ")}
    >
      {props.children}
      {groups.map(([group, items], groupIndex) => (
        <div className="p-2" key={`${group}-${groupIndex}`}>
          {groups.length > 1 && !props.isCompact ? (
            <strong
              className={[
                "block text-xs font-medium uppercase text-gray-400",
                props.isCompact ? "p-0" : "p-2",
              ].join(" ")}
            >
              {group}
            </strong>
          ) : null}
          <div
            className={[
              "flex justify-between bg-white items-start w-full",
              "dark:bg-gray-700 dark:text-white",
              props.direction === "row" ? "flex-row" : "flex-col",
            ].join(" ")}
          >
            <ul
              className={[
                "space-y-1 w-full",
                props.isCompact ? "mt-0" : "mt-6",
                props.direction === "row"
                  ? "flex flex-row justify-start items-baseline w-fit"
                  : "",
              ].join(" ")}
            >
              {items.map((item, index) => (
                <Fragment key={`menu-${index}`}>
                  {index === 0 && route === "" ? (
                    <FoldingItem
                      groupIndex={groupIndex}
                      subRoute=""
                      {...item}
                    />
                  ) : (
                    <FoldingItem
                      groupIndex={groupIndex}
                      subRoute={
                        route.startsWith(item.title) ? route : undefined
                      }
                      {...item}
                    />
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export { MenuList };
