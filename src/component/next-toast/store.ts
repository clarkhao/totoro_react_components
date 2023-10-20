import { create, StateCreator, StoreMutatorIdentifier } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
export type TToastMsg = { id: string; bingo: boolean; msg: string };
type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  f: StateCreator<T, Mps, Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>;

type LoggerImpl = <T>(
  f: StateCreator<T, [], []>,
  name?: string
) => StateCreator<T, [], []>;

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  const loggedSet: typeof set = (...a) => {
    set(...a);
    console.log(...(name ? [`${name}:`] : []), get());
  };
  store.setState = loggedSet;

  return f(loggedSet, get, store);
};

export const logger = loggerImpl as unknown as Logger;
/********************************************************************************************/
type TState = {
  toastMsg: Array<TToastMsg>;
};
type Action = {
  reset: () => void;
  setToastMsg: (fn: (prevToasts: TToastMsg[]) => TToastMsg[]) => void;
};

const initialState: TState = {
  toastMsg: [],
};

export const useToastStore = create<
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
      setToastMsg: (fn) =>
        set((state) => ({
          toastMsg: fn(state.toastMsg),
        })),
    }))
  )
);
/***************************************************************************************/
