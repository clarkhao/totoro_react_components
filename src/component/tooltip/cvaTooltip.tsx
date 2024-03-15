import React, { ButtonHTMLAttributes, FC, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const tooltip = cva(
  [
    "text-center",
    "transition-opacity duration-150",
    "flex justify-center items-center",
    "rounded-md",
    "absolute",
    "p-2 whitespace-nowrap",
    "after:content-[' '] after:absolute after:h-0 after:w-0",
  ],
  {
    variants: {
      pos: {
        left: [
          "right-[105%] bottom-1/2 translate-y-1/2",
          "after:bottom-1/2 after:left-full after:translate-y-1/2",
          "after:border-t-[5px] after:border-t-transparent after:border-l-[6px] after:border-b-[5px] after:border-b-transparent",
        ],
        right: [
          "left-[105%] bottom-1/2 translate-y-1/2",
          "after:bottom-1/2 after:right-full after:translate-y-1/2",
          "after:border-t-[5px] after:border-t-transparent after:border-r-[6px] after:border-b-[5px] after:border-b-transparent",
        ],
        top: [
          "bottom-[115%] translate-x-1/2",
          "after:top-full after:right-1/2 after:translate-x-1/2",
          "after:border-l-[5px] after:border-l-transparent after:border-t-[6px] after:border-r-[5px] after:border-r-transparent",
        ],
        bottom: [
          "top-[115%] translate-x-1/2",
          "after:bottom-full after:right-1/2 after:translate-x-1/2",
          "after:border-l-[5px] after:border-l-transparent after:border-b-[6px] after:border-r-[5px] after:border-r-transparent",
        ],
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
    compoundVariants: [
      {
        pos: ["left", "right"],
        bgColor: "blue",
        className: [
          "after:border-l-blue-900 dark:after:border-l-blue-100",
          "after:border-r-blue-900 dark:after:border-r-blue-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "dark",
        className: [
          "after:border-l-gray-900 dark:after:border-l-gray-100",
          "after:border-r-gray-900 dark:after:border-r-gray-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "red",
        className: [
          "after:border-l-red-900 dark:after:border-l-red-100",
          "after:border-r-red-900 dark:after:border-r-red-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "green",
        className: [
          "after:border-l-green-900 dark:after:border-l-green-100",
          "after:border-r-green-900 dark:after:border-r-green-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "yellow",
        className: [
          "after:border-l-yellow-900 dark:after:border-l-yellow-100",
          "after:border-r-yellow-900 dark:after:border-r-yellow-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "indigo",
        className: [
          "after:border-l-indigo-900 dark:after:border-l-indigo-100",
          "after:border-r-indigo-900 dark:after:border-r-indigo-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "purple",
        className: [
          "after:border-l-purple-900 dark:after:border-l-purple-100",
          "after:border-r-purple-900 dark:after:border-r-purple-100",
        ],
      },
      {
        pos: ["left", "right"],
        bgColor: "pink",
        className: [
          "after:border-l-pink-900 dark:after:border-l-pink-100",
          "after:border-r-pink-900 dark:after:border-r-pink-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "blue",
        className: [
          "after:border-t-blue-900 dark:after:border-t-blue-100",
          "after:border-b-blue-900 dark:after:border-b-blue-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "dark",
        className: [
          "after:border-t-gray-900 dark:after:border-t-gray-100",
          "after:border-b-gray-900 dark:after:border-b-gray-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "red",
        className: [
          "after:border-t-red-900 dark:after:border-t-red-100",
          "after:border-b-red-900 dark:after:border-b-red-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "green",
        className: [
          "after:border-t-green-900 dark:after:border-t-green-100",
          "after:border-b-green-900 dark:after:border-b-green-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "yellow",
        className: [
          "after:border-t-yellow-900 dark:after:border-t-yellow-100",
          "after:border-b-yellow-900 dark:after:border-b-yellow-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "indigo",
        className: [
          "after:border-t-indigo-900 dark:after:border-t-indigo-100",
          "after:border-b-indigo-900 dark:after:border-b-indigo-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "purple",
        className: [
          "after:border-t-purple-900 dark:after:border-t-purple-100",
          "after:border-b-purple-900 dark:after:border-b-purple-100",
        ],
      },
      {
        pos: ["top", "bottom"],
        bgColor: "pink",
        className: [
          "after:border-t-pink-900 dark:after:border-t-pink-100",
          "after:border-b-pink-900 dark:after:border-b-pink-100",
        ],
      },
    ],
    defaultVariants: {
      pos: "bottom",
      bgColor: "dark",
    },
  },
);

type TTooltip = {
  children: React.ReactNode;
  tips: FC;
  isAuto?: boolean;
} & VariantProps<typeof tooltip> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Tooltip({ pos, bgColor, isAuto = true, ...props }: TTooltip) {
  const [showTooltip, setShowTooltip] = useState(isAuto);

  return (
    <>
      <button
        {...props}
        onClick={(e) => {
          e.preventDefault();
          if (!isAuto) setShowTooltip(true);
        }}
        className="peer"
      >
        {props.children}
      </button>
      {showTooltip ? (
        <div
          className={twMerge(
            tooltip({ pos, bgColor }),
            `${isAuto ? "opacity-0 peer-hover:opacity-100 peer-focus:opacity-100" : ""}`,
            `${pos === "top" || pos === "bottom" ? "translate-x-1/2 right-1/2" : ""}`,
            props.className,
          )}
        >
          {props.tips({ setShowTooltip })}
        </div>
      ) : null}
    </>
  );
}
