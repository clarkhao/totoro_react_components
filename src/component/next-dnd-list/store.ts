import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { logger } from "../store/logger";
type TSortGroup = { [key: string]: number };

type TState = {
  sort: Array<TSortGroup>;
};
type Action = {
  setSortGroup: (
    fn: (prevSorts: Array<TSortGroup>) => Array<TSortGroup>,
  ) => void;
};

const initialState: TState = {
  sort: [],
};

export const useSortStore = create<
  TState & Action,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/persist", TState & Action],
  ]
>(
  logger(
    subscribeWithSelector((set) => ({
      ...initialState,
      setSortGroup: (fn) =>
        set((state) => ({
          sort: fn(state.sort),
        })),
    })),
  ),
);
