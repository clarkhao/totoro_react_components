/* position fixed default, isAbs turn to absolute position*/
import React, { FC } from "react";
import { DefaultClickable } from "./defaultClickable";
import { CSSTransition } from "react-transition-group";
import "../avatar/avatar.css";

interface TCustomDropdown extends Record<string, any> {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * clickable
   */
  clickable: FC;
  /**
   * isAbs
   */
  isAbs?: boolean | undefined;
  /**
   * className
   */
  className?: string;
  /**
   * childHeight
   */
  childHeight?: number;
  /**
   * index
   */
  index?: number;
}

export function CustomDropdown({
  index = 0,
  clickable = DefaultClickable,
  children,
  ...props
}: TCustomDropdown) {
  const [hidden, setHidden] = React.useState(true);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setHidden(true);
      } 
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handler = () => {
    const calculateFixedPos = async () => {
      const position = dropdownRef.current?.getBoundingClientRect();
      const spaceAbove = position?.top;
      const spaceBelow = window.innerHeight - (position?.top ?? 0);
      const spaceBelowBottom = window.innerHeight - (position?.bottom ?? 0);
      const spaceRight = window.innerWidth - (position?.right ?? 0);
      const spaceLeft = position?.left;
      const calendarHeight = props.childHeight ?? 0;
      if (spaceBelow >= calendarHeight || spaceBelow >= spaceAbove!) {
        if (props.covered) {
          setStyle({
            top: `${position?.top}px`,
            left: `${spaceLeft}px`,
          });
        } else {
          setStyle({
            top: `${position?.bottom}px`,
            right: `${spaceRight}px`,
          });
        }
      } else {
        if (props.covered) {
          setStyle({
            bottom: `${spaceBelowBottom}px`,
            left: `${spaceLeft}px`,
          });
        } else {
          setStyle({
            bottom: `${spaceBelow}px`,
            right: `${spaceRight}px`,
          });
        }
      }
    };
    const calculateAbsPos = async () => {
      const position = dropdownRef.current?.getBoundingClientRect();
      const spaceAbove = position?.top;
      const spaceBelow = window.innerHeight - (position?.top ?? 0);
      const spaceBelowBottom = window.innerHeight - (position?.bottom ?? 0);
      const spaceRight = window.innerWidth - (position?.right ?? 0);
      const spaceLeft = position?.left;
      const calendarHeight = props.childHeight ?? 0;
      if (spaceBelow >= calendarHeight || spaceBelow >= spaceAbove!) {
        setStyle({
          top: `40px`,
          right: `0px`,
        });
      } else {
        setStyle({
          bottom: `40px`,
          right: `0px`,
        });
      }
    };
    if (props.isAbs) calculateAbsPos();
    else if (props.isAbs === false) calculateFixedPos();
    else calculateAbsPos();
    setHidden(!hidden);
  };
  return (
    <>
      <div
        className={[
          "flex flex-col justify-center items-center gap-2 relative",
        ].join(" ")}
        ref={dropdownRef}
      >
        {clickable({
          handler,
          index,
          ...props,
        } as Record<string, any>)}
        <CSSTransition
          in={!hidden}
          timeout={300}
          classNames={"top" in style ? "avatar" : "avatar-reverse"}
          unmountOnExit
        >
          <div
            id="dropdownBgHover"
            className={[
              "z-20 bg-white rounded-lg shadow dark:bg-gray-700 w-fit",
              hidden ? "hidden" : "block",
              props.isAbs ? "absolute" : props.isAbs === false ? "fixed" : "",
              props.className,
            ].join(" ")}
            style={style}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    </>
  );
}
