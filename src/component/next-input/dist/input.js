"use client";
import { __rest } from "tslib";
//app
import React, { useId } from "react";
import InputIcon from "./icons";
//hooks
import { useInput } from "./hook";
;
export function NextInput(_a) {
    var _b, _c;
    var value = _a.value, props = __rest(_a, ["value"]);
    var inputId = useId();
    var _d = useInput(value, props.name, props.requestErr, props.needVerified), inputState = _d.inputState, inputDispatch = _d.inputDispatch;
    var _e = React.useState(props.type || "password"), type = _e[0], setType = _e[1];
    //console.log(inputState);
    /**
     * oninput event update the value
     */
    var handleInputChange = function (e) {
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
    var handleFocus = function (e) {
        e.preventDefault();
        inputDispatch({ type: "clear-error", payload: undefined });
        inputDispatch({ type: "is-blured", payload: false });
        if (props.handleFocus)
            props.handleFocus();
    };
    var handleEye = function () {
        inputDispatch({ type: "toggle-visible", payload: true });
        setType(type === "password" ? "text" : "password");
    };
    return (React.createElement("div", { className: "w-full h-16 flex flex-col justify-start items-start" },
        React.createElement("label", { htmlFor: inputId, className: [
                "w-full relative block rounded-md border shadow-sm focus-within:ring-1",
                inputState.error || props.pwd2Error
                    ? "text-red-700 dark:text-red-500 border-red-500 focus-within:ring-red-700 focus-within:border-red-500"
                    : "text-gray-900 dark:text-white border-gray-200 focus-within:border-blue-600 focus-within:ring-blue-600",
            ].join(" ") },
            React.createElement("input", { type: type, id: inputId, name: props.name, className: [
                    "peer w-full h-10 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 pl-9",
                    type === "password" ? "" : "",
                ].join(" "), placeholder: props.labelText, value: value !== null && value !== void 0 ? value : inputState.inputValue, onInput: handleInputChange, onBlur: function () { return inputDispatch({ type: "is-blured", payload: true }); }, onFocus: handleFocus }),
            React.createElement("span", { className: [
                    "pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs bg-white dark:bg-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:pl-6 peer-focus:top-0 peer-focus:text-xs peer-focus:pl-0.5",
                    inputState.error || props.pwd2Error
                        ? ""
                        : "text-gray-700 dark:placeholder-gray-400 dark:text-white",
                ].join(" ") }, (_b = props.labelText) !== null && _b !== void 0 ? _b : "Username"),
            React.createElement("span", { className: "absolute left-2.5 top-1/2 -translate-y-1/2" },
                React.createElement(InputIcon, { type: props.name === "password" ? "password" : type })),
            React.createElement("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2", onClick: handleEye }, type === "password" ||
                (type === "text" && props.name === "password") ? (React.createElement(InputIcon, { type: inputState.visible ? "pwdInvisible" : "pwdVisbile" })) : null)),
        React.createElement("p", { className: "text-red-700 text-xs italic" }, (_c = inputState.error) !== null && _c !== void 0 ? _c : props.pwd2Error)));
}
