import React, { HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type Clickable = {
  title: string;
  bottomHighlight?: boolean;
};

const clickable = cva(
  [
    "hover:border-0 hover:ring-0 hover:outline-none",
    "hover:outline-none rounded-none",
    "hover:ring-light-primary-light-variant",
    "dark:hover:ring-dark-primary-light-variant",
    "inline-flex items-center justify-between",
    "text-center font-medium",
    "bg-transparent",
    "text-light-on-surface dark:text-dark-on-surface",
    "cursor-pointer relative",
  ],
  {
    variants: {
      size: {
        small: ["text-sm px-1 h-8"],
        base: ["text-base px-2 h-12"],
        large: ["text-base px-3 h-14"],
      },
      drop: {
        true: ["border-light-primary dark:border-dark-primary"],
        false: ["border-gray-300 dark:border-gray-600"],
      },
      variant: {
        standard: [],
        outlined: [],
      },
    },
    defaultVariants: {},
  },
);

export type TClickable = VariantProps<typeof clickable> &
  Clickable &
  HTMLAttributes<HTMLDivElement>;

export function DefaultClickable({
  size,
  drop = false,
  variant,
  bottomHighlight = false,
  ...props
}: TClickable) {
  return (
    <div
      {...props}
      data-dropdown-toggle="dropdownBgHover"
      className={twMerge(clickable({ size, drop, variant }), props.className)}
    >
      <span
        className={[
          "block px-2 py-1 rounded-lg",
          "inline-flex items-center gap-2",
        ].join(" ")}
      >
        {props.title}
      </span>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`transition-transform duration-300 ${
          drop
            ? "transform rotate-180 text-light-primary dark:text-dark-primary"
            : ""
        }`}
      />
      {bottomHighlight ? (
        <span
          className={`h-1 w-0 bg-light-primary dark:bg-dark-primary absolute bottom-0 ${drop ? "w-full -translate-x-1.5" : ""}`}
        ></span>
      ) : null}
    </div>
  );
}
