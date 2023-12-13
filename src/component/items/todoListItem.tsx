import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarCheck } from "react-icons/fa6";
import { CSSTransition } from "react-transition-group";
import "../avatar/avatar.css";
import { FaGripVertical } from "react-icons/fa6";
import sanitizeHtml from "sanitize-html";
import { DndListContext, TItem } from "../next-dnd-list/dndListHook";
import { TagSelect } from "../richText/tagSelect";

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
  //checked controll the appearrance of calendar
  const [checked, setChecked] = React.useState(false);
  //main content of item
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);
  const overallRef = React.useRef<HTMLDivElement>(null);

  const [absPos, setAbsPos] = React.useState<string>("top-10");

  const onContentBlur = React.useCallback(
    (evt: React.FocusEvent) => {
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
    },
    [dnd, props.index],
  );
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !labelRef.current?.contains(event.target as Node)
      ) {
        setChecked(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  React.useEffect(() => {
    const position = overallRef.current?.getBoundingClientRect();
    const spaceAbove = position?.top;
    const spaceBelow = window.innerHeight - (position?.bottom ?? 0);
    const calendarHeight = 310;

    console.log(spaceAbove, position?.bottom, spaceBelow, window.innerHeight);
    if (spaceBelow >= calendarHeight || spaceBelow >= spaceAbove!) {
      console.log("top");
      setAbsPos("top-10");
    } else {
      console.log("bottom");
      setAbsPos("bottom-24");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dnd?.dndListState.list[props.index].active]);
  const handleCompleted = () => {
    dnd?.dndListDispatch({
      type: "set-item-completed",
      payload: { index: props.index, completed: !props.content.completed },
    });
  };
  return (
    <div
      className={["w-full flex flex-col items-end relative h-fit"].join(" ")}
      ref={overallRef}
    >
      <div className="w-full flex flex-col">
        <div className="flex w-full flex-row justify-center items-start space-x-2 bg-gray-200  p-1 pt-2 pr-2 dark:bg-gray-600 min-w-[350px] rounded-t-md">
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
                console.log("not active");
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
                "hover:bg-gray-300 dark:hover:bg-gray-500",
              ].join(" ")}
              dangerouslySetInnerHTML={{ __html: props.content.content }}
            />
          </div>
          <label
            className="relative inline-flex flex-col items-end cursor-pointer m-2 mt-[10px]"
            ref={labelRef}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={console.log}
              className="sr-only peer"
              onClick={() => setChecked(!checked)}
            />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-row justify-center items-center gap-2">
              <FaCalendarCheck className="text-base " />
              <span>
                {props.content.due.toLocaleDateString() ===
                new Date().toLocaleDateString()
                  ? "Today"
                  : props.content.due?.toLocaleDateString()}
              </span>
            </span>
          </label>
        </div>
        <article
          className={[
            "bg-gray-200 p-1 pl-8 dark:bg-gray-600 text-xs text-gray-500/50 dark:text-gray-200/50 rounded-b-md",
            "cursor-pointer ",
          ].join(" ")}
        >
          <TagSelect index={props.index} />
        </article>
      </div>
      <div ref={calendarRef} className={["z-50 absolute", absPos].join(" ")}>
        <CSSTransition
          in={checked}
          timeout={300}
          classNames="avatar"
          unmountOnExit
        >
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
        </CSSTransition>
      </div>
    </div>
  );
}
