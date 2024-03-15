"use client";
import React, { InputHTMLAttributes, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import style from "./cva/input.module.css";
//hooks
import { TValue, useInput } from "./cva/hook";
import { Chip } from "../chip/chip";
import { IconState } from "../state/iconState";
import { Tooltip } from "../tooltip/responsiveTooltip";
import { CompareList } from "./cva/compare";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../../store/slices/error";
import { PswStepper } from "./cva/pswStepper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store";
import { toggleType } from "../../store/slices/auth";
import { IconButton } from "../badge/iconButton";

const input = cva(
  ["text-base", "appearance-none", "focus:ring-0", "focus:outline-none"],
  {
    variants: {
      variant: {
        standard: [
          "w-full h-12 rounded-md border-none focus:ring-2 shadow-inner",
          "bg-gray-100 shadow-inner shadow-gray-400",
          "dark:bg-gray-500 dark:text-dark-on-surface",
        ],
        outlined: [
          "h-12 rounded-md bg-transparent placeholder-transparent",
          "text-light-on-background dark:text-dark-on-background",
          "border focus:border-2",
          style.outlined,
        ],
        filled: [
          "rounded-t-md h-12 pt-5",
          "border-none focus:border-none focus:outline-none focus:ring-0  placeholder-transparent ",
          "bg-gray-100 dark:bg-gray-500 dark:text-dark-on-surface",
          style.filled,
        ],
      },
      intent: {
        primary: [],
        secondary: [],
      },
      height: {
        xs: ["h-10"],
        sm: ["h-12"],
        md: ["h-14"],
      },
      disabled: {
        true: [
          "text-gray-300 border-gray-300 dark:text-gray-600 dark:border-gray-600",
        ],
        false: [],
      },
    },
    compoundVariants: [
      /************************************ input ****************************************/
      {
        variant: "standard",
        intent: "primary",
        className: [
          " focus:ring-light-primary-lighter-variant",
          " dark:focus:ring-dark-primary-dark-variant",
        ],
      },
      {
        variant: "standard",
        intent: "secondary",
        className: [
          "focus:ring-light-secondary-lighter-variant",
          "dark:focus:ring-dark-secondary-darker-variant",
        ],
      },
      {
        variant: "outlined",
        intent: "primary",
        className: [
          "focus:border-light-primary dark:focus:border-dark-primary",
        ],
      },
      {
        variant: "outlined",
        intent: "secondary",
        className: [
          "focus:border-light-secondary dark:focus:border-dark-secondary",
        ],
      },
      /********************************* height ***********************************/
      {
        variant: ["standard", "outlined"],
        intent: ["primary", "secondary"],
        height: "xs",
        className: [style.outlinedxs],
      },
      {
        variant: "filled",
        intent: ["primary", "secondary"],
        height: "md",
        className: ["pt-6", style.filledmd],
      },
    ],
    defaultVariants: {
      height: "md",
      variant: "outlined",
      intent: "primary",
      disabled: false,
    },
  },
);

type TInput = {
  labeltext: string;
  value?: TValue;
  reqerr?: string;
  verify?: boolean;
  lefticon?: React.ReactNode;
  name: string;
  handleset?: (value: string) => void;
};

export type TInputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> &
  TInput;

export const Input = ({
  variant,
  intent,
  height,
  value,
  disabled,
  verify,
  handleset,
  ...props
}: TInputProps) => {
  const inputId = useId();
  const { inputState, inputDispatch } = useInput(
    value,
    props.reqerr,
    props.name,
    verify,
  );
  const dispatch = useDispatch();
  const fields = useSelector((state: RootState) => state.auth.fields);
  const inputRef = React.useRef<HTMLInputElement>(null);
  /************************************************************************/
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (handleset) {
      handleset(e.target.value);
    }
    inputDispatch({ type: "set-value", payload: e.target.value });
  };
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "set-blur", payload: false });
    if (props.onFocus) props.onFocus(e);
  };
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "set-blur", payload: true });
    if (props.onBlur) props.onBlur(e);
  };
  /**************************************************************************/
  return (
    <div
      className={twMerge(
        "w-full min-w-[360px] flex flex-col justify-start items-start",
        `${height === "md" ? "min-h-[72px]" : height === "sm" ? "min-h-16" : "min-h-14"}`,
      )}
    >
      <div
        className={twMerge(
          "w-full min-w-[360px] flex justify-start items-start relative",
          `${variant !== "standard" ? "flex-col" : "flex-col-reverse"}`,
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
              inputState.error.length > 0 || inputState.requestErr
                ? "focus:ring-light-error dark:focus:ring-dark-error border-light-error focus:border-light-error dark:border-light-error dark:focus:border-dark-error"
                : ""
            }`,
            `${props.lefticon ? "px-8 " : style.icon}`, //if there's a icon at left
            `${verify ? "pr-10" : "pr-3"}`,
            props.className,
          )}
          placeholder={""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          value={value ?? inputState.inputValue}
          disabled={disabled}
        />
        <label
          htmlFor={inputId}
          className={twMerge(
            "text-light-on-background dark:text-dark-on-background font-normal",
            `${
              variant !== "standard"
                ? (variant === "outlined"
                    ? "bg-light-background dark:bg-dark-background"
                    : "bg-transparent"
                  ).concat(
                    " cursor-text absolute font-normal duration-300 top-1/2 -translate-y-1/2 z-10 origin-[0]",
                  )
                : "pb-1 pl-0"
            }`,
            `${height === "xs" ? "left-8 text-sm" : "left-10"}`,
            `${disabled ? "text-gray-300 border-gray-300 dark:text-gray-600 dark:border-gray-600" : ""}`,
            `${
              //error style
              inputState.error.length > 0 || inputState.requestErr
                ? "text-light-error dark:text-dark-error"
                : ""
            }`,
            `${props.lefticon ? "" : "left-3"}`,
          )}
        >
          {props.labeltext}
        </label>
        {props.lefticon ? (
          <span
            className={twMerge(
              "absolute left-3 z-20 flex justify-center text-light-on-background dark:text-dark-on-background",
              `${variant !== "standard" ? "top-1/2 -translate-y-1/2" : height === "xs" ? "top-[24px]" : "top-[28px]"}`,
              `${height === "md" ? "h-14" : height === "sm" ? "h-12" : "h-10"}`,
              `${disabled ? "text-gray-300 border-gray-300 dark:text-gray-600 dark:border-gray-600" : ""}`,
            )}
            onClick={() => inputRef.current?.focus()}
          >
            {props.lefticon}
          </span>
        ) : null}
        {inputState.inputValue ? (
          <span
            className={twMerge(
              "absolute right-0 w-10 overflow-hidden",
              `${variant !== "standard" ? "top-0 h-full" : height === "xs" ? "top-[24px]" : "top-[28px]"}`,
              `${height === "md" ? "h-14" : height === "sm" ? "h-12" : "h-10"}`,
            )}
          >
            {props.name !== "password" ? (
              <IconState
                width={20}
                state={inputState.result as "error" | "success" | "prev"}
                prevState={<></>}
                onClick={() => {
                  if (inputState.result === "error") {
                    dispatch(del(props.name ?? "name"));
                    if (handleset) handleset("");
                    inputDispatch({ type: "set-value", payload: "" });
                  }
                }}
              />
            ) : (
              <IconButton
                size={"small"}
                intent={"primary"}
                fill={"borderless"}
                shape={"circular"}
                disabled={false}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  dispatch(toggleType());
                }}
                className={twMerge(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  "cursor-pointer",
                )}
              >
                {fields["type"] === "password" ? (
                  <FontAwesomeIcon icon={faEyeSlash} className="w-4 h-auto " />
                ) : (
                  <FontAwesomeIcon icon={faEye} className="w-4 h-auto " />
                )}
              </IconButton>
            )}
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
                inputState.error.length > 0 || inputState.requestErr
                  ? "bg-light-error dark:bg-dark-error"
                  : ""
              }`,
            )}
          ></div>
        ) : null}
      </div>
      <div
        className={twMerge(
          "text-light-error dark:text-dark-error text-xs italic",
          "translate-y-1 w-fit z-20 relative",
        )}
      >
        {inputState.error.length > 0 ||
        inputState.requestErr ||
        props.name === "password" ? (
          <>
            {props.name === "password" && verify ? (
              <PswStepper
                length={inputState.inputValue?.toString().length ?? 0}
                data={inputState.compare}
              />
            ) : (
              inputState.requestErr ?? inputState.error[0]
            )}{" "}
            {inputState.error.length > 1 ||
            (inputState.compare.some(
              (el) => el.value === true || el.value === undefined,
            ) &&
              props.name === "password") ? (
              <Tooltip
                style={{ display: "inline-block" }}
                tips={() => <CompareList data={inputState.compare} />}
                pos={"right"}
                bgColor={"dark"}
                isAuto
                className="z-20"
              >
                {inputState.compare.length > 0 && !inputState.requestErr ? (
                  <Chip
                    actual={"Learn More..."}
                    bgColor={"red"}
                    size={"xs"}
                    className="peer text-xs"
                  />
                ) : null}
              </Tooltip>
            ) : null}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
