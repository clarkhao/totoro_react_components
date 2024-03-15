import React from "react";
import { TCompare } from "../../../utils/zod";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import "../../styles/transition.css";

const pswStepper = cva("", {
  variants: {},
});

type TPswStepper = {
  length: number;
  data: TCompare[];
} & VariantProps<typeof pswStepper>;

export function PswStepper({ length, data }: TPswStepper) {
  const filtered = data.filter((el) => el.value === true);
  const errNum = filtered.length;
  let successNum = 1;
  let undefinedNum = 0;
  if (errNum === 0) {
    undefinedNum = data.filter((el) => el.value === undefined).length;
    successNum = undefinedNum === 0 ? 3 : undefinedNum === 1 ? 2 : 1;
  }

  return (
    <div className="inline-flex flex-row justify-start gap-[2px]">
      {length > 0
        ? filtered.length > 0
          ? new Array(3).fill(0).map((el, i) => {
              return (
                <span
                  key={`progress-count-${i}`}
                  className={twMerge(
                    "h-1 inline-block rounded-md w-10",
                    `${errNum > i ? "bg-light-error dark:bg-dark-error error-glow" : "bg-gray-400 dark:bg-gray-500"}`,
                  )}
                ></span>
              );
            })
          : length < 6
            ? new Array(3).fill(0).map((el, i) => {
                return (
                  <span
                    key={`progress-count-${i}`}
                    className={twMerge(
                      "h-1 inline-block rounded-md w-10",
                      "bg-gray-400 dark:bg-gray-500",
                    )}
                  ></span>
                );
              })
            : new Array(3).fill(0).map((el, i) => {
                return (
                  <span
                    key={`progress-count-${i}`}
                    className={twMerge(
                      "h-1 inline-block rounded-md w-10",
                      `${successNum > i ? "bg-light-success dark:bg-dark-success success-glow" : "bg-orange-400 dark:bg-orange-500 warning-glow"}`,
                    )}
                  ></span>
                );
              })
        : null}
    </div>
  );
}
