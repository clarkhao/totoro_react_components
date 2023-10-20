"use client";
import React from "react";

export type TFilterState = {
  selected: number;
  search: string;
};

export type TFilterPayload = {
  "set-selected": number;
  "set-search": string;
};

export interface IFilterAction {
  type: keyof TFilterPayload;
  payload: TFilterPayload[IFilterAction["type"]];
}

export function useFilter() {
  const inputReducer = (state: TFilterState, action: IFilterAction) => {
    switch (action.type) {
      case "set-selected":
        return {
          ...state,
          selected: action.payload as number,
        };
      case "set-search":
        return {
          ...state,
          search: action.payload as string,
        };
      default:
        return state;
    }
  };
  const initFilterState: TFilterState = {
    selected: 0,
    search: "",
  };
  const [filterState, filterDispatch] = React.useReducer(
    inputReducer,
    initFilterState
  );
  React.useEffect(() => {
    console.log(
      `selected: ${filterState.selected}, search: ${filterState.search}`
    );
  }, [filterState]);
  return { filterState, filterDispatch };
}
export type TFilterHandle = {
  filterState: TFilterState;
  filterDispatch: React.Dispatch<IFilterAction>;
};
export const FilterContext = React.createContext<TFilterHandle | null>(null);
