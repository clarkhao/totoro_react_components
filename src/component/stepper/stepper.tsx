import { twMerge } from "tailwind-merge";
import { IconState } from "../state/iconState";
import { OlHTMLAttributes } from "react";

type TStepper = {
  step: number;
  steps: Array<{ step: string; err: Error | null }>;
  size: "sm" | "md" | "lg";
} & OlHTMLAttributes<HTMLOListElement>;

export function Stepper({ size, step, ...props }: TStepper) {
  return (
    <div className="w-full">
      <h2 className="sr-only">Steps</h2>
      <ol
        className={twMerge(
          "grid grid-cols-4 gap-4 font-medium text-gray-500 dark:text-gray-300",
          `${size === "md" ? "text-base" : size === "sm" ? "text-sm" : "text-lg"}`,
          props.className,
        )}
      >
        {props.steps.map((el, index) => {
          return (
            <li
              key={`step-${index}`}
              className={twMerge(
                "relative flex flex-col gap-2 justify-start items-center",
                "transition-colors duration-300 ease-in-out",
                `${index === step ? "text-light-primary dark:text-dark-primary" : ""}`,
              )}
            >
              <span className="hidden min-[400px]:block">{el.step}</span>
              <span
                className={twMerge(
                  `${size === "sm" ? "w-[22px] h-[22px]" : size === "md" ? "w-[26px] h-[26px]" : "w-[30px] h-[30px]"}`,
                )}
              >
                <IconState
                  width={size === "sm" ? 20 : size === "md" ? 24 : 28}
                  animateEffect="scale"
                  state={
                    index > step
                      ? "prev"
                      : index === step
                        ? el.err === null
                          ? "prev"
                          : "error"
                        : el.err === null
                          ? "success"
                          : "error"
                  }
                  prevState={
                    <span
                      className={twMerge(
                        "rounded-sm border-2 flex justify-center items-center",
                        `${size === "sm" ? "w-5 h-5" : size === "md" ? "w-6 h-6" : "w-7 h-7"}`,
                        "transition-colors duration-300 ease-in-out",
                        "bg-gray-100",
                        `${index === step ? "border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary" : "border-gray-300 dark:border-gray-500 dark:text-gray-700"}`,
                      )}
                    >
                      {index + 1}
                    </span>
                  }
                />
              </span>
              {index === props.steps.length - 1 ? null : (
                <span
                  className={twMerge(
                    "absolute w-[100%] h-1 bg-gray-300",
                    `${size === "sm" ? "bottom-2 translate-x-3" : size === "md" ? "bottom-2.5 translate-x-3.5" : "bottom-3 translate-x-4"}`,
                    " left-1/2",
                    "before:content-[''] before:absolute before:w-0 before:h-1 before:bg-light-success",
                    "before:transition-all before:duration-300 before:ease-in-out",
                    `${step > index ? "before:w-full" : ""}`,
                  )}
                ></span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
