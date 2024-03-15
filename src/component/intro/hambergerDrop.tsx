import { NextDropdown } from "../../component/dropdown/dropdownV3";
import React from "react";
import { Hamberger } from "../../component/hamberger/hamberger";
import { twMerge } from "tailwind-merge";

type THambergerDrop = {
  /**
   * className
   */
  className?: string;
  /**
   * color
   */
  color: string;
  isLeft: boolean;
  children: React.ReactNode;
  size: "small" | "base";
};

export function HambergerDrop({ ...props }: THambergerDrop) {
  return (
    <NextDropdown
      clickable={(data: Record<string, unknown>) => {
        console.log(data);
        return (
          <Hamberger
            color={props.color}
            size={props.size}
            id="blue-hamberger"
            drop={data.active as boolean}
          />
        );
      }}
      className={props.isLeft ? "-top-0 -left-0" : "-top-4 -right-4"}
      autoPos={{ auto: false, popupHeight: 0, popupWidth: 0 }}
      isByHover={false}
      btnClass={twMerge(
        props.size === "small" ? "h-12" : "h-20",
        props.className,
      )}
    >
      {props.children}
    </NextDropdown>
  );
}
