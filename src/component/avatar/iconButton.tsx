//app
import React, { ButtonHTMLAttributes } from "react";
//component

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * size
   */
  size: "small" | "base" | "large";
}

export function IconButton(props: IIconButton) {
  return (
    <>
      <button
        {...props}
        className={[
          "w-12 h-12 rounded-full bg-transparent flex justify-center items-center hover:bg-gray-200 active:bg-gray-100",
          props.size === "small" ? "w-12 h-12" : props.size === "base" ? "w-14 h-14" : "w-20 h-20",
          "dark:hover:bg-gray-400 dark:active:bg-gray-400"
        ].join(" ")}
      >
        {props.children}
      </button>
    </>
  );
}
