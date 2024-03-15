"use client";
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/transition.css";
import { twMerge } from "tailwind-merge";

type ICustomAbsDrop = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * Clickable
   */
  clickable: FC;
  className?: string;
  autoPos: {
    auto: boolean;
    popupHeight: number;
    popupWidth: number;
  };
  isByHover: boolean;
  btnClass?: string;
  clickClose?: boolean;
};

export function NextDropdown({
  children,
  clickable,
  className,
  autoPos = {
    auto: false,
    popupHeight: 0,
    popupWidth: 0,
  },
  isByHover = false,
  ...props
}: ICustomAbsDrop) {
  const inputId = React.useId();
  const [active, setActive] = React.useState(false);
  const [style, setStyle] = React.useState("");
  //main content of item
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLLabelElement>(null);
  const calculateAbsPosInClick = () => {
    const position = btnRef.current?.getBoundingClientRect();
    const spaceAbove = position?.top;
    const spaceBelowBottom = window.innerHeight - (position?.bottom ?? 0);
    const spaceRight = window.innerWidth - (position?.right ?? 0);
    const spaceLeft = position?.left;
    let x = "";
    if (spaceRight >= autoPos.popupWidth! || spaceRight >= spaceLeft!) {
      x = "left-0";
    } else {
      x = "right-0";
    }
    if (
      spaceBelowBottom >= autoPos.popupHeight! ||
      spaceBelowBottom >= spaceAbove!
    ) {
      setStyle("top-full " + x);
    } else {
      setStyle("bottom-full " + x);
    }
  };
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current?.contains(event.target as Node)) {
        console.log("1");
        if (props.clickClose) {
          setActive(false);
        } else {
          return;
        }
      } else if (!btnRef.current?.contains(event.target as Node) && active) {
        console.log("2");
        setActive(false);
      }
    };
    const handleMouseover = () => {
      if (autoPos.auto) calculateAbsPosInClick();
      setActive(true);
    };
    const handleMouseout = () => {
      setActive(false);
    };

    if (isByHover) {
      btnRef.current?.addEventListener("mouseover", handleMouseover);
      btnRef.current?.addEventListener("mouseout", handleMouseout);
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      if (isByHover) {
        btnRef.current?.removeEventListener("mouseover", handleMouseover);
        btnRef.current?.removeEventListener("mouseout", handleMouseout);
      }
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [active, autoPos.popupHeight, autoPos.popupWidth, isByHover]);

  return (
    <button
      className={twMerge(
        "w-fit h-fit relative focus:ring-0 focus:ring-light-primary-light-variant",
        "hover:border-0 ",
        props.btnClass,
      )}
      ref={btnRef}
      onKeyUp={(e: React.KeyboardEvent) => {
        e.preventDefault();
        if (e.key === "Enter") {
          setActive(!active);
        }
      }}
    >
      <label
        htmlFor={inputId}
        ref={inputRef}
        className="inline-flex items-end cursor-pointer w-full"
      >
        <input
          type="checkbox"
          id={inputId}
          checked={active}
          className="sr-only peer"
          onClick={() => {
            if (autoPos.auto) {
              calculateAbsPosInClick();
            }
            setActive(!active);
          }}
          readOnly
        />
        <span
          className={twMerge(
            "z-20 w-fit text-sm flex flex-row justify-center items-center gap-2",
          )}
        >
          {clickable({ active })}
        </span>
      </label>
      <div
        ref={popupRef}
        className={["z-10 absolute", style, className].join(" ")}
      >
        <CSSTransition
          in={active}
          timeout={150}
          classNames={
            style.includes("top") || !autoPos.auto
              ? "dropdown"
              : "dropdown-reverse"
          }
          unmountOnExit
        >
          {children}
        </CSSTransition>
      </div>
    </button>
  );
}
