import * as d3 from "d3";
import React from "react";

type TNumber = {
  start: number;
  end: number;
  size: "small" | "base" | "large";
  fixed: number;
};

export function Number({ start, end, fixed = 2, ...props }: TNumber) {
  const numberRef = React.useRef<HTMLDivElement>(null);
  const getSize = React.useCallback(() => {
    switch (props.size) {
      case "small":
        return "text-sm";
      case "base":
        return "text-base";
      case "large":
        return "text-xl";
      default:
        return "text-base";
    }
  }, [props.size]);
  React.useEffect(() => {
    const el = d3.select(numberRef.current);

    el.transition()
      .tween("text", () => {
        const interpolator = d3.interpolateString(
          parseFloat(`${start}`).toFixed(fixed) ?? 0.0,
          parseFloat(`${end}`).toFixed(fixed)
        );
        return function (t) {
          d3.select(this).text(parseFloat(interpolator(t)).toFixed(fixed));
        };
      })
      .duration(1000);
  }, [numberRef, start, end]);
  return (
    <span
      className={["text-black dark:text-white w-full", getSize()].join(" ")}
      ref={numberRef}
    ></span>
  );
}

