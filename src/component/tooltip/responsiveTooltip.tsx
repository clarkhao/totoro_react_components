import React, { ButtonHTMLAttributes, FC, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const tooltip = cva(
  [
    "text-center",
    "transition-opacity duration-150",
    "flex justify-center items-center",
    "rounded-md",
    "md:absolute max-md:relative",
    "p-2 whitespace-nowrap",
  ],
  {
    variants: {
      pos: {
        left: ["md:right-[102%] md:bottom-1/2 md:translate-y-1/2"],
        right: ["md:left-[102%] md:bottom-1/2 md:translate-y-1/2"],
        top: ["md:bottom-[115%] md:translate-x-1/2"],
        bottom: ["md:top-[115%] md:translate-x-1/2"],
      },
      bgColor: {
        blue: [
          "dark:text-blue-800",
          "dark:bg-blue-100",
          "bg-blue-900",
          "text-blue-200",
        ],
        dark: [
          "dark:text-gray-800",
          "dark:bg-gray-100",
          "bg-gray-700",
          "text-gray-200",
        ],
        red: [
          "dark:text-red-800",
          "dark:bg-red-100",
          "bg-red-900",
          "text-red-200",
        ],
        green: [
          "dark:text-green-800",
          "dark:bg-green-100",
          "bg-green-900",
          "text-green-200",
        ],
        yellow: [
          "dark:text-yellow-800",
          "dark:bg-yellow-100",
          "bg-yellow-900",
          "text-yellow-200",
        ],
        indigo: [
          "dark:text-indigo-800",
          "dark:bg-indigo-100",
          "bg-indigo-900",
          "text-indigo-200",
        ],
        purple: [
          "dark:text-purple-800",
          "dark:bg-purple-100",
          "bg-purple-900",
          "text-purple-200",
        ],
        pink: [
          "dark:text-pink-800",
          "dark:bg-pink-100",
          "bg-pink-900",
          "text-pink-200",
        ],
      },
    },
  },
);
const arrow = cva(
  [
    "md:absolute h-0 w-0",
    "max-md:top-full max-md:right-1/2 max-md:border-l-[5px] max-md:border-l-transparent max-md:border-b-[6px] max-md:border-r-[5px] max-md:border-r-transparent",
  ],
  {
    variants: {
      pos: {
        left: [
          "md:bottom-1/2 md:right-full md:translate-y-1/2 md:border-t-[5px] md:border-t-transparent md:border-l-[6px] md:border-b-[5px] md:border-b-transparent",
        ],
        right: [
          "md:bottom-1/2 md:left-full md:translate-y-1/2 md:border-t-[5px] md:border-t-transparent md:border-r-[6px] md:border-b-[5px] md:border-b-transparent",
        ],
        top: [
          "md:bottom-full md:right-1/2 md:translate-x-1/2 md:border-l-[5px] md:border-l-transparent md:border-t-[6px] md:border-r-[5px] md:border-r-transparent",
        ],
        bottom: [
          "md:top-full md:right-1/2 md:translate-x-1/2 border-l-[5px] border-l-transparent border-b-[6px] border-r-[5px] border-r-transparent",
        ],
      },
      bgColor: {
        blue: [],
        dark: [],
        red: [],
        green: [],
        yellow: [],
        indigo: [],
        purple: [],
        pink: [],
      },
    },
    compoundVariants: [
      {
        pos: ["left", "right"],
        bgColor: "blue",
        className: [
          "border-l-blue-900 dark:border-l-blue-100",
          "border-r-blue-900 dark:border-r-blue-100",
          "max-md:border-t-blue-900 max-md:dark:border-t-blue-100",
          "max-md:border-b-blue-900 max-md:dark:border-b-blue-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "dark",
        className: [
          "border-l-gray-900 dark:border-l-gray-100",
          "border-r-gray-900 dark:border-r-gray-100",
          "max-md:border-t-gray-900 max-md:dark:border-t-gray-100",
          "max-md:border-b-gray-900 max-md:dark:border-b-gray-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "red",
        className: [
          "border-l-red-900 dark:border-l-red-100",
          "border-r-red-900 dark:border-r-red-100",
          "max-md:border-t-red-900 max-md:dark:border-t-red-100",
          "max-md:border-b-red-900 max-md:dark:border-b-red-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "green",
        className: [
          "border-l-green-900 dark:border-l-green-100",
          "border-r-green-900 dark:border-r-green-100",
          "max-md:border-t-green-900 max-md:dark:border-t-green-100",
          "max-md:border-b-green-900 max-md:dark:border-b-green-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "yellow",
        className: [
          "border-l-yellow-900 dark:border-l-yellow-100",
          "border-r-yellow-900 dark:border-r-yellow-100",
          "max-md:border-t-yellow-900 max-md:dark:border-t-yellow-100",
          "max-md:border-b-yellow-900 max-md:dark:border-b-yellow-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "indigo",
        className: [
          "border-l-indigo-900 dark:border-l-indigo-100",
          "border-r-indigo-900 dark:border-r-indigo-100",
          "max-md:border-t-indigo-900 max-md:dark:border-t-indigo-100",
          "max-md:border-b-indigo-900 max-md:dark:border-b-indigo-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "purple",
        className: [
          "border-l-purple-900 dark:border-l-purple-100",
          "border-r-purple-900 dark:border-r-purple-100",
          "max-md:border-t-purple-900 max-md:dark:border-t-purple-100",
          "max-md:border-b-purple-900 max-md:dark:border-b-purple-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "pink",
        className: [
          "border-l-pink-900 dark:border-l-pink-100",
          "border-r-pink-900 dark:border-r-pink-100",
          "max-md:border-t-pink-900 max-md:dark:border-t-pink-100",
          "max-md:border-b-pink-900 max-md:dark:border-b-pink-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "blue",
        className: [
          "border-t-blue-900 dark:border-t-blue-100",
          "border-b-blue-900 dark:border-b-blue-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "dark",
        className: [
          "border-t-gray-900 dark:border-t-gray-100",
          "border-b-gray-900 dark:border-b-gray-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "red",
        className: [
          "border-t-red-900 dark:border-t-red-100",
          "border-b-red-900 dark:border-b-red-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "green",
        className: [
          "border-t-green-900 dark:border-t-green-100",
          "border-b-green-900 dark:border-b-green-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "yellow",
        className: [
          "border-t-yellow-900 dark:border-t-yellow-100",
          "border-b-yellow-900 dark:border-b-yellow-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "indigo",
        className: [
          "border-t-indigo-900 dark:border-t-indigo-100",
          "border-b-indigo-900 dark:border-b-indigo-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "purple",
        className: [
          "border-t-purple-900 dark:border-t-purple-100",
          "border-b-purple-900 dark:border-b-purple-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "pink",
        className: [
          "border-t-pink-900 dark:border-t-pink-100",
          "border-b-pink-900 dark:border-b-pink-100",
        ],
      },
    ],
  },
);

type TTooltip = {
  children: React.ReactNode;
  tips: FC;
  isAuto?: boolean;
} & VariantProps<typeof tooltip> &
  VariantProps<typeof arrow> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Tooltip({
  pos,
  bgColor,
  tips,
  isAuto = true,
  ...props
}: TTooltip) {
  const [showTooltip, setShowTooltip] = useState(isAuto);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      const clientWidth = document.documentElement.clientWidth;
      const clientX = btnRef.current?.offsetLeft;
      const width = btnRef.current?.clientWidth;
      console.log(
        `start to calculate ${clientWidth} and ${width} and ${clientX}`,
      );
      if (clientWidth <= 640) {
        setWidth((width! - 4.8) / 2 + clientX!);
      } else {
        if (pos === "bottom") {
          setWidth((width! + 9.6) / 2);
        } else setWidth(0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button
        {...props}
        onClick={() => {
          if (!isAuto) setShowTooltip(true);
        }}
        className={twMerge("peer flex flex-col")}
        ref={btnRef}
      >
        {props.children}
      </button>
      {showTooltip ? (
        <span
          className={twMerge(
            arrow({ pos, bgColor }),
            `${isAuto ? "hidden peer-hover:block" : ""}`,
          )}
          style={{
            transform: `${width === 0 ? "" : `translateX(${width}px)`}`,
          }}
        ></span>
      ) : null}
      {showTooltip ? (
        <div
          className={twMerge(
            tooltip({ pos, bgColor }),
            `${isAuto ? "hidden peer-hover:block peer-focus:block" : ""}`,
            `${pos === "top" || pos === "bottom" ? "md:right-1/2" : ""}`,
            props.className,
          )}
        >
          {!isAuto ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="cursor-pointer absolute right-1 top-1"
              onClick={() => setShowTooltip(false)}
            />
          ) : null}
          {tips({})}
        </div>
      ) : null}
    </>
  );
}
