"use client"
//app
import React, { useId } from "react";
//hooks
import { useInput } from "./hook";

interface IInput {
  /**
   * type indicated icon and input type,
   * 'email'|'password'|'text'
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
}

function Input({ type, value, ...props }: IInput) {
  const inputId = useId();
  const { inputState, inputDispatch } = useInput(
    value as string,
    props.name,
    props.requestErr,
    props.needVerified
  );
  /**
   * oninput event update the value
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (props.handleInput) {
      props.handleInput(e.target.value);
    }
    inputDispatch({ type: "set-inputvalue", payload: e.target.value });
    inputDispatch({ type: "clear-error", payload: undefined});
  };
  /**
   * onfocus event clear the error msg
   */
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "clear-error", payload: undefined });
    inputDispatch({ type: "is-blured", payload: false })
    if (props.handleFocus) props.handleFocus();
  };
  return (
    <>
      <div className="w-full h-20 flex flex-col justify-start items-start">
        <label
          htmlFor={inputId}
          className={[
            "block mb-2 text-sm font-medium",
            inputState.error || props.pwd2Error
              ? "text-red-700 dark:text-red-500"
              : "text-gray-900 dark:text-white",
          ].join(" ")}
        >
          {props.labelText}
        </label>
        <input
          type={type}
          id={inputId}
          name={props.name}
          className={[
            "w-full border text-sm rounded-lg block p-2.5",
            inputState.error || props.pwd2Error
              ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-700 focus:border-red-500"
              : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          ].join(" ")}
          placeholder={props.labelText}
          required
          onFocus={handleFocus}
          value={value ?? inputState.inputValue}
          onInput={handleInputChange}
          onBlur={() => inputDispatch({ type: "is-blured", payload: true })}
        />
        <p className="text-red-700 text-xs italic mt-1">{inputState.error ?? props.pwd2Error}</p>
      </div>
    </>
  );
}

export default Input;
