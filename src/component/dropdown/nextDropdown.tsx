import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "../avatar/avatar.css";
import { DropContext } from "./nextDropHook";

interface ICustomAbsDrop extends Record<string, any> {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * Clickable
   */
  clickable: FC;
  /**
   * className
   */
  className?: string;
}

export function NextDropdown({ children, ...props }: ICustomAbsDrop) {
  const drop = React.useContext(DropContext);
  //main content of item
  const popupRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current?.contains(event.target as Node)) {
        return;
      } else if (!labelRef.current?.contains(event.target as Node)) {
        drop?.dropDispatch({ type: "set-active", payload: false });
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <label
        className="inline-flex items-end cursor-pointer w-full"
        ref={labelRef}
      >
        <input
          type="checkbox"
          checked={drop?.dropState.isActive}
          onChange={console.log}
          className="sr-only peer"
          onClick={() =>
            drop?.dropDispatch({
              type: "set-active",
              payload: !drop.dropState.isActive,
            })
          }
        />
        <span className="w-fit text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-row justify-center items-center gap-2">
          {props.clickable({ ...props })}
        </span>
      </label>
      <div
        ref={popupRef}
        className={["z-10 absolute", props.className].join(" ")}
      >
        <CSSTransition
          in={drop?.dropState.isActive}
          timeout={300}
          classNames="avatar"
          unmountOnExit
        >
          {children}
        </CSSTransition>
      </div>
    </>
  );
}
