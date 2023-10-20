/**clicking the popup also make the popup disappearred, 
 * outer relative wrapper is needed */
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "../avatar/avatar.css";

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
   * id
   */
  id: number;
  /**
   * className
   */
  className?: string;
}

export function CustomAbsDrop({ children, ...props }: ICustomAbsDrop) {
  //checked controll the appearrance of popup
  const [checked, setChecked] = React.useState(false);
  //main content of item
  const popupRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!labelRef.current?.contains(event.target as Node)) {
        setChecked(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  React.useEffect(() => {
    console.log(checked);
  }, [checked]);
  return (
    <>
      <label
        className="inline-flex flex-col items-end cursor-pointer p-2 w-full"
        ref={labelRef}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={console.log}
          className="sr-only peer"
          onClick={() => setChecked(!checked)}
        />
        <span className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-row justify-center items-center gap-2">
          {props.clickable({ ...props })}
        </span>
      </label>
      <div
        ref={popupRef}
        id={`delete-dropdown-${props.id}`}
        className={["z-50 absolute", props.className].join(" ")}
      >
        <CSSTransition
          in={checked}
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
