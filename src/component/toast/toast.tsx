"use client";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";
import { IconButton } from "../badge/iconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faInfoCircle,
  faPaperPlane,
  faTriangleExclamation,
  faXmark,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { Typing } from "../group-text-animation/typing";
import { TypingContext, useTyping } from "../group-text-animation/typingHook";
import style from "./toast.module.css";

const toast = cva(
  [
    "flex items-center gap-x-1 sm:gap-x-2 max-w-sm w-[384px] p-1 sm:p-2 rounded-lg relative",
  ],
  {
    variants: {
      variant: {
        default: [
          "shadow-md ",
          "text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-600",
        ],
        colored: [],
      },
      colors: {
        info: [],
        success: [],
        error: [],
        warning: [],
        msg: [],
      },
    },
    compoundVariants: [
      {
        variant: "colored",
        colors: ["info", "msg"],
        className: [
          "text-blue-800",
          "bg-blue-100",
          "hover:bg-blue-200",
          "hover:text-blue-800/80",
          "dark:bg-blue-900",
          "dark:text-blue-200",
          "dark:hover:bg-blue-700",
          "dark:hover:text-blue-100",
        ],
      },
      {
        variant: "colored",
        colors: "success",
        className: [
          "text-green-800",
          "bg-green-100",
          "hover:bg-green-200",
          "hover:text-green-800/80",
          "dark:bg-green-900",
          "dark:text-green-200",
          "dark:hover:bg-green-700",
          "dark:hover:text-green-100",
        ],
      },
      {
        variant: "colored",
        colors: "error",
        className: [
          "text-red-800",
          "bg-red-100",
          "hover:bg-red-200",
          "hover:text-red-800/80",
          "dark:bg-red-900",
          "dark:text-red-200",
          "dark:hover:bg-red-700",
          "dark:hover:text-red-100",
        ],
      },
      {
        variant: "colored",
        colors: "warning",
        className: [
          "text-yellow-800",
          "bg-yellow-100",
          "hover:bg-yellow-200",
          "hover:text-yellow-800/80",
          "dark:bg-yellow-900",
          "dark:text-yellow-200",
          "dark:hover:bg-yellow-700",
          "dark:hover:text-yellow-100",
        ],
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  },
);
const xbtn = cva("focus:ring-0", {
  variants: {
    variant: {
      default: ["dark:active:bg-gray-700"],
      colored: [],
    },
    colors: {
      info: [],
      success: [],
      error: [],
      warning: [],
      msg: [],
    },
  },
  compoundVariants: [
    {
      variant: "colored",
      colors: ["info", "msg"],
      className: [
        "text-blue-600",
        "hover:bg-blue-300",
        "hover:text-blue-900",
        "dark:hover:bg-blue-800",
        "dark:hover:text-blue-300",
        "active:bg-blue-100",
        "dark:active:bg-blue-600",
      ],
    },
    {
      variant: "colored",
      colors: "success",
      className: [
        "text-green-600",
        "hover:bg-green-300",
        "hover:text-green-900",
        "dark:hover:bg-green-800",
        "dark:hover:text-green-300",
        "active:bg-green-100",
        "dark:active:bg-green-600",
      ],
    },
    {
      variant: "colored",
      colors: "error",
      className: [
        "text-red-600",
        "hover:bg-red-300",
        "hover:text-red-900",
        "dark:hover:bg-red-800",
        "dark:hover:text-red-300",
        "active:bg-red-100",
        "dark:active:bg-red-600",
      ],
    },
    {
      variant: "colored",
      colors: "warning",
      className: [
        "text-yellow-600",
        "hover:bg-yellow-300",
        "hover:text-yellow-900",
        "dark:hover:bg-yellow-800",
        "dark:hover:text-yellow-300",
        "active:bg-yellow-100",
        "dark:active:bg-yellow-600",
      ],
    },
  ],
  defaultVariants: {
    variant: "default",
    colors: "info",
  },
});
const progress = cva("absolute h-0.5 sm:h-1 bottom-0 left-0", {
  variants: {
    colors: {
      info: ["bg-blue-500 dark:bg-blue-300"],
      success: ["bg-green-500 dark:bg-green-300"],
      error: ["bg-red-500 dark:bg-red-300"],
      warning: ["bg-yellow-500 dark:bg-yellow-300"],
      msg: ["bg-blue-500 dark:bg-blue-300"],
    },
  },
});

type TToast = {
  msg: string;
  timed: "sm" | "md" | "lg" | null;
  display: "standard" | "writer";
  handleDel: () => void;
} & VariantProps<typeof toast>;
export type Ref = HTMLDivElement;

export const Toast = forwardRef<Ref, TToast>(function Toast(
  { variant, colors, display, ...props }: TToast,
  ref,
) {
  const { typingStates, typingDispatch } = useTyping();
  const spanRef = React.useRef<HTMLSpanElement>(null);
  const handleDel = (e: React.MouseEvent) => {
    e.preventDefault();
    props.handleDel();
  };
  const getIcon = () => {
    switch (colors) {
      case "info":
        return (
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-xl flex justify-center items-center">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="w-3 sm:w-5 h-auto text-white"
            />
          </span>
        );
      case "success":
        return (
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-xl flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="w-3 sm:w-5 h-auto text-white"
            />
          </span>
        );
      case "error":
        return (
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-light-error dark:bg-dark-error rounded-xl flex justify-center items-center">
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className="w-3 sm:w-5 h-auto text-white"
            />
          </span>
        );
      case "warning":
        return (
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-xl flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="w-3 sm:w-5 h-auto text-white"
            />
          </span>
        );
      case "msg":
        return (
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-light-primary dark:bg-dark-primary-dark-variant rounded-xl flex justify-center items-center">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="w-3 sm:w-5 h-auto text-white"
            />
          </span>
        );
      default:
        return (
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-xl flex justify-center items-center">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="w-3 sm:w-5 h-auto text-white"
            />
          </span>
        );
    }
  };
  React.useEffect(() => {
    const handleAnimationEnd = () => {
      props.handleDel();
    };
    spanRef.current?.addEventListener("animationend", handleAnimationEnd);
    return () => {
      spanRef.current?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [spanRef]);
  return (
    <div
      className={twMerge(toast({ variant, colors }), style.container)}
      role="alert"
      ref={ref}
    >
      {getIcon()}
      <div
        className={twMerge("text-xs sm:text-sm font-normal flex-1 text-left")}
      >
        <TypingContext.Provider value={{ typingStates, typingDispatch }}>
          {display === "writer" ? (
            <Typing text={props.msg.split(".")} size={"sm"} />
          ) : (
            props.msg
          )}
        </TypingContext.Provider>
      </div>
      <IconButton
        size={"small"}
        fill={"borderless"}
        shape={"square"}
        disabled={false}
        className={twMerge(xbtn({ variant, colors }))}
        onClick={handleDel}
      >
        <span className="sr-only">Close</span>
        <FontAwesomeIcon icon={faXmark} className="h-3 sm:h-4" />
      </IconButton>
      {props.timed !== null && display === "standard" ? (
        <span
          className={twMerge(
            progress({ colors }),
            props.timed === "sm"
              ? style.sm
              : props.timed === "md"
                ? style.md
                : style.lg,
          )}
          ref={spanRef}
        ></span>
      ) : null}
    </div>
  );
});
