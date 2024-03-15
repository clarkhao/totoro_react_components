import React, { ChangeEvent, SelectHTMLAttributes, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import style from "./select.module.css";

const selecting = cva(["cursor-pointer", "rounded-md"], {
  variants: {
    variant: {
      standard: [
        "w-full rounded-md",
        "bg-gray-100 dark:bg-gray-500 dark:text-dark-on-surface",
      ],
      outlined: [
        "bg-transparent placeholder-transparent",
        "text-light-on-background dark:text-dark-on-background",
        "peer",
      ],
    },
    intent: {
      primary: [
        "border border-light-primary-light-variant dark:border-dark-primary-light-variant",
        "focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary",
        "hover:ring-1 hover:ring-light-primary-lighter-variant dark:hover:ring-dark-primary-light-variant",
      ],
      secondary: [
        "border border-light-secondary-light-variant dark:border-dark-secondary-light-variant",
        "focus:ring-2 focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-light-secondary dark:focus:ring-dark-secondary",
        "hover:ring-1 hover:ring-light-secondary-light-variant dark:hover:ring-dark-secondary-light-variant",
      ],
    },
    height: {
      xs: ["h-10 text-sm"],
      sm: ["h-12"],
      md: ["h-14"],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "standard",
    height: "md",
    intent: "primary",
  },
});

type TSelect = {
  title: string;
  question?: string;
  items: Array<{ id: number; value: string }>;
} & SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof selecting>;

export function Select({ variant, intent, height, ...props }: TSelect) {
  const selectId = useId();
  const [selected, setSelected] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return (
    <div className={twMerge("w-full min-w-[200px] relative")}>
      <select
        {...props}
        id={selectId}
        name={props.name}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setActive(false);
          if (e.target.value !== "OK") setSelected(true);
          else setSelected(false);
        }}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={twMerge(
          selecting({ variant, intent, height }),
          "w-full overflow-y-hidden",
          style.scrollbar,
          `${selected ? style.selected : ""}`,
          props.className,
        )}
      >
        <option
          value={"OK"}
          className={twMerge(
            `${variant === "outlined" ? (intent === "primary" ? "dark:bg-dark-primary-light-variant dark:text-dark-on-primary-light-variant" : "dark:bg-dark-secondary-light-variant dark:text-dark-on-secondary-light-variant") : ""}`,
          )}
        >
          {active || variant === "standard" ? props.question : ""}
        </option>
        {props.items.map((el) => {
          return (
            <option
              key={`${el.value}-${el.id}`}
              value={el.value}
              className={twMerge(
                `${variant === "outlined" ? (intent === "primary" ? "dark:bg-dark-primary-light-variant dark:text-dark-on-primary-light-variant" : "dark:bg-dark-secondary-light-variant dark:text-dark-on-secondary-light-variant") : ""}`,
              )}
            >
              {el.value}
            </option>
          );
        })}
      </select>
      {variant === "outlined" ? (
        <label
          htmlFor={selectId}
          className={twMerge(
            "text-light-on-background dark:text-dark-on-background font-normal",
            "bg-light-background dark:bg-dark-background",
            "absolute cursor-text text-base font-normal duration-300 transition-all top-1/2 -translate-y-1/2 left-4 z-10 origin-[0]",
            `${height === "xs" ? "text-sm" : "text-base"}`,
            "peer-focus:top-0 peer-focus:left-[10px] peer-focus:px-1 peer-focus:text-xs",
          )}
        >
          {props.title}
        </label>
      ) : null}
    </div>
  );
}
