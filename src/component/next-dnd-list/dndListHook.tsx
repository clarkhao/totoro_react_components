"use client";
import React from "react";

//list item data
export type TItem = {
  selectedTags: Array<string>;
  due: Date;
  content: string;
  completed: boolean;
  position: { x: number; y: number };
  offset: { x: number; y: number };
  active: boolean;
};

export type TDndListState = {
  //list data
  list: Array<TItem>;
  /**
   * init dragged
   */
  dragged: number;
  dropped: number;
  lastDragged: number;
};
export type TDndListPayload = {
  "create-item": { content: string; x?: number; y?: number };
  "delete-item": { index: number };
  "set-item-tags": { index: number; tags: Array<string> };
  "set-item-due": { index: number; due: Date };
  "set-item-content": { index: number; content: string };
  "set-item-completed": { index: number; completed: boolean };
  "set-item-position": { index: number; x: number; y: number };
  "set-item-offset": { index: number; x: number; y: number };
  "set-item-active": { index: number; active: boolean };
  "set-init-dragged": number;
  "set-dropped": number;
  "sort-list": { from: number; to: number };
};
export type IDndListAction = {
  type: keyof TDndListPayload;
  payload: TDndListPayload[IDndListAction["type"]];
};
export function useDndList() {
  const dndReducer = (state: TDndListState, action: IDndListAction) => {
    switch (action.type) {
      case "create-item":
        return {
          ...state,
          list: [
            ...state.list,
            {
              selectedTags: [],
              due: new Date(),
              content: (action.payload as TDndListPayload["create-item"])
                .content,
              completed: false,
              position: {
                x: (action.payload as TDndListPayload["create-item"]).x ?? 0,
                y: (action.payload as TDndListPayload["create-item"]).y ?? 0,
              },
              offset: { x: 0, y: 0 },
              active: false,
            },
          ],
        };
      case "delete-item": {
        const deepCopyList = JSON.parse(JSON.stringify(state.list));
        return {
          ...state,
          list: (deepCopyList as TItem[]).filter(
            (_, i) =>
              i !== (action.payload as TDndListPayload["delete-item"]).index
          ),
        };
      }
      case "set-item-tags":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-tags"]).index
            ) {
              return {
                ...el,
                selectedTags: (
                  action.payload as TDndListPayload["set-item-tags"]
                ).tags,
              };
            } else {
              return el;
            }
          }),
        };
      case "set-item-due":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-due"]).index
            ) {
              return {
                ...el,
                due: (action.payload as TDndListPayload["set-item-due"]).due,
              };
            } else {
              return el;
            }
          }),
        };
      case "set-item-content":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-content"]).index
            ) {
              return {
                ...el,
                content: (action.payload as TDndListPayload["set-item-content"])
                  .content,
              };
            } else {
              return el;
            }
          }),
        };
      case "set-item-completed":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-completed"]).index
            ) {
              return {
                ...el,
                completed: (
                  action.payload as TDndListPayload["set-item-completed"]
                ).completed,
              };
            } else {
              return el;
            }
          }),
        };
      case "set-item-position":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-position"]).index
            ) {
              return {
                ...el,
                position: {
                  x: (action.payload as TDndListPayload["set-item-position"]).x,
                  y: (action.payload as TDndListPayload["set-item-position"]).y,
                },
              };
            } else {
              return el;
            }
          }),
        };
      case "set-item-offset":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-offset"]).index
            ) {
              return {
                ...el,
                offset: {
                  x: (action.payload as TDndListPayload["set-item-offset"]).x,
                  y: (action.payload as TDndListPayload["set-item-offset"]).y,
                },
              };
            } else {
              return el;
            }
          }),
        };
      case "set-item-active":
        return {
          ...state,
          list: [...state.list].map((el, index) => {
            if (
              index ===
              (action.payload as TDndListPayload["set-item-active"]).index
            ) {
              return {
                ...el,
                active: (action.payload as TDndListPayload["set-item-active"])
                  .active,
              };
            } else {
              return el;
            }
          }),
        };
      case "set-init-dragged":
        return {
          ...state,
          dragged: action.payload as TDndListPayload["set-init-dragged"],
          dropped: -1,
          lastDragged: -1,
        };
      case "set-dropped":
        return {
          ...state,
          dropped: action.payload as TDndListPayload["set-dropped"],
        };
      case "sort-list": {
        const temp = [...state.list];
        const payload = action.payload as TDndListPayload["sort-list"];
        const choose = temp.splice(payload.from, 1);
        temp.splice(payload.to, 0, choose[0]);
        console.log(choose);
        console.log(temp);
        return {
          ...state,
          list: temp,
          dragged: state.dropped,
          lastDragged: state.dragged,
        };
      }
      default:
        return state;
    }
  };
  const initDndState: TDndListState = {
    list: [],
    dragged: -1,
    dropped: -1,
    lastDragged: -1,
  };
  const [dndListState, dndListDispatch] = React.useReducer(
    dndReducer,
    initDndState
  );
  React.useEffect(() => {
    if (dndListState.dragged === dndListState.dropped) {
      return;
    }
    if (dndListState.dropped > -1) {
      console.log(dndListState.dropped, dndListState.dragged);
      dndListDispatch({
        type: "sort-list",
        payload: { from: dndListState.dropped, to: dndListState.dragged },
      });
    }
  }, [dndListState.dragged, dndListState.dropped]);
  React.useEffect(() => {
    console.log(dndListState);
  }, [dndListState]);
  return { dndListState, dndListDispatch };
}
export type TDndListHandle = {
  dndListState: TDndListState;
  dndListDispatch: React.Dispatch<IDndListAction>;
};
export const DndListContext = React.createContext<TDndListHandle | null>(null);

