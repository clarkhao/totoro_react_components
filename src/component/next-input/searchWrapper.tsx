import React from "react";
import { Input, TInputProps } from "./cvaInput";
import { IconButton } from "../badge/iconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

type TSearch = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  fill: "contained" | "outlined" | "borderless";
  disabled: boolean;
} & TInputProps;

export function SearchWrapper({ handleClick, fill, ...props }: TSearch) {
  return (
    <div className="relative w-full">
      <Input
        {...props}
        type="search"
        verify={false}
        className={props.height === "xs" ? "pr-12" : "pr-14"}
        disabled={props.disabled}
      />
      <IconButton
        size={"large"}
        intent={props.intent}
        fill={fill}
        shape={"square"}
        disabled={props.disabled}
        className={twMerge(
          "absolute right-0 bottom-0 -ml-2 z-10 rounded-tr-md rounded-br-md",
          `${props.height === "md" ? "h-14 w-14" : props.height === "sm" ? "h-12 w-12" : "h-10 w-10"}`,
          "focus:ring-0",
        )}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faSearch} className="h-6" />
      </IconButton>
    </div>
  );
}
