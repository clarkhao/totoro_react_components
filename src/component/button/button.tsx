//app
import React, { ButtonHTMLAttributes } from "react";
//component
import Spinner from "../spinner/spinner";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { FiCheck, FiXCircle } from "react-icons/fi";
//style
import "./transition.css";

export type IButton = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * primary or secondary
   */
  isPrimary?: boolean;
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
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = function Button({
  children,
  isPrimary = true,
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
      ? "h-8 w-8 text-sm font-medium"
      : "h-8 px-2 text-sm font-medium";
    const sizeBase = rest.callbackState
      ? "h-10 w-10 text-sm font-medium"
      : "h-10 px-4 text-sm font-medium";
    const sizeLarge = rest.callbackState
      ? "h-14 w-14 text-sm font-medium rounded-full"
      : "h-14 px-6 text-base font-medium rounded-[30px] after:rounded-[30px]";
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
          isPrimary ? primaryColors : secondaryColors,
          "relative block focus:ring-4 focus:outline-none rounded-[20px] transition-all duration-300 ease-in-out",
          rest.isOutlined && (!rest.callbackState || !moreAnimated)
            ? "after:content-[''] after:absolute hover:text-white after:top-0 after:left-0 after:rounded-[20px] after:w-0 after:h-full after:transition-all after:hover:w-full"
            : "",
          sizeSelector(),
          !rest.callbackState || !moreAnimated ? `${rest.width}` : "m-0 p-0",
          "flex justify-center items-center",
          rest.disabled ? "" : "",
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
          <div className="z-[2] relative text-center inline-flex flex-row justify-center items-center gap-2">
            {children}
          </div>
        )}
      </button>
    </>
  );
};
