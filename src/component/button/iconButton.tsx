//app
import React, { ButtonHTMLAttributes } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
//component
import "./transition.css";

export type IIconButton = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * size
   */
  size: "small" | "base" | "large";
  /**
   * num?
   */
  num?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ children, ...props }: IIconButton) {
  return (
    <>
      <button
        {...props}
        className={[
          "relative w-12 h-12 rounded-full bg-transparent flex justify-center items-center hover:bg-gray-200 active:bg-gray-100",
          props.size === "small"
            ? "w-12 h-12"
            : props.size === "base"
              ? "w-14 h-14"
              : "w-20 h-20",
          "dark:hover:bg-gray-400 dark:active:bg-gray-500",
        ].join(" ")}
      >
        {children}
        {props.num ? (
          <>
            <span className="sr-only">Notifications</span>
            <SwitchTransition mode="out-in">
              <CSSTransition key={props.num} classNames="shaking" timeout={300}>
                {props.num && props.num > 0 ? (
                  <div
                    className={[
                      "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-brand-primary border-2 border-white rounded-full -top-0 -right-2 dark:border-gray-900",
                      "animate-bounce",
                    ].join(" ")}
                  >
                    {props.num}
                  </div>
                ) : null}
              </CSSTransition>
            </SwitchTransition>
          </>
        ) : null}
      </button>
    </>
  );
}
