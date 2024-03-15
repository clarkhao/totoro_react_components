"use client";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../../store/slices/toast";
import { RootState } from "../../store";
import { Toast } from "./toast";
import { twMerge } from "tailwind-merge";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/transition.css";
import ErrorBoundary from "../error/ErrorBoundary";

const toastQueue = cva(["fixed z-50", "flex flex-col gap-y-4"], {
  variants: {
    pos: {
      top: ["top-2 left-1/2 -translate-x-1/2"],
      bottom: ["bottom-2 left-1/2 -translate-x-1/2"],
      left: ["left-2 top-10"],
      right: ["right-2 top-10"],
    },
  },
  defaultVariants: {
    pos: "right",
  },
});

type TToastQueue = VariantProps<typeof toastQueue> &
  HTMLAttributes<HTMLDivElement>;

export function ToastQueue({ pos }: TToastQueue) {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.toast.toastMsg);
  return (
    <ErrorBoundary>
      <div className={twMerge(toastQueue({ pos }))}>
        <TransitionGroup component={null}>
          {[...toast]
            .map((el) => {
              return { ...el, nodeRef: createRef<HTMLDivElement>() };
            })
            .map((el) => {
              return (
                <CSSTransition
                  key={el?.id}
                  classNames="ymotion"
                  timeout={500}
                  nodeRef={el.nodeRef}
                >
                  <Toast
                    ref={el.nodeRef}
                    msg={el.msg}
                    timed={el.timed}
                    display={el.display}
                    colors={el.colors}
                    variant={el.variant}
                    handleDel={() => {
                      dispatch(del(el.id));
                    }}
                  />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </div>
    </ErrorBoundary>
  );
}
