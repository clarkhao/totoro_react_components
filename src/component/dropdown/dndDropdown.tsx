import React, { MouseEventHandler } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarCheck } from "react-icons/fa6";
import "../avatar/avatar.css";
import { FaGripVertical, FaCircleXmark } from "react-icons/fa6";
import sanitizeHtml from "sanitize-html";
import { DndListContext, TItem } from "../next-dnd-list/dndListHook";
import { TagSelect } from "../richText/tagSelect";
import { CustomDropdown } from "./customDropdown";

type TTodoListItem = {
  /**
   * id
   */
  id: string;
  /**
   * index
   */
  index: number;
  /**
   * content
   */
  content: Omit<TItem, "position" | "offset" | "active">;
};

export function TodoListItem({ ...props }: TTodoListItem) {
  //dnd context
  const dnd = React.useContext(DndListContext);
  //main content of item
  const overallRef = React.useRef<HTMLDivElement>(null);

  const onContentBlur = React.useCallback((evt: React.FocusEvent) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    dnd?.dndListDispatch({
      type: "set-item-content",
      payload: {
        index: props.index,
        content: sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf),
      },
    });
  }, [dnd, props.index]);

  const handleCompleted = () => {
    dnd?.dndListDispatch({
      type: "set-item-completed",
      payload: { index: props.index, completed: !props.content.completed },
    });
  };
  const handleDelete = (i: number) => {
    dnd?.dndListDispatch({ type: "delete-item", payload: { index: i } });
  };
  return (
    <div
      className={[
        "w-full relative group flex flex-col items-end h-fit shadow-lg min-w-[384px] max-w-[400px]",
      ].join(" ")}
      ref={overallRef}
    >
      <FaCircleXmark
        className={[
          "absolute right-0 top-0 w-6 h-auto translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer",
          "hover:fill-ele-error active:fill-ele-error/80",
        ].join(" ")}
        onClick={() => handleDelete(props.index)}
      />
      <div className="w-full flex flex-col">
        <div
          className={[
            "flex w-full flex-row justify-center items-start space-x-2 bg-gray-200  p-1 pt-2 pr-2 dark:bg-gray-600 rounded-t-md",
            "",
          ].join(" ")}
        >
          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              onMouseDown={() => {
                dnd?.dndListDispatch({
                  type: "set-item-active",
                  payload: { index: props.index, active: true },
                });
              }}
              onMouseUp={() => {
                console.log("up");
              }}
              onMouseLeave={() => {
                dnd?.dndListDispatch({
                  type: "set-item-active",
                  payload: { index: props.index, active: false },
                });
              }}
              className="h-10 w-6 text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-move transition border-r"
            >
              <FaGripVertical className="" />
            </button>
            <input
              id="link-checkbox"
              type="checkbox"
              onChange={handleCompleted}
              checked={props.content.completed}
              className={[
                "w-6 h-6 text-brand-primary bg-gray-100 dark:text-brand-primary border-gray-400 rounded focus:ring-rose-300 focus:ring-2",
                "rounded-full cursor-pointer",
              ].join(" ")}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div
              id={`todolist-content-${props.id}`}
              contentEditable={true}
              onBlur={onContentBlur}
              className={[
                "block p-2.5 w-full text-sm rounded-lg border-none ",
                "text-gray-900 bg-gray-200 focus:outline-gray-300",
                "dark:bg-gray-600 dark:text-white dark:focus:outline-gray-600 dark:focus:outline-1",
                "hover:bg-gray-300 dark:hover:bg-gray-500 cursor-text",
              ].join(" ")}
              dangerouslySetInnerHTML={{ __html: props.content.content }}
            />
          </div>
          <CustomDropdown
            clickable={ClickedDue}
            due={props.content.due}
            childHeight={308}
            isAbs
          >
            <div className="z-20">
              <Calendar
                onChange={(value) =>
                  dnd?.dndListDispatch({
                    type: "set-item-due",
                    payload: { index: props.index, due: value as Date },
                  })
                }
                value={props.content.due}
                className="dark:bg-gray-700 dark:text-gray-300 rounded-md"
              />
            </div>
          </CustomDropdown>
        </div>
        <article
          className={[
            "bg-gray-200 p-1 pl-8 dark:bg-gray-600 text-xs text-gray-500/50 dark:text-gray-200/50 rounded-b-md",
            "cursor-pointer",
          ].join(" ")}
        >
          <TagSelect index={props.index} />
        </article>
      </div>
    </div>
  );
}

const ClickedDue = ({ handler, ...props }: Record<string, unknown>) => {
  return (
    <div
      className="inline-flex flex-col items-end cursor-pointer m-2 mt-[10px] "
      onClick={handler as MouseEventHandler<HTMLDivElement> | undefined}
    >
      {(props.due as Date) ? (
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-row justify-center items-center gap-2">
          <FaCalendarCheck className="text-base " />
          <span>
            {new Date(props.due as string)?.toLocaleDateString() ===
            new Date().toLocaleDateString()
              ? "Today"
              : new Date(props.due as string)?.toLocaleDateString()}
          </span>
        </span>
      ) : null}
    </div>
  );
};
