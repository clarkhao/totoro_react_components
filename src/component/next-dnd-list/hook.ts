"use client";
import React from "react";
import { getRandomColor } from "../badge/badge";
export type TSelected = {
  group: string;
  subGroup: number;
  key: string;
  value: string;
};
export type TTagContent = {
  content: string;
  color:
    | "blue"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
};

//state start
export type TFilterNSortState = {
  //category
  category: number;
  //all tags
  tags: Array<TTagContent>;
  filterTags: Array<string>;
  //sort
  sort: Array<{ [key: string]: number }>;
};

export type TFilterNSortPayload = {
  "set-category": number;
  "create-tag": string;
  "delete-tag": string;
  "select-filter-tags": string;
  "deselect-filter-tags": string;
  "create-select-group": number;
  "delete-select-group": number;
  "update-select-group": { index: number; key: string; value: number };
};

export type IFilterNSortAction = {
  type: keyof TFilterNSortPayload;
  payload: TFilterNSortPayload[IFilterNSortAction["type"]];
};

export function useFilterNSort() {
  const inputReducer = (
    state: TFilterNSortState,
    action: IFilterNSortAction
  ) => {
    switch (action.type) {
      case "set-category":
        return {
          ...state,
          category: action.payload as number,
        };
      case "create-tag":
        return {
          ...state,
          tags: [...state.tags]
            .map((el) => el.content)
            .includes(action.payload as TFilterNSortPayload["create-tag"])
            ? state.tags
            : [
                ...state.tags,
                {
                  content: action.payload as TFilterNSortPayload["create-tag"],
                  color: getRandomColor(),
                },
              ],
        };
      case "delete-tag":
        return {
          ...state,
          tags: [...state.tags].filter(
            (el) =>
              el.content !==
              (action.payload as TFilterNSortPayload["delete-tag"])
          ),
          filterTags: [...state.filterTags].filter(
            (el) => el !== (action.payload as TFilterNSortPayload["delete-tag"])
          ),
        };
      case "select-filter-tags":
        return {
          ...state,
          filterTags: [
            ...state.filterTags,
            action.payload as TFilterNSortPayload["select-filter-tags"],
          ],
        };
      case "deselect-filter-tags":
        return {
          ...state,
          filterTags: [...state.filterTags].filter(
            (el) =>
              el !==
              (action.payload as TFilterNSortPayload["deselect-filter-tags"])
          ),
        };
      case "create-select-group": {
        const payloadCreate =
          action.payload as TFilterNSortPayload["create-select-group"];
        const isExisted =
          [...state.sort].map((el) => el.type).indexOf(payloadCreate) !== -1;
        return {
          ...state,
          sort: isExisted
            ? [...state.sort]
            : [...state.sort, { type: payloadCreate, order: 0 }],
        };
      }
      case "delete-select-group": {
        const payloadDel =
          action.payload as TFilterNSortPayload["delete-select-group"];
        return {
          ...state,
          sort: [...state.sort].filter((_, i) => i !== payloadDel),
        };
      }
      case "update-select-group": {
        const payloadUpdate =
          action.payload as TFilterNSortPayload["update-select-group"];
        return {
          ...state,
          sort: [...state.sort].map((el, i) => {
            if (i === payloadUpdate.index) {
              return { ...el, [payloadUpdate.key]: payloadUpdate.value };
            } else {
              return el;
            }
          }),
        };
      }
      default:
        return state;
    }
  };
  const initFilterState: TFilterNSortState = {
    category: 0,
    tags: [],
    filterTags: [],
    sort: [],
  };
  const [filterState, filterDispatch] = React.useReducer(
    inputReducer,
    initFilterState
  );
  React.useEffect(() => {
    console.log(filterState);
  }, [filterState]);
  return { filterState, filterDispatch };
}
export type TFilterNSortHandle = {
  filterState: TFilterNSortState;
  filterDispatch: React.Dispatch<IFilterNSortAction>;
};
export const FilterNSortContext =
  React.createContext<TFilterNSortHandle | null>(null);

