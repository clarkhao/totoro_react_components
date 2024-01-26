import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { SwitchTransition, CSSTransition } from "react-transition-group";
//component
import "../styles/transition.css";

const badge = cva(
  ["absolute", "inline-flex", "items-center", "justify-center", "top-0"],
  {
    variants: {
      intent: {
        primary: ["bg-light-primary", "dark:bg-dark-primary-dark-variant"],
        secondary: [
          "bg-light-secondary",
          "dark:bg-dark-secondary-dark-variant",
        ],
        success: ["bg-light-success", "dark:bg-dark-success"],
        error: ["bg-light-error", "dark:bg-dark-error"],
        invalid: ["bg-gray-400", "animate-none"],
      },
      isDot: {
        true: ["rounded-full", "border-none", "right-0", "h-3", "min-w-[12px]"],
        false: [
          "px-1",
          "h-6",
          "min-w-[24px]",
          "text-xs",
          "font-bold",
          "text-white",
          "border-white border-2 dark:border-gray-900",
          "rounded-[24px]",
          "-right-2 -top-1",
          "overflow-hidden",
        ],
      },
      isAnimated: {
        true: ["animate-bounce"],
        false: ["animate-none"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      intent: "primary",
      isDot: false,
      isAnimated: false,
    },
  },
);

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IBadge {
  children: React.ReactNode;
  num: number | string;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TBadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badge> &
  IBadge;

export const Badge = ({ intent, isDot, isAnimated, ...props }: TBadgeProps) => {
  return (
    <div className="relative w-fit">
      {props.children}
      {isDot ? (
        <div
          className={twMerge(
            badge({ intent, isDot: true, isAnimated }),
            props.className,
          )}
        ></div>
      ) : props.num ||
        (typeof props.num === "number" ? props.num > 0 : true) ? (
        <div
          className={twMerge(
            badge({ intent, isDot, isAnimated }),
            props.className,
          )}
        >
          <span className="sr-only">Notifications</span>
          <SwitchTransition mode="out-in">
            <CSSTransition key={props.num} classNames="badge" timeout={150}>
              <p>
                {(typeof props.num === "number" ? props.num >= 100 : false)
                  ? "99+"
                  : props.num}
              </p>
            </CSSTransition>
          </SwitchTransition>
        </div>
      ) : null}
    </div>
  );
};
