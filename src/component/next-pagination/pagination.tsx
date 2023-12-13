import React from "react";
import { ListContext } from "./hook";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./pagination-transition.css";
type TPagination = {
  /**
   * lastPageIndex
   */
  lastPageIndex: number;
  /**
   * isNextContent
   */
  isNextContent?: boolean;
};
export default function Pagination(props: TPagination) {
  const list = React.useContext(ListContext);
  const firstIndex = list?.listState.pageIndex ?? 1;
  const [isNext, setIsNext] = React.useState(true);
  React.useEffect(() => {
    console.log(list?.listState.currentIndex);
    console.log(list?.listState.pageIndex);
  }, [list?.listState.currentIndex, list?.listState.pageIndex]);
  const handleAsyncStateUpdate = async (next: boolean) => {
    return new Promise((resolve) => {
      setIsNext(next);
      resolve("finished");
    });
  };
  const handlePrev = async () => {
    const passed =
      firstIndex >= 2 && list?.listState.currentIndex !== props.lastPageIndex;
    await handleAsyncStateUpdate(false);
    list?.listDispatch({
      type: "prev-page",
      payload: {
        first: passed,
        current: list.listState.currentIndex > 0,
      },
    });
  };
  const handleNext = async () => {
    await handleAsyncStateUpdate(true);
    list?.listDispatch({
      type: "next-page",
      payload: {
        first:
          props.lastPageIndex - firstIndex > 2 &&
          list?.listState.currentIndex !== 1,
        current: props.lastPageIndex - list.listState.currentIndex > 0,
      },
    });
  };
  const handleSpecified = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const endPoints = [1, props.lastPageIndex];
    const target = e.target as HTMLButtonElement;
    const value = target.textContent;
    const isCurrent = value?.endsWith("(current)");
    const newValue = parseInt(value ?? "");
    await handleAsyncStateUpdate(
      newValue > (list?.listState.currentIndex ?? 1),
    );
    list?.listDispatch({
      type: "specified-page",
      payload: {
        first: !isCurrent && !endPoints.some((val) => newValue === val),
        current: !isCurrent,
        value: newValue,
      },
    });
  };
  return (
    <>
      <nav aria-label="Page navigation example" className="w-full relative">
        <ul className="list-style-none mb-6 flex left-0 right-0 mx-auto absolute w-fit">
          <li>
            <button
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={handlePrev}
              disabled={list?.listState.currentIndex === 1}
            >
              Previous
            </button>
          </li>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames={
                isNext ? "pagination-stable" : "pagination-appear-right"
              }
              timeout={500}
              key={firstIndex}
            >
              <li className="opacity-0 w-10">
                <button
                  className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  onClick={handleSpecified}
                >
                  {firstIndex - 1}
                </button>
              </li>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames={
                isNext ? "pagination-disappear-left" : "pagination-right"
              }
              timeout={500}
              key={firstIndex}
            >
              <li
                className="w-10"
                aria-current={
                  list?.listState.currentIndex === 1 ? "page" : undefined
                }
              >
                <button
                  className={[
                    "relative block rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white",
                    list?.listState.currentIndex === 1
                      ? "bg-brand-primary-light dark:bg-brand-primary text-white hover:text-neutral-600"
                      : "bg-transparent",
                  ].join(" ")}
                  onClick={handleSpecified}
                >
                  {firstIndex}
                  {list?.listState.currentIndex === 1 ? (
                    <>
                      <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                        (current)
                      </span>
                    </>
                  ) : null}
                </button>
              </li>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames={isNext ? "pagination-left" : "pagination-right"}
              timeout={500}
              key={firstIndex}
            >
              <li
                aria-current={
                  list?.listState.currentIndex !== 1 &&
                  list?.listState.currentIndex !== props.lastPageIndex
                    ? "page"
                    : undefined
                }
                className="w-10"
              >
                <button
                  className={[
                    "relative block rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white",
                    list?.listState.currentIndex !== 1 &&
                    list?.listState.currentIndex !== props.lastPageIndex
                      ? "bg-brand-primary-light dark:bg-brand-primary text-white hover:text-neutral-600"
                      : "bg-transparent",
                  ].join(" ")}
                  onClick={handleSpecified}
                >
                  {firstIndex + 1}
                  {list?.listState.currentIndex !== 1 &&
                  list?.listState.currentIndex !== props.lastPageIndex ? (
                    <>
                      <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                        (current)
                      </span>
                    </>
                  ) : null}
                </button>
              </li>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames={
                isNext ? "pagination-left" : "pagination-disappear-right"
              }
              timeout={500}
              key={firstIndex}
            >
              <li className="w-10">
                <button
                  className={[
                    "relative block rounded px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white",
                    list?.listState.currentIndex === props.lastPageIndex
                      ? "bg-brand-primary-light dark:bg-brand-primary text-white hover:text-neutral-600"
                      : "bg-transparent",
                  ].join(" ")}
                  onClick={handleSpecified}
                >
                  {firstIndex + 2}
                </button>
              </li>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames={
                isNext ? "pagination-appear-left" : "pagination-stable"
              }
              timeout={500}
              key={firstIndex}
            >
              <li aria-current="page" className="opacity-0 w-10">
                <button
                  className={[
                    "pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white",
                  ].join(" ")}
                  onClick={handleSpecified}
                >
                  {firstIndex + 3}
                </button>
              </li>
            </CSSTransition>
          </SwitchTransition>
          <li className="">
            <button
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={handleNext}
              disabled={list?.listState.currentIndex === props.lastPageIndex}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
