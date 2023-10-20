import React from "react";
import { DndListContext } from "./dndListHook";

interface IDraggable extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * index
   */
  index: number;
  /**
   * className
   */
  className?: string;
}

export function CustomDraggable({ ...props }: IDraggable) {
  const dnd = React.useContext(DndListContext);
  const eleRef = React.useRef<HTMLDivElement>(null);
  const [initPos, setInitPos] = React.useState({ x: 0, y: 0 });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    dnd?.dndListDispatch({
      type: "set-init-dragged",
      payload: +((event.target as HTMLDivElement).dataset.index ?? 0),
    });
    const position = eleRef.current?.getBoundingClientRect();
    /*
    event.dataTransfer?.setData(
      "text/plain",
      `${'[data-index="1"]'}/${position?.left}/${position?.top}`
    );
    */
    dnd?.dndListDispatch({
      type: "set-item-position",
      payload: {
        index: props.index,
        x: position?.left ?? 0,
        y: position?.top ?? 0,
      },
    });
    event.dataTransfer!.effectAllowed = "move";
    setInitPos({ x: event.clientX, y: event.clientY });
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    const offsetX = event.clientX - initPos.x;
    const offsetY = event.clientY - initPos.y;
    dnd?.dndListDispatch({
      type: "set-item-offset",
      payload: { index: props.index, x: offsetX, y: offsetY },
    });
  };
  const handleDropOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    dnd?.dndListDispatch({
      type: "set-dropped",
      payload: props.index,
    });
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(dnd?.dndListState.dragged, dnd?.dndListState.dropped);
    dnd?.dndListDispatch({type: "set-init-dragged", payload: -1})
  };
  return (
    <div
      ref={eleRef}
      className={props.className}
      draggable={dnd?.dndListState.list[props.index]?.active}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragOver={handleDropOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      style={{
        cursor: "move",
      }}
      data-index={props.index}
      {...props}
    >
      {props.children}
    </div>
  );
}
