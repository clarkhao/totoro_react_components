import React from "react";

type TModalState = {
  isOpen: boolean;
};

type TModalPayload = {
  "toggle-modal": boolean;
};

export interface IModalAction {
  type: keyof TModalPayload;
  payload: TModalPayload[IModalAction["type"]];
}

const modalReducer = (state: TModalState, action: IModalAction) => {
  switch (action.type) {
    case "toggle-modal":
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

const initModalState: TModalState = {
  isOpen: false,
};

export function useModal() {
  const [modalState, modalDispatch] = React.useReducer(
    modalReducer,
    initModalState,
  );
  return { modalState, modalDispatch };
}

export type TModalHandle = {
  modalState: TModalState;
  modalDispatch: React.Dispatch<IModalAction>;
};

export const ModalContext = React.createContext<TModalHandle | null>(null);
