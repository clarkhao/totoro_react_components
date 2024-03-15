import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clickable = cva(
  ["text-base", "appearance-none", "outline-none", "rounded-md"],
  {
    variants: {
      variant: {
        standard: [],
        outlined: [],
      },
      intent: {
        primary: [
          "border border-light-primary-light-variant dark:border-dark-primary-light-variant",
          "hover:ring-1 hover:ring-light-primary-lighter-variant dark:hover:ring-dark-primary-light-variant",
          "ring-light-primary dark:ring-dark-primary",
        ],
        secondary: [
          "border border-light-secondary-light-variant dark:border-dark-secondary-light-variant",
          "hover:ring-1 hover:ring-light-secondary-light-variant dark:hover:ring-dark-secondary-light-variant",
          "ring-light-secondary dark:ring-dark-secondary",
        ],
      },
      height: {
        xs: ["h-8 text-sm"],
        sm: ["h-10 text-base"],
        md: ["h-12 text-base"],
        lg: ["h-14 text-lg"],
      },
      drop: {
        true: ["ring-2"],
        false: [""],
      },
      disabled: {
        true: [
          "text-gray-300 border-gray-300 dark:text-gray-600 dark:border-gray-600",
        ],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: ["standard", "outlined"],
        intent: "primary",
        drop: true,
        disabled: false,
        className: ["border-light-primary dark:border-dark-primary"],
      },
      {
        variant: ["standard", "outlined"],
        intent: "secondary",
        drop: true,
        disabled: false,
        className: ["border-light-secondary dark:border-dark-secondary"],
      },
    ],
    defaultVariants: {
      drop: false,
      disabled: false,
      variant: "standard",
      intent: "primary",
    },
  },
);

export type TClickable = {
  labelText: string;
  selected: boolean;
  children: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof clickable>;

export function Clickable({
  variant,
  intent,
  drop,
  height,
  ...props
}: TClickable) {
  return (
    <div
      className={twMerge(
        clickable({ height, variant, intent, drop }),
        "w-full min-w-[200px] flex justify-center items-start relative pl-3 pr-8",
        `${variant !== "standard" ? "flex-col" : "flex-col-reverse"}`,
      )}
    >
      {props.children ?? (variant === "outlined" ? null : props.labelText)}
      {variant === "outlined" ? (
        <span
          className={twMerge(
            "text-light-on-background dark:text-dark-on-background font-normal",
            "duration-300 transition-all ease-in absolute top-0 left-3 -translate-y-1/2 bg-light-background dark:bg-dark-background",
            `${drop || props.selected ? " scale-75 px-2 left-0" : "top-1/2"}`,
          )}
        >
          {props.labelText}
        </span>
      ) : null}
      <FontAwesomeIcon
        icon={faChevronDown}
        className={twMerge(
          `transition-transform duration-300 ${
            drop ? "rotate-180 text-light-primary dark:text-dark-primary" : ""
          }`,
          "absolute right-2 top-1/2 -translate-y-1/2",
        )}
      />
    </div>
  );
}
