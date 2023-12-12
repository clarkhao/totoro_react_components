import React from "react";

type TDropState = {
  isActive: boolean;
};

type TDropPayload = {
  "set-active": boolean;
};

export interface IDropAction {
  type: keyof TDropPayload;
  payload: TDropPayload[IDropAction["type"]];
}

export function useDropdown() {
  const dropReducer = (state: TDropState, action: IDropAction) => {
    switch (action.type) {
      default:
        return {
          ...state,
          isActive: action.payload,
        };
    }
  };
  const initDropState: TDropState = {
    isActive: false,
  };
  const [dropState, dropDispatch] = React.useReducer(
    dropReducer,
    initDropState,
  );
  React.useEffect(() => {
    console.log(dropState.isActive);
  }, [dropState.isActive]);
  return { dropState, dropDispatch };
}
export type TDropHandle = {
  dropState: TDropState;
  dropDispatch: React.Dispatch<IDropAction>;
};
export const DropContext = React.createContext<TDropHandle | null>(null);
