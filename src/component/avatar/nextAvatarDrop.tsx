import { NextDropdown } from "../../component/dropdown/dropdownV3";
import React from "react";
import { CvaAvatar } from "./cvaAvatar";
import { twMerge } from "tailwind-merge";

type TAvatarDropdown = {
  children: React.ReactNode;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  shape: "circular" | "square";
  isLocal: boolean;
  className?: string;
  avatarClass?: string;
};

export function AvatarDropdown({ isLocal, ...props }: TAvatarDropdown) {
  return (
    <NextDropdown
      clickable={() =>
        CvaAvatar({
          innerSize: props.size,
          outerSize: props.size,
          shape: props.shape,
          isLocal,
          className: props.avatarClass,
        })
      }
      className={twMerge("right-0", props.className)}
      autoPos={{ auto: false, popupHeight: 320, popupWidth: 320 }}
      isByHover={false}
    >
      {props.children}
    </NextDropdown>
  );
}
