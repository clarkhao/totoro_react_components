import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { CvaAvatar } from "./cvaAvatar";

type TAvatarWrapper = {
  isLocal: boolean;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  shape: "circular" | "square";
} & HTMLAttributes<HTMLDivElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const AvatarWrapper = ({
  size,
  shape,
  isLocal,
  ...props
}: TAvatarWrapper) => {
  return (
    <CvaAvatar
      {...props}
      isLocal={isLocal}
      outerSize={size}
      innerSize={size}
      shape={shape}
    />
  );
};
