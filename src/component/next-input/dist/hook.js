"use client";
import { __assign } from "tslib";
import React from "react";
import { inputCheck, getErrMsg } from "./verify";
function useInput(value, name, requestErr, needVerified) {
    var debounceTimer = React.useRef(0);
    var inputReducer = function (state, action) {
        switch (action.type) {
            case "is-blured":
                return __assign(__assign({}, state), { isBlured: action.payload });
            case "set-inputvalue":
                return __assign(__assign({}, state), { inputValue: action.payload });
            case "set-error":
                return __assign(__assign({}, state), { error: action.payload });
            case "clear-error":
                return __assign(__assign({}, state), { error: undefined });
            case "toggle-visible":
                return __assign(__assign({}, state), { visible: (!state.visible) });
            default:
                return state;
        }
    };
    var initInputState = {
        isBlured: false,
        inputValue: value !== null && value !== void 0 ? value : "",
        error: undefined,
        visible: false,
    };
    var _a = React.useReducer(inputReducer, initInputState), inputState = _a[0], inputDispatch = _a[1];
    React.useEffect(function () {
        inputDispatch({
            type: "set-error",
            payload: requestErr,
        });
    }, [requestErr]);
    React.useEffect(function () {
        var _a;
        var verifyData = function () {
            //console.log(`check value's availability: ${inputState.inputValue}`);
            var check = inputCheck(name).safeParse(inputState.inputValue);
            if (!check.success) {
                var msg = getErrMsg(check.error.message);
                inputDispatch({ type: "set-error", payload: msg });
            }
        };
        if (inputState.inputValue &&
            ((_a = inputState.inputValue) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
            needVerified) {
            clearTimeout(debounceTimer.current);
            debounceTimer.current = window.setTimeout(verifyData, 1000);
        }
        return function () { return clearTimeout(debounceTimer.current); };
    }, [inputState.inputValue, name, inputState.isBlured]);
    return { inputState: inputState, inputDispatch: inputDispatch };
}
export { useInput };
