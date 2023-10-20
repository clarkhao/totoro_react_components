import React from "react";
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
export interface IInputAction {
    type: keyof TInputPayload;
    payload: TInputPayload[IInputAction["type"]];
}
declare function useInput(value: string, name: string, requestErr?: string | undefined, needVerified?: boolean): {
    inputState: TInputState;
    inputDispatch: React.Dispatch<IInputAction>;
};
export { useInput };
