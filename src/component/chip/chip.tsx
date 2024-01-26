import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const chip = cva(
  [
    "text-sm",
    "cursor-pointer",
    "flex",
    "flex-row",
    "justify-content",
    "text-center",
    "whitespace-pre",
    "w-fit",
  ],
  {
    variants: {
      bgColor: {
        blue: [
          "text-blue-800",
          "bg-blue-100",
          "hover:bg-blue-200/80",
          "hover:text-blue-800/80",
          "dark:bg-blue-900",
          "dark:text-blue-200",
          "dark:hover:bg-blue-900/80",
          "dark:hover:text-blue-200/80",
        ],
        dark: [
          "text-gray-800",
          "bg-gray-100",
          "hover:bg-gray-200/80",
          "hover:text-gray-800/80",
          "dark:bg-gray-700",
          "dark:text-gray-200",
          "dark:hover:bg-gray-700/80",
          "dark:hover:text-gray-200/80",
        ],
        red: [
          "text-red-800",
          "bg-red-100",
          "hover:bg-red-200/80",
          "hover:text-red-800/80",
          "dark:bg-red-900",
          "dark:text-red-200",
          "dark:hover:bg-red-900/80",
          "dark:hover:text-red-200/80",
        ],
        green: [
          "text-green-800",
          "bg-green-100",
          "hover:bg-green-200/80",
          "hover:text-green-800/80",
          "dark:bg-green-900",
          "dark:text-green-200",
          "dark:hover:bg-green-900/80",
          "dark:hover:text-green-200/80",
        ],
        yellow: [
          "text-yellow-800",
          "bg-yellow-100",
          "hover:bg-yellow-200/80",
          "hover:text-yellow-800/80",
          "dark:bg-yellow-900",
          "dark:text-yellow-200",
          "dark:hover:bg-yellow-900/80",
          "dark:hover:text-yellow-200/80",
        ],
        indigo: [
          "text-indigo-800",
          "bg-indigo-100",
          "hover:bg-indigo-200/80",
          "hover:text-indigo-800/80",
          "dark:bg-indigo-900",
          "dark:text-indigo-200",
          "dark:hover:bg-indigo-900/80",
          "dark:hover:text-indigo-200/80",
        ],
        purple: [
          "text-purple-800",
          "bg-purple-100",
          "hover:bg-purple-200/80",
          "hover:text-purple-800/80",
          "dark:bg-purple-900",
          "dark:text-purple-200",
          "dark:hover:bg-purple-900/80",
          "dark:hover:text-purple-200/80",
        ],
        pink: [
          "text-pink-800",
          "bg-pink-100",
          "hover:bg-pink-200/80",
          "hover:text-pink-800/80",
          "dark:bg-pink-900",
          "dark:text-pink-200",
          "dark:hover:bg-pink-900/80",
          "dark:hover:text-pink-200/80",
        ],
      },
      btnColor: {
        blue: [
          "text-blue-400",
          "hover:bg-blue-200",
          "hover:text-blue-900",
          "dark:hover:bg-blue-800",
          "dark:hover:text-blue-300",
        ],
        dark: [
          "text-gray-400",
          "hover:bg-gray-200",
          "hover:text-gray-900",
          "dark:hover:bg-gray-600",
          "dark:hover:text-gray-300",
        ],
        red: [
          "text-red-400",
          "hover:bg-red-200",
          "hover:text-red-900",
          "dark:hover:bg-red-800",
          "dark:hover:text-red-300",
        ],
        green: [
          "text-green-400",
          "hover:bg-green-200",
          "hover:text-green-900",
          "dark:hover:bg-green-800",
          "dark:hover:text-green-300",
        ],
        yellow: [
          "text-yellow-400",
          "hover:bg-yellow-200",
          "hover:text-yellow-900",
          "dark:hover:bg-yellow-800",
          "dark:hover:text-yellow-300",
        ],
        indigo: [
          "text-indigo-400",
          "hover:bg-indigo-200",
          "hover:text-indigo-900",
          "dark:hover:bg-indigo-800",
          "dark:hover:text-indigo-300",
        ],
        purple: [
          "text-purple-400",
          "hover:bg-purple-200",
          "hover:text-purple-900",
          "dark:hover:bg-purple-800",
          "dark:hover:text-purple-300",
        ],
        pink: [
          "text-pink-400",
          "hover:bg-pink-200",
          "hover:text-pink-900",
          "dark:hover:bg-pink-800",
          "dark:hover:text-pink-300",
        ],
      },
      size: {
        xs: ["px-1", "py-0"],
        sm: ["px-2", "py-1"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      bgColor: undefined,
      btnColor: undefined,
      size: "sm",
    },
  },
);

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IChip {
  actual: string;
  isRemoved?: boolean;
  removeHandler?: (str: string) => void;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chip>,
    IChip {}

export const Chip = ({
  bgColor,
  btnColor,
  isRemoved,
  size,
  ...props
}: ChipProps) => {
  const content =
    props.actual.length > 10 ? `${props.actual.slice(0, 10)}...` : props.actual;
  return !isRemoved ? (
    <span
      {...props}
      className={twMerge(
        chip({ bgColor, size }),
        "font-medium rounded",
        props.className,
      )}
      data-badge="badge"
    >
      {props.children}
      {content}
    </span>
  ) : (
    <span
      {...props}
      id="badge-dismiss-default"
      className={twMerge(
        chip({ bgColor, size }),
        "inline-flex items-center font-medium rounded",
        props.className,
      )}
      data-badge="badge"
    >
      {props.children}
      {content}
      <button
        type="button"
        className={twMerge(
          chip({ btnColor }),
          "inline-flex items-center p-1 ml-2 text-smbg-transparent rounded-sm",
        )}
        data-dismiss-target="#badge-dismiss-default"
        aria-label="Remove"
        onClick={() => {
          if (props.removeHandler) {
            props.removeHandler(content);
          }
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
        <span className="sr-only">Remove badge</span>
      </button>
    </span>
  );
};
