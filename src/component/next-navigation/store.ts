import { create, StateCreator, StoreMutatorIdentifier } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { logger } from "../store/logger";

type TState = {
  route: string;
  groupIndex: number;
};
type Action = {
  reset: () => void;
  setRoute: (newRoute: string) => void;
  setGroup: (groupIndex: number) => void;
};

const initialState: TState = {
  route: "",
  groupIndex: 0,
};

export const useMenuStore = create<
  TState & Action,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/persist", Omit<TState & Action, "toastMsg">]
  ]
>(
  logger(
    subscribeWithSelector((set) => ({
      ...initialState,
      reset: () => {
        set(initialState);
      },
      setRoute: (newRoute) => set((state) => ({ ...state, route: newRoute })),
      setGroup: (newGroup) =>
        set((state) => ({ ...state, groupIndex: newGroup })),
    }))
  )
);