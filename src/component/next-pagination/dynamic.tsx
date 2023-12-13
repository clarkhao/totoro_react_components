import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DynamicListContext } from "./dynamicHook";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./dynamic-transition.css";

type TDynamicPagination = {
  /**
   * isNext
   */
  isNext: boolean;
  /**
   * isPrev
   */
  isPrev: boolean;
  /**
   * total?
   */
  total: number;
  /**
   * use
   */
  use?: "page" | "counter";
};
export function DynamicPagination({
  total,
  use = "page",
  ...props
}: TDynamicPagination) {
  const list = React.useContext(DynamicListContext);
  const debounceTimer = React.useRef<number>(0);
  const handleAsyncNext = async () => {
    return new Promise((resolve) => {
      list?.listDispatch({ type: "isAscending", payload: props.isNext });
      resolve("finished");
    });
  };
  const handleAsyncPrev = async () => {
    return new Promise((resolve) => {
      list?.listDispatch({ type: "isDescending", payload: props.isPrev });
      resolve("finished");
    });
  };
  const handlePrev = async () => {
    window.clearTimeout(debounceTimer.current);
    if (list?.listState.isAscending) await handleAsyncPrev();
    debounceTimer.current = window.setTimeout(() => {
      list?.listDispatch({ type: "prev-page", payload: props.isPrev });
    }, 300);
  };
  const handleNext = async () => {
    window.clearTimeout(debounceTimer.current);
    if (!list?.listState.isAscending) await handleAsyncNext();
    debounceTimer.current = window.setTimeout(() => {
      list?.listDispatch({ type: "next-page", payload: props.isNext });
    }, 300);
  };
  return (
    <div className="inline-flex items-center justify-center rounded text-black">
      <button
        className="bg-gray-200 inline-flex h-8 w-8 items-center justify-center rtl:rotate-180 border-r border-r-white text-brand-primary rounded-tl-sm rounded-bl-sm"
        onClick={handlePrev}
        disabled={!(props.isPrev && (list?.listState.currentIndex ?? 0) > 1)}
      >
        {use === "page" ? (
          <>
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </>
        ) : (
          <>
            <span className="sr-only">Minus One</span>
            <FiMinus />
          </>
        )}
      </button>
      <TransitionGroup
        className={[
          "flex gap-0 overflow-hidden items-center justify-center bg-gray-200 h-8 w-12",
          list?.listState.isAscending ? "flex-row" : "flex-row-reverse",
        ].join(" ")}
      >
        <CSSTransition
          key={list?.listState.currentIndex}
          classNames={
            list?.listState.isAscending
              ? "dynamic-page-left"
              : "dynamic-page-right"
          }
          timeout={500}
        >
          <span className="">{list?.listState.currentIndex}</span>
        </CSSTransition>
      </TransitionGroup>
      <button
        className="bg-gray-200 inline-flex h-8 w-8 items-center justify-center rtl:rotate-180 border-l border-l-white text-brand-primary rounded-tr-sm rounded-br-sm"
        onClick={handleNext}
        disabled={
          !(
            props.isNext &&
            (list?.listState.currentIndex ?? Number.POSITIVE_INFINITY) < total
          )
        }
      >
        {use === "page" ? (
          <>
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </>
        ) : (
          <>
            <span className="sr-only">Plus One</span>
            <FiPlus />
          </>
        )}
      </button>
    </div>
  );
}
