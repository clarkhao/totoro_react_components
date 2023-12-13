"use client";
import React from "react";

export type TDndState = {
  position: { x: number; y: number };
  offset: { x: number; y: number };
  active: boolean;
};
export type TDndPayload = {
  "set-position": { x: number; y: number };
  "set-offset": { x: number; y: number };
  "set-active": boolean;
};
export type IDndAction = {
  type: keyof TDndPayload;
  payload: TDndPayload[IDndAction["type"]];
};
export function useDnd() {
  const dndReducer = (state: TDndState, action: IDndAction) => {
    switch (action.type) {
      case "set-position":
        return {
          ...state,
          position: action.payload as TDndPayload["set-position"],
        };
      case "set-offset":
        return {
          ...state,
          offset: action.payload as TDndPayload["set-offset"],
        };
      case "set-active":
        return {
          ...state,
          active: action.payload as TDndPayload["set-active"],
        };
      default:
        return state;
    }
  };
  const initDndState: TDndState = {
    position: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    active: false,
  };
  const [dndState, dndDispatch] = React.useReducer(dndReducer, initDndState);

  return { dndState, dndDispatch };
}
export type TDndHandle = {
  dndState: TDndState;
  dndDispatch: React.Dispatch<IDndAction>;
};
export const DndContext = React.createContext<TDndHandle | null>(null);
