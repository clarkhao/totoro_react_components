import React, { HTMLAttributes } from "react";
import style from "./hamberger.module.css";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type THamberger = {
  /**
   * color
   */
  color: string;
  /**
   * id
   */
  id: string;
};

const hamberger = cva(
  [
    "relative",
    "cursor-pointer",
    "before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-1 before:bg-gray-700 before:duration-500 dark:before:bg-gray-200",
    "",
  ],
  {
    variants: {
      drop: {
        true: [style.active],
        false: [],
      },
      size: {
        small: ["w-12 h-12", style.small],
        base: ["w-20 h-20", style.base],
      },
    },
    defaultVariants: {
      size: "base",
      drop: false,
    },
  },
);

export type HambergerProps = VariantProps<typeof hamberger> &
  THamberger &
  HTMLAttributes<HTMLDivElement> &
  Record<string, unknown>;

export function Hamberger({ drop, size, id, ...props }: HambergerProps) {
  return (
    <>
      <article
        {...props}
        id={id}
        className={twMerge(hamberger({ drop, size }), style.hamberger)}
      >
        <span
          className={twMerge(
            "absolute w-1/2 h-1 bg-gray-800 dark:bg-gray-200 left-1/2 -translate-x-1/2 duration-500",
            `${drop ? "bg-gray-200 dark:bg-gray-700" : ""}`,
          )}
        ></span>
        <span
          className={twMerge(
            "absolute w-1/2 h-1 bg-gray-800 dark:bg-gray-200 left-1/2 -translate-x-1/2 duration-500",
            `${drop ? "bg-gray-200 dark:bg-gray-700" : ""}`,
          )}
        ></span>
      </article>
    </>
  );
}
