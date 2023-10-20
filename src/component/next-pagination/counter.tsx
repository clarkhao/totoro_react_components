import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DynamicListContext } from "./dynamicHook";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./dynamic-transition.css";
import { useCartStore } from "../next-list/cart/cartStore";

type TCounter = {
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
   * min and max
   */
  range?: [number, number];
  /**
   * id?
   */
  id?: string;
};
export function Counter({ total, ...props }: TCounter) {
  const [setCartItems] = useCartStore((state) => [state.setCartItems]);
  const list = React.useContext(DynamicListContext);
  const [input, setInput] = React.useState(
    list?.listState.currentIndex.toString()
  );
  const [toggle, setToggle] = React.useState(true);
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
      setCartItems((prev) => {
        return {
          ...prev,
          [props.id!]: {
            ...(prev[props.id!] ?? {}),
            quantity: props.isPrev
              ? prev[props.id!]?.quantity - 1
              : prev[props.id!]?.quantity,
          },
        };
      });
      list?.listDispatch({ type: "prev-page", payload: props.isPrev });
    }, 300);
  };
  const handleNext = async () => {
    window.clearTimeout(debounceTimer.current);
    if (!list?.listState.isAscending) await handleAsyncNext();
    debounceTimer.current = window.setTimeout(() => {
      setCartItems((prev) => {
        return {
          ...prev,
          [props.id!]: {
            ...(prev[props.id!] ?? {}),
            quantity: props.isNext
              ? prev[props.id!]?.quantity + 1
              : prev[props.id!]?.quantity,
          },
        };
      });
      list?.listDispatch({ type: "next-page", payload: props.isNext });
    }, 300);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleBlur = () => {
    const parsed = parseInt(input!);
    if (parsed > total) {
      setCartItems((prev) => {
        return {
          ...prev,
          [props.id!]: {
            ...(prev[props.id!] ?? {}),
            quantity: 99,
          },
        };
      });
      list?.listDispatch({ type: "set-specified", payload: 99 });
    } else if (parsed < 1) {
      setCartItems((prev) => {
        return {
          ...prev,
          [props.id!]: {
            ...(prev[props.id!] ?? {}),
            quantity: 1,
          },
        };
      });
      list?.listDispatch({ type: "set-specified", payload: 1 });
    } else {
      setCartItems((prev) => {
        return {
          ...prev,
          [props.id!]: {
            ...(prev[props.id!] ?? {}),
            quantity: parsed,
          },
        };
      });
      list?.listDispatch({ type: "set-specified", payload: parsed });
    }
    setToggle(true);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };
  const handleSetCount = () => {
    setInput(list?.listState.currentIndex.toString());
    setToggle(false);
  };

  return (
    <div className="inline-flex items-center justify-center rounded text-black">
      <button
        className="bg-gray-200 inline-flex h-8 w-8 items-center justify-center rtl:rotate-180 border-r border-r-white text-brand-primary rounded-tl-sm rounded-bl-sm"
        onClick={handlePrev}
        disabled={!(props.isPrev && list?.listState.currentIndex! > 1)}
      >
        <>
          <span className="sr-only">Minus One</span>
          <FiMinus />
        </>
      </button>
      {toggle ? (
        <TransitionGroup
          className={[
            "flex gap-0 overflow-hidden items-center justify-center bg-gray-200 h-8 w-12 cursor-pointer",
            list?.listState.isAscending ? "flex-row" : "flex-row-reverse",
          ].join(" ")}
          onClick={handleSetCount}
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
            <span>{list?.listState.currentIndex}</span>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <input
          className="w-12 py-2 px-0 border border-brand-secondary focus:outline-none focus:ring-0"
          type="number"
          value={input}
          onBlur={handleBlur}
          onInput={handleInput}
          min={props.range ? props.range[0] : 1}
          max={props.range ? props.range[1] : total}
          onKeyDown={handleEnter}
        />
      )}
      <button
        className="bg-gray-200 inline-flex h-8 w-8 items-center justify-center rtl:rotate-180 border-l border-l-white text-brand-primary rounded-tr-sm rounded-br-sm"
        onClick={handleNext}
        disabled={!(props.isNext && list?.listState.currentIndex! < total)}
      >
        <>
          <span className="sr-only">Plus One</span>
          <FiPlus />
        </>
      </button>
    </div>
  );
}
