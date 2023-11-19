"use client";
//app
import React, { useId, InputHTMLAttributes } from "react";
import InputIcon from "./icons";
//hooks
import { useInput } from "./hook";
//style
import "./inputField.css";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * variant
   */
  variant: "filled" | "outlined";
  /**
   * type indicated icon and input type,
   * 'email'|'password'|'text'|'search'
   */
  type: string;
  /**
   * optional text used in label
   */
  labelText?: string;
  /**
   * value
   */
  value?: string;
  /**
   * input name prop
   */
  name: string;
  /**
   * handleChange used for state bind
   */
  handleInput?: (value: string) => void;
  /**
   * errMsg indicate error returned from request result
   */
  requestErr?: string | undefined;
  /**
   * handleFocus clear errMsg from parent
   */
  handleFocus?: () => void;
  /**
   * pwd2 error
   */
  pwd2Error?: string;
  /**
   * needVerified
   */
  needVerified?: boolean;
  /**
   * bgColor
   */
  bgColor?: string;
  /**
   * isLeftIcon?
   */
  isLeftIcon?: boolean;
}

export function InputField({ variant, value, ...props }: IInput) {
  const inputId = useId();
  const { inputState, inputDispatch } = useInput(
    value as string,
    props.name,
    props.requestErr,
    props.needVerified
  );
  const [type, setType] = React.useState<string>(props.type || "password");
  /**
   * oninput event update the value
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (props.handleInput) {
      props.handleInput(e.target.value);
    }
    inputDispatch({ type: "set-inputvalue", payload: e.target.value });
    inputDispatch({ type: "clear-error", payload: undefined });
  };
  /**
   * onfocus event clear the error msg
   */
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "clear-error", payload: undefined });
    inputDispatch({ type: "is-blured", payload: false });
    if (props.handleFocus) props.handleFocus();
  };
  const handleEye = () => {
    inputDispatch({ type: "toggle-visible", payload: true });
    setType(type === "password" ? "text" : "password");
  };
  return (
    <div className="w-full h-16 flex flex-col justify-start items-start relative">
      <div className="w-full relative z-0">
        {variant === "filled" ? (
          <>
            <input
              type={type}
              id={inputId}
              name={props.name}
              className={[
                "block rounded-t-lg pb-2.5 pt-5 w-full text-sm bg-gray-50 dark:bg-gray-700 border-0 appearance-none focus:outline-none focus:ring-0 peer",
                props.isLeftIcon || type === "search" ? "pl-9" : "pl-2.5",
                "inputFilled",
                inputState.error || props.pwd2Error
                  ? "border-ele-error dark:border-ele-error text-ele-error"
                  : "text-gray-900  border-gray-300 dark:text-white dark:border-gray-600",
                type === "password" ? "px-9" : "px-2.5",
              ].join(" ")}
              placeholder=" "
              value={value ?? inputState.inputValue}
              onInput={handleInputChange}
              onBlur={() => inputDispatch({ type: "is-blured", payload: true })}
              onFocus={handleFocus}
            />
            <label
              htmlFor={inputId}
              className={[
                "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                props.isLeftIcon || type === "search" ? "left-9" : "left-2.5",
                inputState.error || props.pwd2Error
                  ? "text-ele-error dark:text-ele-error"
                  : "text-gray-500 dark:text-gray-400 peer-focus:text-brand-secondary-light peer-focus:dark:text-blue-500",
              ].join(" ")}
            >
              {props.labelText}
            </label>
            <div
              className={[
                "absolute left-0 bottom-0 w-0 h-[1px] border-t-2 transition-all z-10",
                inputState.error || props.pwd2Error
                  ? "border-ele-error dark:border-ele-error text-ele-error"
                  : "border-[#45f3ff] dark:border-blue-500",
              ].join(" ")}
            ></div>
            {props.isLeftIcon || type === "search" ? (
              <span
                className={[
                  "absolute left-2.5 top-1/2 -translate-y-1/2 peer-focus:top-[30px] transition-all dark:text-white",
                  inputState.error || props.pwd2Error
                    ? "text-ele-error dark:text-ele-error"
                    : "",
                ].join(" ")}
              >
                <InputIcon
                  type={props.name === "password" ? "password" : type}
                />
              </span>
            ) : null}
            <span
              className="absolute right-2.5 top-1/2 -translate-y-1/2 peer-focus:top-[30px] dark:text-white"
              onClick={handleEye}
            >
              {type === "password" ||
              (type === "text" && props.name === "password") ? (
                <InputIcon
                  type={inputState.visible ? "pwdInvisible" : "pwdVisbile"}
                />
              ) : null}
            </span>
          </>
        ) : (
          <>
            <input
              type={type}
              id={inputId}
              name={props.name}
              className={[
                "block pb-[13px] pt-[13px] w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 peer",
                props.isLeftIcon || type === "search" ? "pl-9" : "pl-2.5",
                "inputOutlined",
                inputState.error || props.pwd2Error
                  ? "border-ele-error dark:border-ele-error text-ele-error focus:border-ele-error dark:text-ele-error"
                  : "text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-brand-secondary-light",
                  props.name === "password" ? "px-9" : "px-2.5",
              ].join(" ")}
              placeholder=" "
              value={value ?? inputState.inputValue}
              onChange={handleInputChange}
              onBlur={() => inputDispatch({ type: "is-blured", payload: true })}
              onFocus={handleFocus}
            />
            <label
              htmlFor={inputId}
              className={[
                "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4",
                props.isLeftIcon || type === "search" ? "left-7" : "left-1",
                inputState.error || props.pwd2Error
                  ? "text-ele-error dark:text-ele-error"
                  : "text-gray-500 dark:text-gray-400 peer-focus:text-brand-secondary-light peer-focus:dark:text-blue-500",
              ].join(" ")}
            >
              {props.labelText}
            </label>
            {props.isLeftIcon || type === "search" ? (
              <span
                className={[
                  "absolute left-2.5 top-1/2 -translate-y-1/2 transition-all dark:text-white",
                  inputState.error || props.pwd2Error
                    ? "text-ele-error dark:text-ele-error"
                    : "",
                ].join(" ")}
              >
                <InputIcon
                  type={props.name === "password" ? "password" : type}
                />
              </span>
            ) : null}
            <span
              className="absolute right-2.5 top-1/2 -translate-y-1/2 dark:text-white"
              onClick={handleEye}
            >
              {type === "password" ||
              (type === "text" && props.name === "password") ? (
                <InputIcon
                  type={inputState.visible ? "pwdInvisible" : "pwdVisbile"}
                />
              ) : null}
            </span>
          </>
        )}
      </div>
      <p className="text-ele-error text-xs italic">
        {inputState.error ?? props.pwd2Error}
      </p>
    </div>
  );
}
