import React, { HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/transition.css";
import { twMerge } from "tailwind-merge";

type TIconState = {
  width: number;
  state: "prev" | "pending" | "success" | "error";
  prevState?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function IconState({ state, width, prevState, ...props }: TIconState) {
  const getChild = (s: string) => {
    switch (s) {
      case "prev":
        return prevState;
      case "pending":
        return (
          <FontAwesomeIcon
            icon={faSpinner}
            className={twMerge(
              "animate-spin text-light-on-surface dark:text-dark-on-surface",
              "dark:spinner-glow",
            )}
            style={{
              width: `${width}px`,
              height: "auto",
            }}
          />
        );
      case "success":
        return (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={twMerge(
              "text-light-success dark:text-dark-success",
              "success-glow hover:success-more-glow",
            )}
            style={{
              width: `${width}px`,
              height: "auto",
            }}
          />
        );
      case "error":
        return (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={twMerge(
              "text-light-error dark:text-dark-error",
              "error-glow hover:error-more-glow",
            )}
            style={{
              width: `${width}px`,
              height: "auto",
            }}
          />
        );
      default:
        return prevState;
    }
  };
  return (
    <>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={state}
          timeout={{ exit: 150, enter: 150 }}
          classNames={"btn"}
        >
          <div
            {...props}
            className={twMerge(
              "z-[2] w-full h-full text-center inline-flex flex-row justify-center items-center gap-2",
              "cursor-pointer",
            )}
          >
            {getChild(state)}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
