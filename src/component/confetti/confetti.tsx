import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import style from "./confetti.module.css";

const confetti = cva(
  [
    "relative",
    "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-no-repeat",
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-no-repeat",
    "before:-z-10 after:-z-10",
  ],
  {
    variants: {
      size: {
        md: [style.md],
        lg: [style.lg],
      },
      variant: {
        order: [
          style.order,
          "before:h-[100%] before:w-[150%] after:h-[100%] after:w-[150%]",
          "before:-top-[50%] after:-bottom-[50%]",
        ],
        chaos: [
          style.chaos,
          "before:h-[150%] before:w-[150%] after:h-[150%] after:w-[150%]",
          "before:-top-[100%] after:-bottom-[100%]",
        ],
      },
    },
    defaultVariants: {},
  },
);

type TConfetti = {
  children: React.ReactNode;
  colors: string;
  disabled: boolean;
  dataId: string;
} & VariantProps<typeof confetti> &
  HTMLAttributes<HTMLSpanElement>;

export function ClickConfetti({ size, variant, colors, ...props }: TConfetti) {
  const [active, setActive] = React.useState(false);
  const timer = React.useRef<number>(0);
  React.useEffect(() => {
    const ele = document.querySelector(`[data-confetti=${props.dataId}]`);
    (ele as HTMLElement)?.style.setProperty("--confetti-color", colors);
  }, []);
  return (
    <span
      {...props}
      className={twMerge(
        confetti({ size, variant }),
        active && !props.disabled ? style.confetti : "",
        props.className,
      )}
      onClick={() => {
        clearTimeout(timer.current);
        setActive(true);
        timer.current = window.setTimeout(() => setActive(false), 500);
      }}
      data-confetti={props.dataId}
    >
      {props.children}
    </span>
  );
}
