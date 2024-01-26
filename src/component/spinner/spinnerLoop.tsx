import React from "react";
import style from "./spinnerLoop.module.css";

export default function SpinnerLoop() {
  return <div className={[style.loader, ""].join(" ")}></div>;
}
