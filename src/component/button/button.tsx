//app
import React, { ButtonHTMLAttributes } from "react";
//component
import Spinner from "../spinner/spinner";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { FiCheck, FiXCircle } from "react-icons/fi";
//style
import "./transition.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * primary or secondary
   */
  variant?: "primary" | "secondary";
  /**
   * isOutlined
   */
  isOutlined?: boolean;
  /**
   * size
   */
  size: "small" | "base" | "large";
  /**
   * width
   */
  width?: string;
  /**
   * callbackState
   */
  callbackState?: "pending" | "success" | "fail" | undefined;
  /**
   * moreAnimated?
   */
  moreAnimated?: boolean;
  /**
   * data-addToCart
   */
  addToCart?: string;
}
export const Button = function Button({
  children,
  variant = "primary",
  moreAnimated = false,
  addToCart,
  ...rest
}: IButton) {
  const primaryContained = `text-white bg-brand-primary-light hover:bg-brand-primary active:bg-white active:text-brand-primary ${
    rest.callbackState === "success"
      ? "focus:ring-emerald-200 active:border-emerald-200 bg-ele-success hover:bg-ele-success text-white border-ele-success dark:border-ele-success"
      : rest.callbackState === "fail"
      ? "focus:ring-amber-200 active:border-amber-200 bg-ele-error hover:bg-ele-error text-white border-ele-error dark:border-ele-error"
      : "focus: ring-rose-300 active:border-brand-primary"
  }`;
  const primaryOutlined = `text-brand-primary border border-2 border-brand-primary after:bg-brand-primary after:active:text-brand-primary active:border active:ring-0 ${
    rest.callbackState === "success"
      ? "focus:ring-emerald-200 active:border-emerald-200 bg-ele-success hover:bg-ele-success text-white border-ele-success dark:border-ele-success"
      : rest.callbackState === "fail"
      ? "focus:ring-amber-200 active:border-amber-200 bg-ele-error hover:bg-ele-error text-white border-ele-error dark:border-ele-error"
      : "focus: ring-rose-300 active:border-brand-primary"
  }`;
  const primaryColors = rest.isOutlined ? primaryOutlined : primaryContained;

  const secondaryContained = `text-white bg-brand-secondary-light hover:bg-brand-secondary active:bg-white active:text-brand-secondary active:border active:border-brand-secondary ${
    rest.callbackState === "success"
      ? "focus:ring-emerald-200 active:border-emerald-200 bg-ele-success hover:bg-ele-success text-white border-ele-success dark:border-ele-success"
      : rest.callbackState === "fail"
      ? "focus:ring-amber-200 active:border-amber-200 bg-ele-error hover:bg-ele-error text-white border-ele-error dark:border-ele-error"
      : "focus:ring-violet-300 active:border-violet-300"
  }`;
  const secondaryOutlined = `text-brand-secondary border border-2 border-brand-secondary after:bg-brand-secondary after:active:text-brand-secondary active:border active:border-brand-secondary active:ring-0 ${
    rest.callbackState === "success"
      ? "focus:ring-emerald-200 active:border-emerald-200 bg-ele-success hover:bg-ele-success text-white border-ele-success dark:border-ele-success"
      : rest.callbackState === "fail"
      ? "focus:ring-amber-200 active:border-amber-200 bg-ele-error hover:bg-ele-error text-white border-ele-error dark:border-ele-error"
      : "focus:ring-violet-300 active:border-violet-300"
  }`;

  const secondaryOutlinedDark = ` dark:after:bg-violet-600 dark:hover:text-white ${
    rest.callbackState === "success"
      ? "dark:focus:ring-emerald-200 dark:border-ele-success"
      : rest.callbackState === "fail"
      ? "dark:focus:ring-amber-200 dark:border-ele-error"
      : "dark:focus:ring-violet-400 dark:border-violet-500"
  }`;
  const textDarkColor =
    rest.callbackState !== undefined
      ? " dark:text-white"
      : " dark:text-violet-500";
  const secondaryColors = rest.isOutlined
    ? secondaryOutlined.concat(secondaryOutlinedDark).concat(textDarkColor)
    : secondaryContained;

  const iconSelector = React.useCallback(() => {
    switch (rest.callbackState) {
      case "pending":
        return <Spinner />;
      case "success":
        return <FiCheck style={{ width: "40px", height: "auto" }} />;
      case "fail":
        return <FiXCircle style={{ width: "40px", height: "auto" }} />;
      default:
        return <span className="z-[2] relative">{children}</span>;
    }
  }, [rest.callbackState, children]);
  const sizeSelector = React.useCallback(() => {
    const sizeSmall = rest.callbackState
      ? "text-sm font-medium"
      : "px-3 py-2 text-sm font-medium";
    const sizeBase = rest.callbackState
      ? "text-sm font-medium"
      : "px-5 py-2.5 text-sm font-medium";
    const sizeLarge = rest.callbackState
      ? "text-sm font-medium"
      : "px-5 py-3 text-base font-medium";
    switch (rest.size) {
      case "small":
        return sizeSmall;
      case "base":
        return sizeBase;
      case "large":
        return sizeLarge;
      default:
        return sizeBase;
    }
  }, [rest.size, rest.callbackState]);
  return (
    <>
      <button
        type="button"
        className={[
          variant === "primary" ? primaryColors : secondaryColors,
          sizeSelector(),
          "relative block focus:ring-4 focus:outline-none rounded-[20px] transition-all duration-300 ease-in-out",
          rest.isOutlined && (!rest.callbackState || !moreAnimated)
            ? "after:content-[''] after:absolute hover:text-white after:top-0 after:left-0 after:rounded-[20px] after:w-0 after:h-full after:transition-all after:hover:w-full"
            : "",
          !rest.callbackState || !moreAnimated
            ? `h-10 ${rest.width}`
            : "h-10 w-10 m-0 p-0",
          "flex justify-center items-center",
        ].join(" ")}
        data-testid="test-button"
        data-addtocart={addToCart}
        {...rest}
      >
        {moreAnimated && rest.callbackState ? (
          <SwitchTransition>
            <CSSTransition
              key={rest.callbackState}
              classNames="scale"
              timeout={500}
            >
              {iconSelector()}
            </CSSTransition>
          </SwitchTransition>
        ) : (
          <span className="z-[2] relative text-center inline-flex flex-row justify-center items-center gap-2">
            {children}
          </span>
        )}
      </button>
    </>
  );
}
