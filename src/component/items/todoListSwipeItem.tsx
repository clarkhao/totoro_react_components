import React from "react";
import { TodoListItem } from "../dropdown/dndDropdown";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./swipe-transition.css";
import { FaTrashCan } from "react-icons/fa6";
import { TItem } from "../next-dnd-list/dndListHook";

type TTodoListSwipeItem = {
  /**
   * id
   */
  id: string;
  /**
   * content
   */
  content: Omit<TItem, "position" | "offset" | "active">;
  /**
   * zIndex
   */
  index: number;
};

export function TodoListSwipeItem({ ...props }: TTodoListSwipeItem) {
  //swipe active
  const [active, setActive] = React.useState(false);
  const [initX, setInitX] = React.useState<number | undefined>(undefined);
  const [swipe, setSwipe] = React.useState<string>("r");
  return (
    <>
      <div
        className="w-96"
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
          setActive(true);
          setInitX(e.clientX);
        }}
        onMouseUp={() => {
          setActive(false);
        }}
        onMouseOut={() => setActive(false)}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          if (active) {
            if (e.clientX - initX! > 10 && swipe !== "r") {
              console.log("right");
              setSwipe("r");
            } else if (e.clientX - initX! < -10 && swipe !== "l") {
              console.log("left");
              setSwipe("l");
            }
          }
        }}
      >
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames={
              swipe === "l" ? "swipe-left" : swipe === "r" ? "swipe-right" : ""
            }
            timeout={500}
            key={swipe}
          >
            <div className="w-full h-full">
              <TodoListItem
                id={props.id}
                content={props.content}
                index={props.index}
              />
            </div>
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames={swipe === "l" ? "fade-left" : "fade-right"}
            timeout={500}
            key={swipe}
          >
            <button
              type="button"
              className={[
                "text-white border border-ele-error hover:bg-ele-error hover:text-white focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm text-center inline-flex items-center",
                "dark:border-ele-error dark:text-white dark:hover:text-white dark:focus:ring-amber-800 dark:hover:bg-ele-error",
                "p-4 active:bg-ele-error/80 dark:active:bg-ele-error/80",
                "bg-ele-error/80 dark:bg-ele-error/80",
                "h-[52px] w-[52px]",
                swipe === "l" ? "z-10" : "-z-10"
              ].join(" ")}
              onClick={() => {
                setSwipe("r");
              }}
            >
              <FaTrashCan className="w-4 h-auto" />
              <span className="sr-only">Icon description</span>
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
