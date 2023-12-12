import React from "react";
import { DropContext } from "../dropdown/nextDropHook";
import style from "./hamberger.module.css";

type THamberger = {
  /**
   * color
   */
  color: string;
  /**
   * id
   */
  id: string;
};

export function Hamberger({ ...props }: THamberger) {
  const drop = React.useContext(DropContext);
  React.useEffect(() => {
    const ele = document.getElementById(props.id);
    ele?.style.setProperty("--hamberger-btn-color", props.color);
  }, [props.color]);
  return (
    <article
      id={props.id}
      className={[
        "w-20 h-20 relative cursor-pointer z-50",
        style.hamberger,
        drop?.dropState.isActive ? style.active : "",
      ].join(" ")}
    >
      <span></span>
      <span></span>
    </article>
  );
}
