//latest version
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/transition.css";

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
}: ICustomAbsDrop) {
  const [active, setActive] = React.useState(false);
  const [style, setStyle] = React.useState("");
  //main content of item
  const divRef = React.useRef<HTMLDivElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);
  const calculateAbsPosInClick = () => {
    const position = labelRef.current?.getBoundingClientRect();
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
        return;
      } else if (!labelRef.current?.contains(event.target as Node)) {
        setActive(false);
      }
    };
    const handleMouseover = () => {
      calculateAbsPosInClick();
      setActive(true);
    };
    const handleMouseout = () => {
      setActive(false);
    };

    if (isByHover) {
      divRef.current?.addEventListener("mouseover", handleMouseover);
      divRef.current?.addEventListener("mouseout", handleMouseout);
    } else {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      if (isByHover) {
        divRef.current?.removeEventListener("mouseover", handleMouseover);
        divRef.current?.removeEventListener("mouseout", handleMouseout);
      } else {
        document.removeEventListener("click", handleOutsideClick);
      }
    };
  }, [active, autoPos.popupHeight, autoPos.popupWidth, isByHover]);

  return (
    <div className="w-fit h-fit relative" ref={divRef}>
      <label
        className="inline-flex items-end cursor-pointer w-full"
        ref={labelRef}
      >
        <input
          type="checkbox"
          checked={active}
          onChange={console.log}
          className="sr-only peer"
          onClick={() => {
            if (autoPos.auto) {
              calculateAbsPosInClick();
            }
            setActive(!active);
          }}
        />
        <span className="z-20 w-fit text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-row justify-center items-center gap-2">
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
    </div>
  );
}
