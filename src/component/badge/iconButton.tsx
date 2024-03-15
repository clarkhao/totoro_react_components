import React, { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const iconBtn = cva(
  [
    "flex",
    "justify-center",
    "items-center",
    "focus:outline-none",
    "relative overflow-hidden",
  ],
  {
    variants: {
      intent: {
        primary: ["ring-light-primary-light-variant/70"],
        secondary: ["ring-light-secondary-light-variant/70"],
      },
      fill: {
        outlined: ["border-2", "active:border-2", "active:ring-0"],
        contained: [
          "text-light-on-primary dark:text-dark-on-surface",
          "active:bg-light-on-primary",
        ],
        borderless: [
          "hover:bg-gray-200 dark:hover:bg-gray-500 dark:text-dark-on-surface",
          "active:bg-gray-300 dark:active:bg-gray-600",
        ],
      },
      size: {
        small: ["h-8 w-8", "text-xs", "font-light", "focus:ring-1"],
        base: ["h-10 w-10", "text-sm", "font-light", "focus:ring-2"],
        large: ["h-12 w-12", "text-md", "font-medium", "focus:ring-4"],
      },
      shape: {
        circular: ["rounded-full"],
        square: ["rounded-sm"],
      },
      disabled: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        fill: "contained",
        disabled: false,
        className: [
          "bg-light-primary hover:bg-light-primary-light-variant active:bg-light-primary-dark-variant",
          "dark:bg-dark-primary-dark-variant dark:hover:bg-dark-primary dark:active:bg-dark-primary-darker-variant",
        ],
      },
      {
        intent: "primary",
        fill: "contained",
        disabled: true,
        className: [
          "disabled:bg-light-primary-lighter-variant",
          "dark:disabled:bg-dark-primary-darker-variant/50 dark:disabled:text-gray-500",
        ],
      },
      {
        intent: "primary",
        fill: "outlined",
        disabled: false,
        className: [
          "text-light-on-surface border-light-primary bg-transparent hover:bg-light-primary hover:text-light-on-primary",
          "dark:text-dark-on-surface dark:border-dark-primary dark:hover:bg-dark-primary-dark-variant dark:hover:border-dark-primary-dark-variant dark:hover:text-dark-on-surface dark:active:border-dark-primary-darker-variant",
        ],
      },
      {
        intent: "primary",
        fill: "outlined",
        disabled: true,
        className: [
          "disabled:border-light-primary-lighter-variant disabled:text-light-primary-lighter-variant disabled:border",
          "dark:disabled:border-dark-primary-darker-variant/50 dark:disabled:text-gray-500",
        ],
      },
      {
        intent: "secondary",
        fill: "contained",
        disabled: false,
        className: [
          "bg-light-secondary hover:bg-light-secondary-light-variant active:bg-light-secondary-dark-variant",
          "dark:bg-dark-secondary-dark-variant dark:hover:bg-dark-secondary dark:active:bg-dark-secondary-darker-variant",
        ],
      },
      {
        intent: "secondary",
        fill: "contained",
        disabled: true,
        className: [
          "disabled:bg-light-secondary-lighter-variant",
          "dark:disabled:bg-dark-secondary-darker-variant/50 dark:disabled:text-gray-500",
        ],
      },
      {
        intent: "secondary",
        fill: "outlined",
        disabled: false,
        className: [
          "text-light-on-surface border-light-secondary bg-transparent hover:bg-light-secondary hover:text-light-on-secondary",
          "dark:text-dark-on-surface dark:border-dark-secondary dark:hover:bg-dark-secondary-dark-variant dark:hover:border-dark-secondary-dark-variant dark:hover:text-dark-on-surface dark:active:border-dark-secondary-darker-variant",
        ],
      },
      {
        intent: "secondary",
        fill: "outlined",
        disabled: true,
        className: [
          "disabled:border-light-secondary-lighter-variant disabled:text-light-secondary-lighter-variant disabled:border",
          "dark:disabled:border-dark-secondary-darker-variant/50 dark:disabled:text-gray-500",
        ],
      },
      {
        fill: "borderless",
        disabled: true,
        className: [
          "disabled:text-gray-300 disabled:bg-gray-100",
          "dark:disabled:text-gray-400 dark:disabled:bg-gray-500",
        ],
      },
    ],
    defaultVariants: {
      intent: "primary",
      fill: "contained",
      size: "base",
      shape: "circular",
      disabled: false,
    },
  },
);

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IIconButton {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IIconBtnProps = VariantProps<typeof iconBtn> &
  IIconButton &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({
  intent,
  fill,
  size,
  shape,
  disabled,
  ...props
}: IIconBtnProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        iconBtn({ intent, fill, size, shape, disabled }),
        props.className,
      )}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};
