"use client";
import React from "react";
import { ErrorContext } from "../../error/errorContext";
import { TCompare, Validate } from "../../../utils/zod";
import json from "../../../../data/zod.json";

export type TValue = string | number | readonly string[] | undefined;
export type TInputState = {
  isBlured: boolean;
  inputValue: TValue;
  /**
   * error is the error message from validating
   */
  error: Array<string>;
  visible: boolean;
  result: string;
  compare: Array<TCompare>;
};
type TInputPayload = {
  "reset": undefined;
  "set-blur": boolean;
  "set-value": string | undefined;
  "set-error": { err: Array<string>; compare: Array<TCompare> };
  "clear-error": undefined;
  "toggle-visible": boolean;
  "set-result": string;
};
export type IInputAction = {
  type: keyof TInputPayload;
  payload: TInputPayload[IInputAction["type"]];
};

function useInput(
  value: TValue,
  requestErr?: string | undefined,
  validateName?: string,
) {
  const debounceTimer = React.useRef<number>(0);
  const initInputState: TInputState = {
    isBlured: false,
    inputValue: value ?? undefined,
    error: [],
    visible: false,
    result: "prev",
    compare: [],
  };
  const inputReducer = (state: TInputState, action: IInputAction) => {
    switch (action.type) {
      case "reset": 
        return initInputState;
      case "set-blur":
        return {
          ...state,
          isBlured: action.payload as boolean,
        };
      case "set-value":
        return {
          ...state,
          inputValue: action.payload as TValue,
        };
      case "set-error":
        return {
          ...state,
          error: (action.payload as TInputPayload["set-error"]).err,
          result: "error",
          compare: (action.payload as TInputPayload["set-error"]).compare,
        };
      case "clear-error":
        return {
          ...state,
          error: [],
          result: "success",
        };
      case "toggle-visible":
        return {
          ...state,
          visible: !state.visible,
        };
      case "set-result":
        return {
          ...state,
          result: action.payload as string,
          error: [],
        };
      default:
        return state;
    }
  };
  
  const [inputState, inputDispatch] = React.useReducer(
    inputReducer,
    initInputState,
  );
  const err = React.useContext(ErrorContext);
  React.useEffect(() => {
    if (requestErr) {
      inputDispatch({
        type: "set-error",
        payload: { err: [requestErr], compare: [] },
      });
    }
  }, [requestErr]);
  React.useEffect(() => {
    if (validateName) {
      const verifyData = () => {
        const data = JSON.stringify(json);
        const key = JSON.parse(data)[`${validateName}`];
        const validate = new Validate(key, validateName);
        const errors = validate.verify(inputState.inputValue);
        if (errors !== null) {
          const msg = errors?.map((el) => {
            err?.setErrors((prev) => {
              return {
                ...prev,
                [`${validateName}`]: {
                  isErr: true,
                  errMsg: el.message,
                },
              };
            });
            return el.message;
          });
          inputDispatch({
            type: "set-error",
            payload: { err: msg, compare: validate.compare(errors) },
          });
        } else {
          err?.setErrors((prev) => {
            return {
              ...prev,
              [`${validateName}`]: {
                isErr: false,
                errMsg: "",
              },
            };
          });
          inputDispatch({
            type: "clear-error",
            payload: undefined,
          });
        }
      };
      if (
        inputState.inputValue &&
        (Array.isArray(inputState.inputValue)
          ? inputState.inputValue.length > 0
          : true) &&
        validateName
      ) {
        clearTimeout(debounceTimer.current);
        debounceTimer.current = window.setTimeout(verifyData, 500);
      } else {
        inputDispatch({
          type: "reset",
          payload: undefined,
        });
      }
    }
    return () => clearTimeout(debounceTimer.current);
  }, [inputState.inputValue, inputState.isBlured, validateName, err]);
  return { inputState, inputDispatch };
}

export { useInput };
