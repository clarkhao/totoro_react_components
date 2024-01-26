import React, { HTMLAttributes } from "react";
import style from "./hamberger.module.css";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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

const hamberger = cva(["relative", "cursor-pointer"], {
  variants: {
    drop: {
      true: [style.active],
      false: [],
    },
    size: {
      small: ["w-12 h-12"],
      base: ["w-20 h-20"],
    },
  },
  defaultVariants: {
    size: "base",
    drop: false,
  },
});

export type HambergerProps = VariantProps<typeof hamberger> &
  THamberger &
  HTMLAttributes<HTMLDivElement> &
  Record<string, unknown>;

export function Hamberger({ drop, size, color, id, ...props }: HambergerProps) {
  React.useEffect(() => {
    const ele = document.getElementById(id);
    ele?.style.setProperty("--hamberger-btn-color", color);
  }, [color, id]);
  return (
    <>
      <article
        {...props}
        id={id}
        className={twMerge(hamberger({ drop, size }), style.hamberger)}
      >
        <span></span>
        <span></span>
      </article>
    </>
  );
}
