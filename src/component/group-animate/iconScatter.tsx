import style from "./iconScatter.module.css";
import "./iconScatter.css";
import React from "react";

type TIconScatter = {
  /**
   * from
   */
  from: { x: number; y: number };
  /**
   * childList
   */
  childList: Array<React.ReactNode>;
};

export function IconScatter({ ...props }: TIconScatter) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--from-x-position",
      `${props.from.x}px`,
    );
    document.documentElement.style.setProperty(
      "--from-y-position",
      `${props.from.y}px`,
    );
    const ele = document.querySelector(`.${style.animate}`);
    const eleStyle = getComputedStyle(ele!);
    console.log(eleStyle.getPropertyValue("--x-position"));
    const length = props.childList.length;
    const timer = window.setInterval(() => {
      setIndex((prev) => {
        return prev < length - 1 ? prev + 1 : 0;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [props.childList.length, props.from.x, props.from.y]);
  return (
    <div
      className={[style.animate].join(" ")}
      style={{ animation: "topright-y 2.5s ease-out infinite" }}
    >
      <div style={{ animation: "topright-x 2.5s linear infinite" }}>
        {props.childList[index]}
      </div>
    </div>
  );
}
