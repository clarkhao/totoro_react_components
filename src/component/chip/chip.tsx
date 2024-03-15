import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const chip = cva(
  [
    "text-sm",
    "cursor-pointer",
    "flex flex-row",
    "justify-center items-center",
    "text-center",
    "whitespace-pre",
    "w-fit",
    "hover: outline-none hover:ring-2 hover:ring-light-primary dark:hover:ring-dark-primary",
  ],
  {
    variants: {
      bgColor: {
        blue: [
          "text-blue-800",
          "bg-blue-100",
          "hover:bg-blue-200",
          "hover:text-blue-800/80",
          "dark:bg-blue-900",
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
      },
      btnColor: {
        blue: [
          "text-blue-400",
          "hover:bg-blue-300",
          "hover:text-blue-900",
          "dark:hover:bg-blue-800",
          "dark:hover:text-blue-300",
        ],
        dark: [
          "text-gray-400",
          "hover:bg-gray-300",
          "hover:text-gray-900",
          "dark:hover:bg-gray-700",
          "dark:hover:text-gray-300",
        ],
        red: [
          "text-red-400",
          "hover:bg-red-300",
          "hover:text-red-900",
          "dark:hover:bg-red-800",
          "dark:hover:text-red-300",
        ],
        green: [
          "text-green-400",
          "hover:bg-green-300",
          "hover:text-green-900",
          "dark:hover:bg-green-800",
          "dark:hover:text-green-300",
        ],
        yellow: [
          "text-yellow-400",
          "hover:bg-yellow-300",
          "hover:text-yellow-900",
          "dark:hover:bg-yellow-800",
          "dark:hover:text-yellow-300",
        ],
        indigo: [
          "text-indigo-400",
          "hover:bg-indigo-300",
          "hover:text-indigo-900",
          "dark:hover:bg-indigo-800",
          "dark:hover:text-indigo-300",
        ],
        purple: [
          "text-purple-400",
          "hover:bg-purple-300",
          "hover:text-purple-900",
          "dark:hover:bg-purple-800",
          "dark:hover:text-purple-300",
        ],
        pink: [
          "text-pink-400",
          "hover:bg-pink-300",
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
  selected?: boolean;
  length?: number;
  isRemoved?: boolean;
  removeHandler?: (str: string) => void;
  className?: string;
  handleClick?: () => void;
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
  length = 10,
  selected = false,
  ...props
}: ChipProps) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const content =
    props.actual.length > length
      ? `${props.actual.slice(0, length)}...`
      : props.actual;
  return (
    <span
      {...props}
      className={twMerge(
        chip({ bgColor, size }),
        "font-medium rounded",
        `${isSelected ? "ring-2 ring-light-primary dark:ring-dark-primary" : ""}`,
        props.className,
      )}
      data-badge="badge"
      onClick={(e) => {
        e.preventDefault();
        if (selected) {
          setIsSelected(!isSelected);
        }
        if (props.handleClick) {
          props.handleClick();
        }
      }}
    >
      <FontAwesomeIcon
        icon={faCheck}
        className={twMerge(
          "transition-all duration-300 ease-in-out",
          `${isSelected ? "w-4" : "w-0"}`,
        )}
      />
      {props.children}
      <span className="px-2">{content}</span>
      {isRemoved ? (
        <button
          type="button"
          className={twMerge(
            chip({ btnColor }),
            "inline-flex items-center p-1 text-smbg-transparent rounded-sm",
          )}
          data-dismiss-target="#badge-dismiss-default"
          aria-label="Remove"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (props.removeHandler) {
              props.removeHandler(content);
            }
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="w-3 h-3" />
          <span className="sr-only">Remove badge</span>
        </button>
      ) : null}
    </span>
  );
};
