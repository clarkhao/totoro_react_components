import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const toggle = cva("", {
  variants: {
    size: {
      sm: ["w-10 h-6 after:h-4 after:w-4"],
      md: ["w-12 h-7 after:h-5 after:w-5"],
      lg: ["w-14 h-8 after:h-6 after:w-6"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TToggle = {
  hiddenLabel: boolean;
} & VariantProps<typeof toggle>;

export function Toggle({ size, ...props }: TToggle) {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          className={twMerge(
            toggle({ size }),
            "relative bg-gray-200 dark:bg-gray-600 dark:border-gray-600",
            "rounded-full peer",
            "peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-light-primary-lighter-variant dark:peer-focus:ring-dark-primary-light-variant",
            "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-light-primary dark:peer-checked:bg-dark-primary-dark-variant",
            "after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",
          )}
        ></div>
        {props.hiddenLabel ? null : (
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        )}
      </label>
    </>
  );
}
