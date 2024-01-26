import { NextDropdown } from "../../component/dropdown/dropdownV3";
import React, { HTMLAttributes } from "react";
import { CvaAvatar } from "./cvaAvatar";
import { twMerge } from "tailwind-merge";

type TAvatarDropdown = {
  children: React.ReactNode;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  shape: "circular" | "square";
  isLocal: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function AvatarDropdown({ isLocal, ...props }: TAvatarDropdown) {
  const size: () => {
    size: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    className: string;
  } = () => {
    switch (props.size) {
      case "xs":
        return { size: "xs", className: "w-6 h-6" };
      case "sm":
        return { size: "sm", className: "w-8 h-8" };
      case "md":
        return { size: "md", className: "w-10 h-10" };
      case "lg":
        return { size: "lg", className: "w-20 h-20" };
      case "xl":
        return { size: "xl", className: "w-36 h-36" };
      default:
        return { size: "md", className: "w-10 h-10" };
    }
  };
  return (
    <div {...props} className={twMerge(props.className)}>
      <NextDropdown
        clickable={() =>
          CvaAvatar({
            innerSize: size().size,
            outerSize: size().size,
            shape: props.shape,
            isLocal,
          })
        }
        className="right-0"
        autoPos={{ auto: false, popupHeight: 0, popupWidth: 0 }}
        isByHover={false}
      >
        {props.children}
      </NextDropdown>
    </div>
  );
}
