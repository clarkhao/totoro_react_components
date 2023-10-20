import React from "react";
import { useMenuStore } from "./store";

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

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
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
