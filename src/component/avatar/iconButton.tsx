//app
import React, { ButtonHTMLAttributes } from "react";
//component

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * children
   */
  children: React.ReactNode;
}

export function IconButton(props: IIconButton) {
  return (
    <>
      <button
        {...props}
        className={[
          "rounded-full bg-transparent flex justify-center items-center hover:bg-gray-200 active:bg-gray-100",
          "dark:hover:bg-gray-400 dark:active:bg-gray-400"
        ].join(" ")}
      >
        {props.children}
      </button>
    </>
  );
}
