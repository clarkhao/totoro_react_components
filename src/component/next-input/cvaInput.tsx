import React, { InputHTMLAttributes, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import "./cva/input.css";
//hooks
import { TValue, useInput } from "./cva/hook";
import { Chip } from "../chip/chip";
import { IconState } from "../state/iconState";
import { Tooltip } from "../tooltip/cvaTooltip";
import { CompareList } from "./compare";

const input = cva(
  ["text-base", "appearance-none", "focus:ring-none", "focus:outline-none"],
  {
    variants: {
      variant: {
        standard: [],
        outlined: [],
        filled: [],
      },
      intent: {
        primary: [],
        secondary: [],
      },
      height: {
        sm: [],
        md: [],
      },
      label: {
        normal: [
          "text-light-on-background dark:text-dark-on-background font-normal",
        ],
      },
      disabled: {
        true: [
          "text-gray-300 border-gray-300 dark:text-gray-600 dark:border-gray-600",
        ],
        false: [],
      },
    },
    compoundVariants: [
      /******************************** label ***************************************/
      {
        variant: "standard",
        label: "normal",
        height: ["sm", "md"],
        className: ["text-xs pb-1 pl-0"],
      },
      {
        variant: "outlined",
        label: "normal",
        height: "sm",
        className: [
          "absolute bg-transparent bg-light-background dark:bg-dark-background cursor-text",
          "text-base font-normal duration-300 transform -translate-y-4 top-7 left-10 z-10 origin-[0]",
        ],
      },
      {
        variant: "outlined",
        label: "normal",
        height: "md",
        className: [
          "absolute bg-transparent bg-light-background dark:bg-dark-background cursor-text",
          "text-base font-normal duration-300 transform -translate-y-4 top-8 left-10 z-10 origin-[0]",
        ],
      },
      {
        variant: "filled",
        label: "normal",
        height: "sm",
        className: [
          "absolute duration-300 transform -translate-y-4 top-7 left-10 z-10 origin-[0]",
        ],
      },
      {
        variant: "filled",
        label: "normal",
        height: "md",
        className: [
          "absolute duration-300 transform -translate-y-4 top-8 left-10 z-10 origin-[0]",
        ],
      },
      /************************************ input ****************************************/
      {
        variant: "standard",
        intent: "primary",
        className: [
          "w-full h-12 rounded-md border-none focus:ring-2 shadow-inner",
          "bg-gray-100 shadow-inner shadow-gray-400 focus:ring-light-primary-lighter-variant",
          "dark:bg-gray-500 dark:text-dark-on-surface dark:focus:ring-dark-primary-dark-variant",
        ],
      },
      {
        variant: "standard",
        intent: "secondary",
        className: [
          "w-full h-12 rounded-md border-none focus:ring-2 shadow-inner",
          "bg-gray-100 shadow-inner shadow-gray-400 focus:ring-light-secondary-lighter-variant",
          "dark:bg-gray-500 dark:text-dark-on-surface dark:focus:ring-dark-secondary-darker-variant",
        ],
      },
      {},
      {
        variant: "outlined",
        intent: "primary",
        className: [
          "h-12 rounded-md bg-transparent placeholder-transparent",
          "text-light-on-background dark:text-dark-on-background",
          "border focus:border-2 focus:border-light-primary dark:focus:border-dark-primary",
          "outlined",
        ],
      },
      {
        variant: "outlined",
        intent: "secondary",
        className: [
          "h-12 rounded-md bg-transparent placeholder-transparent",
          "text-light-on-background dark:text-dark-on-background",
          "border focus:border-2 focus:border-light-secondary dark:focus:border-dark-secondary",
          "outlined",
        ],
      },
      {
        variant: "filled",
        intent: "primary",
        className: [
          "rounded-t-md h-12 pt-5",
          "border-none focus:border-none focus:outline-none focus:ring-0  placeholder-transparent ",
          "bg-gray-100 dark:bg-gray-500 dark:text-dark-on-surface",
          "filled",
        ],
      },
      {
        variant: "filled",
        intent: "secondary",
        className: [
          "rounded-t-md h-12 pt-5",
          "border-none focus:border-none focus:outline-none focus:ring-0  placeholder-transparent ",
          "bg-gray-100 dark:bg-gray-500 dark:text-dark-on-surface",
          "filled",
        ],
      },
      {
        variant: ["standard", "outlined", "filled"],
        intent: ["primary", "secondary"],
        height: "md",
        className: ["h-14"],
      },
      {
        variant: "filled",
        intent: ["primary", "secondary"],
        height: "md",
        className: ["pt-6 filled-md"],
      },
    ],
    defaultVariants: {
      height: "md",
    },
  }
);

type TInput = {
  labelText: string;
  value?: TValue;
  requestErr?: string | undefined;
  verify?: string;
  leftIcon?: React.ReactNode;
};

export type TInputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> &
  TInput;

export const Input = ({
  variant,
  intent,
  height,
  label,
  value,
  disabled,
  ...props
}: TInputProps) => {
  const inputId = useId();
  const { inputState, inputDispatch } = useInput(
    value,
    props.requestErr,
    props.verify
  );
  const inputRef = React.useRef<HTMLInputElement>(null);
  /************************************************************************/
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (props.onChange) {
      props.onChange(e);
    }
    inputDispatch({ type: "set-value", payload: e.target.value });
  };
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "set-blur", payload: false });
    if (props.onFocus) props.onFocus(e);
  };
  /**************************************************************************/
  return (
    <div
      className={twMerge(
        "w-full min-w-[396px] flex justify-start items-start relative",
        `${
          variant !== "standard"
            ? "flex-col"
            : "flex-col-reverse"
        }`
      )}
    >
      <input
        {...props}
        id={inputId}
        ref={inputRef}
        className={twMerge(
          input({ intent, variant, height, disabled }),
          "w-full peer",
          `${
            //error style
            inputState.error.length > 0
              ? "focus:ring-light-error text-light-error dark:focus:ring-dark-error dark:text-dark-error border-light-error focus:border-light-error dark:border-light-error dark:focus:border-dark-error"
              : ""
          }`,
          `${props.leftIcon ? "px-8 " : "icon"}`, //if there's a icon at left
          `${props.verify ? "pr-10" : "pr-3"}`
        )}
        placeholder={""}
        onChange={handleInputChange}
        onBlur={() => inputDispatch({ type: "set-blur", payload: true })}
        onFocus={handleInputFocus}
        value={value ?? inputState.inputValue}
        disabled={disabled}
      />
      <label
        htmlFor={inputId}
        className={twMerge(
          input({ label, variant, height, disabled }),
          `${
            //error style
            inputState.error.length > 0
              ? "text-light-error dark:text-dark-error"
              : ""
          }`,
          `${props.leftIcon ? "" : "left-3"}`
        )}
      >
        {props.labelText}
      </label>
      {props.leftIcon ? (
        <span
          className={twMerge(
            "absolute left-3 z-20 flex justify-center text-light-on-background dark:text-dark-on-background",
            `${variant !== "standard" ? "top-0 h-full" : "top-[22px]"}`,
            `${height === "md" ? "h-14" : "h-12"}`,
            input({ disabled })
          )}
          onClick={() => inputRef.current?.focus()}
        >
          {props.leftIcon}
        </span>
      ) : null}
      {props.verify ? (
        <span
          className={twMerge(
            "absolute right-0 w-10 overflow-hidden",
            `${variant !== "standard" ? "top-0 h-full" : "top-[22px]"}`,
            `${height === "md" ? "h-14" : "h-12"}`
          )}
        >
          <IconState
            width={20}
            state={inputState.result as "error" | "success" | "prev"}
            prevState={<></>}
            onClick={() => {
              if (inputState.result === "error") {
                inputDispatch({ type: "set-value", payload: "" });
              }
            }}
          />
        </span>
      ) : null}
      {variant === "filled" ? (
        <div
          className={twMerge(
            "absolute left-0 bottom-0 w-0 h-[2px] peer-focus:h-[3px] border-0 transition-all z-10",
            `${
              intent === "primary"
                ? "bg-light-primary dark:bg-dark-primary-light-variant"
                : "bg-light-secondary dark:bg-dark-secondary-light-variant"
            }`,
            `${
              inputState.error.length > 0
                ? "bg-light-error dark:bg-dark-error"
                : ""
            }`
          )}
        ></div>
      ) : null}
      <p
        className={twMerge(
          "text-light-error dark:text-dark-error text-xs italic",
          "w-full absolute top-full translate-y-1 min-w-[396px]"
        )}
      >
        {inputState.error.length > 0 ? (
          <>
            {inputState.error[0]}{" "}
            <Tooltip
              style={{ display: "inline-block" }}
              tips={() => <CompareList data={inputState.compare} />}
              pos={"right"}
              bgColor={"dark"}
              className="flex flex-col justify-center items-start"
            >
              <Chip actual={"Learn More..."} bgColor={"red"} size={"xs"} />
            </Tooltip>
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

