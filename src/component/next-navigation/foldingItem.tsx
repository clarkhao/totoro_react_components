import React from "react";
import { useMenuStore } from "./store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const folding = cva("", {
  variants: {},
  defaultVariants: {},
});

type TFoldingItem = {
  /**
   * title
   */
  title: string;
  /**
   *  sub
   */
  sub?: Array<string>;
  /**
   * icon
   */
  icon?: {
    title: React.ReactNode | null;
    sub?: Array<React.ReactNode | null>;
  };
  /**
   * subRoute
   */
  subRoute?: string;
  /**
   * groupname
   */
  groupIndex: number;
};

export default function FoldingItem({
  groupIndex,
  title,
  ...props
}: TFoldingItem) {
  const isFolding = props.sub?.length ?? 0 > 0;
  const [gIndex, setRoute, setGroup] = useMenuStore((state) => [
    state.groupIndex,
    state.setRoute,
    state.setGroup,
  ]);
  return (
    <>
      {isFolding ? (
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className={[
              "flex cursor-pointer items-center justify-between text-sm font-medium text-gray-900 bg-white rounded-lg",
              "dark:bg-gray-700 dark:border-gray-600 dark:text-white",
            ].join(" ")}
          >
            <span
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer",
                "dark:bg-gray-700 dark:border-gray-600",
                "hover:bg-gray-100 hover:text-gray-700",
                "dark:hover:bg-slate-100",
                "inline-flex items-center gap-2",
                groupIndex === gIndex &&
                props.subRoute?.startsWith(title) &&
                !props.subRoute.endsWith(title)
                  ? "bg-brand-primary-light text-white dark:bg-brand-primary"
                  : "",
                groupIndex === 0 && props.subRoute === ""
                  ? "bg-brand-primary-light text-white dark:bg-brand-primary"
                  : "",
              ].join(" ")}
              onClick={() => {
                setGroup(groupIndex);
                setRoute(`${title}`);
              }}
            >
              {props.icon?.title}
              {title}
            </span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className={twMerge(
                "shrink-0 transition-transform duration-300",
                "group-open:-rotate-180 group-open:text-light-primary group-open:dark:text-dark-primary",
              )}
            />
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            {props.sub?.map((item, index) => (
              <li key={`${title}-${index}`}>
                <button
                  className={[
                    "block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500",
                    "dark:text-gray-300 dark:hover:text-gray-600",
                    "hover:bg-gray-100 hover:text-gray-700",
                    "inline-flex items-center gap-2",
                    groupIndex === gIndex && props.subRoute?.endsWith(item)
                      ? "bg-brand-primary-light text-white dark:bg-brand-primary"
                      : "",
                  ].join(" ")}
                  onClick={() => {
                    setGroup(groupIndex);
                    setRoute(`${title}/${item}`);
                  }}
                >
                  {props.icon?.sub && props.icon.sub[index]}
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <li
          className={[
            "text-sm font-medium text-gray-900 bg-white rounded-lg",
            "dark:bg-gray-700 dark:border-gray-600 dark:text-white",
          ].join(" ")}
        >
          <button
            className={[
              "block w-full text-left px-4 py-2 rounded-lg cursor-pointer",
              "dark:bg-gray-700 dark:border-gray-600",
              "hover:bg-gray-100 hover:text-gray-700",
              "dark:hover:bg-slate-100",
              "inline-flex items-center gap-2",
              groupIndex === gIndex && props.subRoute?.startsWith(title)
                ? "bg-brand-primary-light text-white dark:bg-brand-primary"
                : "",
            ].join(" ")}
            onClick={() => {
              setGroup(groupIndex);
              setRoute(`${title}`);
            }}
          >
            {props.icon?.title}
            {title}
          </button>
        </li>
      )}
    </>
  );
}
