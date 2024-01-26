import React, { HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type Clickable = {
  title: string;
};

const clickable = cva(
  [
    "border-2",
    "hover:outline",
    "hover:outline-light-primary-light-variant",
    "dark:hover:outline-dark-primary-light-variant",
    "rounded-lg inline-flex items-center justify-between",
    "text-center font-medium",
    "bg-transparent",
    "text-light-on-surface dark:text-dark-on-surface",
  ],
  {
    variants: {
      size: {
        small: ["text-sm px-1 h-8"],
        base: ["text-base px-2 h-12"],
        large: [],
      },
      drop: {
        true: ["border-light-primary dark:border-dark-primary"],
        false: ["border-gray-300 dark:border-gray-600"],
      },
    },
    defaultVariants: {},
  },
);

export type TClickable = VariantProps<typeof clickable> &
  Clickable &
  HTMLAttributes<HTMLDivElement>;

export function DefaultClickable({ size, drop, ...props }: TClickable) {
  return (
    <div
      {...props}
      data-dropdown-toggle="dropdownBgHover"
      className={twMerge(clickable({ size, drop }), props.className)}
    >
      <span
        className={[
          "block px-2 py-1 rounded-lg cursor-pointer",
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
    </div>
  );
}
