import React, { Fragment, LiHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { VariantProps, cva } from "class-variance-authority";

const folding = cva("", {
  variants: {
    bg: {
      blue: [
        "text-blue-800",
        "bg-transparent",
        "hover:bg-blue-200",
        "hover:text-blue-800/80",
        "dark:bg-transparent",
        "dark:text-blue-200",
        "dark:hover:bg-blue-700",
        "dark:hover:text-blue-100",
        "focus:bg-blue-200 dark:focus:bg-blue-700",
      ],
      dark: [
        "text-gray-800",
        "bg-gray-100",
        "hover:bg-gray-200",
        "hover:text-gray-800/80",
        "dark:bg-gray-700",
        "dark:text-gray-200",
        "dark:hover:bg-gray-600",
        "dark:hover:text-gray-100",
        "focus:bg-gray-200 dark:focus:bg-gray-600",
      ],
      red: [
        "text-red-800",
        "bg-red-100",
        "hover:bg-red-200",
        "hover:text-red-800/80",
        "dark:bg-red-900",
        "dark:text-red-200",
        "dark:hover:bg-red-700",
        "dark:hover:text-red-100",
        "focus:bg-red-200 dark:focus:bg-red-700",
      ],
      green: [
        "text-green-800",
        "bg-green-100",
        "hover:bg-green-200",
        "hover:text-green-800/80",
        "dark:bg-green-900",
        "dark:text-green-200",
        "dark:hover:bg-green-700",
        "dark:hover:text-green-100",
        "focus:bg-green-200 dark:focus:bg-green-700",
      ],
      yellow: [
        "text-yellow-800",
        "bg-yellow-100",
        "hover:bg-yellow-200",
        "hover:text-yellow-800/80",
        "dark:bg-yellow-900",
        "dark:text-yellow-200",
        "dark:hover:bg-yellow-700",
        "dark:hover:text-yellow-100",
        "focus:bg-yellow-200 dark:focus:bg-yellow-700",
      ],
      indigo: [
        "text-indigo-800",
        "bg-indigo-100",
        "hover:bg-indigo-200",
        "hover:text-indigo-800/80",
        "dark:bg-indigo-900",
        "dark:text-indigo-200",
        "dark:hover:bg-indigo-700",
        "dark:hover:text-indigo-100",
        "focus:bg-indigo-200 dark:focus:bg-indigo-700",
      ],
      purple: [
        "text-purple-800",
        "bg-purple-100",
        "hover:bg-purple-200",
        "hover:text-purple-800/80",
        "dark:bg-purple-900",
        "dark:text-purple-200",
        "dark:hover:bg-purple-700",
        "dark:hover:text-purple-100",
        "focus:bg-purple-200 dark:focus:bg-purple-700",
      ],
      pink: [
        "text-pink-800",
        "bg-pink-100",
        "hover:bg-pink-200",
        "hover:text-pink-800/80",
        "dark:bg-pink-900",
        "dark:text-pink-200",
        "dark:hover:bg-pink-700",
        "dark:hover:text-pink-100",
        "focus:bg-pink-200 dark:focus:bg-pink-700",
      ],
      trans: [
        "text-gray-800",
        "bg-transparent dark:bg-transparent",
        "hover:bg-gray-200",
        "hover:text-gray-800/80",
        "dark:text-gray-200",
        "dark:hover:bg-gray-600",
        "dark:hover:text-gray-100",
        "focus:bg-gray-200 dark:focus:bg-gray-600",
      ],
    },
  },
  defaultVariants: {
    bg: "blue",
  },
});

type TFoldingItem = {
  // children
  children: React.ReactNode;
  //zoom
  isZoom?: boolean;
  // folding direction
  folding?: "horizontal" | "vertical" | undefined;
  // folding children
  items?: Array<TFoldingItem> | null;
  // path name of the url if there's one and path name in tailwind group name
  path?: string;
  // menu level
  level?: number;
  //badge
  badge?: number | string;
  // width
  width?: number;
  // autoOpen
  autoOpen?: boolean;
} & LiHTMLAttributes<HTMLLIElement> &
  VariantProps<typeof folding>;

export default function FoldingItem({
  bg,
  path,
  isZoom = false,
  autoOpen = false,
  ...props
}: TFoldingItem) {
  const [open, setOpen] = React.useState(false);
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  React.useEffect(() => {
    const details = document.querySelector(`details.${path}`);
    const handleToggle = (e: Event) => {
      e.stopPropagation();
      if ((e.target as HTMLDetailsElement).hasAttribute("open")) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    //const firstDetail = document.querySelector("[data-auto-folding='1']");
    const handleMouseOver = (e: Event) => {
      const details = (e.target as Element).closest(
        "details[data-folding=horizontal]",
      );
      if (details?.getAttribute("data-folding") === "horizontal")
        details?.setAttribute("open", "true");
    };
    const handleMouseLeave = (e: Event) => {
      if ((e.target as Element).getAttribute("data-folding") === "horizontal")
        (e.target as Element).removeAttribute("open");
    };
    const ul = document.querySelector(`[data-menu-ul=${path}]`);
    const handleMouseLeaveUl = (e: Event) => {
      const details = (e.target as Element).closest("details");
      if (details?.getAttribute("data-folding") === "horizontal")
        details?.removeAttribute("open");
    };
    const handleClick = (e: Event) => {
      const allUl = detailsRef.current?.querySelectorAll(
        "[data-menu-ul-level='true']",
      );
      let contained = false;
      allUl?.forEach((el) => {
        if (el.contains(e.target as Node)) {
          contained = true;
        }
      });
      if (!contained && !detailsRef.current?.contains(e.target as Node)) {
        detailsRef.current?.removeAttribute("open");
      }
    };
    details?.addEventListener("toggle", handleToggle);
    if (autoOpen) {
      details?.addEventListener("mouseleave", handleMouseLeave);
      detailsRef.current?.addEventListener("mouseover", handleMouseOver);
      ul?.addEventListener("mouseleave", handleMouseLeaveUl);
    }
    document.addEventListener("click", handleClick);
    return () => {
      details?.removeEventListener("toggle", handleToggle);
      if (autoOpen) {
        details?.removeEventListener("mouseleave", handleMouseLeave);
        detailsRef.current?.removeEventListener("mouseover", handleMouseOver);
        ul?.removeEventListener("mouseleave", handleMouseLeaveUl);
      }
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      {props.folding && props.items && props.items.length > 0 ? (
        <li
          {...props}
          className={twMerge(
            "block rounded-md",
            "transition-all duration-300 ease-in-out",
          )}
          style={{
            width: `${props.level === 1 ? `${props.width}px` : props.width ? `${props.width}px` : "95%"}`,
          }}
        >
          <details
            className={twMerge(
              "[&_summary::-webkit-details-marker]:hidden",
              `${path}`,
              "relative",
            )}
            ref={detailsRef}
            data-auto-folding={props.level}
            data-folding={props.folding}
          >
            <summary
              className={twMerge(
                "w-full h-12 bg-transparent flex cursor-pointer items-center justify-between text-sm font-medium rounded-lg",
                folding({ bg }),
              )}
            >
              <span
                className={twMerge(
                  "w-full block px-2 py-4 flex-1 ",
                  "inline-flex items-center gap-2",
                  `${isZoom ? "justify-center" : "justify-between"}`,
                )}
              >
                <span
                  className={twMerge(
                    "w-full text-left flex flex-row justify-start items-center gap-x-2",
                  )}
                >
                  {props.children}
                </span>
                {isZoom ? null : props.folding === "vertical" ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={twMerge(
                      "shrink-0 px-2 transition-transform duration-300",
                      `${open ? "-rotate-180 " : ""}`,
                    )}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={twMerge(
                      "shrink-0 px-2 transition-transform duration-300",
                      `${open ? "-rotate-180 text-light-primary dark:text-dark-primary" : ""}`,
                    )}
                  />
                )}
              </span>
            </summary>
            <ul
              className={twMerge(
                "space-y-2 rounded-sm flex flex-col items-end",
                `${props.folding === "vertical" ? "" : "absolute left-full top-0 bg-gray-100 dark:bg-gray-700"}`,
                props.className,
              )}
              data-menu-ul={path}
              data-menu-ul-level={true}
            >
              {props.items?.map((item, index) => (
                <Fragment key={`${path}-${index}`}>
                  <FoldingItem
                    value={item.value}
                    folding={item.folding}
                    items={item.items}
                    path={item.path}
                    width={item.width}
                    level={item.level}
                    bg={bg}
                    isZoom={false}
                  >
                    {item.children}
                  </FoldingItem>
                </Fragment>
              ))}
            </ul>
          </details>
        </li>
      ) : (
        <li
          {...props}
          className={twMerge(
            "block relative w-full h-12 text-left rounded-lg px-2 py-2 text-sm font-medium",
            "inline-flex items-center gap-2 cursor-pointer dark:border-0",
            `${props.badge ? "justify-between" : ""}`,
            folding({ bg }),
            //`${props.level === 1 ? folding({ bg }) : "text-gray-900 hover:bg-gray-200 hover:text-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 bg-gray-100 dark:bg-gray-700"}`,
            props.className,
          )}
          style={{
            width: `${props.level === 1 ? `${props.width}px` : props.width ? `${props.width}px` : "95%"}`,
          }}
        >
          <span className="text-left flex flex-row items-center gap-x-2">
            {props.children}
          </span>
          {props.badge ? (
            <span
              className={twMerge(
                "rounded-lg px-2 bg-light-error text-light-surface text-center",
                "animate-bounce absolute -right-2",
              )}
            >
              {props.badge}
            </span>
          ) : null}
        </li>
      )}
    </>
  );
}
