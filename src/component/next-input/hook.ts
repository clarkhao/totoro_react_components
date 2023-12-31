"use client";
import React from "react";
import { inputCheck, getErrMsg } from "./verify";
import { ErrorContext } from "../intro/contactHook";

export type TInputState = {
  isBlured: boolean;
  inputValue: string | undefined;
  /**
   * error is the error message from validating
   */
  error: string | undefined;
  visible: boolean;
};
type TInputPayload = {
  "is-blured": boolean;
  "set-inputvalue": string | undefined;
  "set-error": string | undefined;
  "clear-error": undefined;
  "toggle-visible": boolean;
};
export type IInputAction = {
  type: keyof TInputPayload;
  payload: TInputPayload[IInputAction["type"]];
};

function useInput(
  value: string,
  name: string,
  requestErr?: string | undefined,
  needVerified?: boolean,
) {
  const debounceTimer = React.useRef<number>(0);
  const inputReducer = (state: TInputState, action: IInputAction) => {
    switch (action.type) {
      case "is-blured":
        return {
          ...state,
          isBlured: action.payload as boolean,
        };
      case "set-inputvalue":
        return {
          ...state,
          inputValue: action.payload as string | undefined,
        };
      case "set-error":
        return {
          ...state,
          error: action.payload as string | undefined,
        };
      case "clear-error":
        return {
          ...state,
          error: undefined,
        };
      case "toggle-visible":
        return {
          ...state,
          visible: !state.visible,
        };
      default:
        return state;
    }
  };
  const initInputState: TInputState = {
    isBlured: false,
    inputValue: value ?? "",
    error: undefined,
    visible: false,
  };
  const [inputState, inputDispatch] = React.useReducer(
    inputReducer,
    initInputState,
  );
  const err = React.useContext(ErrorContext);
  React.useEffect(() => {
    inputDispatch({
      type: "set-error",
      payload: requestErr,
    });
  }, [requestErr]);
  React.useEffect(() => {
    const verifyData = () => {
      //console.log(`check value's availability: ${inputState.inputValue}`);
      const check = inputCheck(name).safeParse(inputState.inputValue);
      if (!check.success) {
        const msg = getErrMsg(check.error.message);
        inputDispatch({ type: "set-error", payload: msg });
        if (name === "name") {
          err?.setErrors((prev) => {
            return {
              ...prev,
              name: {
                isErr: true,
                errMsg: msg,
              },
            };
          });
        } else if (name === "email") {
          err?.setErrors((prev) => {
            return {
              ...prev,
              email: {
                isErr: true,
                errMsg: msg,
              },
            };
          });
        }
      } else {
        if (name === "name") {
          err?.setErrors((prev) => {
            return {
              ...prev,
              name: {
                isErr: false,
                errMsg: undefined,
              },
            };
          });
        } else if (name === "email") {
          err?.setErrors((prev) => {
            return {
              ...prev,
              email: {
                isErr: false,
                errMsg: undefined,
              },
            };
          });
        }
      }
    };
    if (
      inputState.inputValue &&
      inputState.inputValue?.length > 0 &&
      needVerified
    ) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = window.setTimeout(verifyData, 1000);
    }
    return () => clearTimeout(debounceTimer.current);
  }, [inputState.inputValue, name, inputState.isBlured, needVerified, err]);
  return { inputState, inputDispatch };
}

export { useInput };
