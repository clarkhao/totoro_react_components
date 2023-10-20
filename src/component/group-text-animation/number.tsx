import * as d3 from "d3";
import React from "react";

type TNumber = {
  /**
   * numbers
   */
  numbers: { start: string; end: string };
  /**
   * size
   */
  size: "small" | "base" | "large";
};

export function Number({ numbers, ...props }: TNumber) {
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
          (parseFloat(numbers.start).toFixed(2) ?? 0.00),
          parseFloat(numbers.end).toFixed(2)
        );
        return function (t) {
          d3.select(this).text(parseFloat(interpolator(t)).toFixed(2));
        };
      })
      .duration(1000);
  }, [numberRef, numbers]);
  return (
    <span
      className={["text-black dark:text-white w-full", getSize()].join(" ")}
      ref={numberRef}
    ></span>
  );
}
