import { StateCreator, StoreMutatorIdentifier } from "zustand";
export type TToastMsg = {
    id: string;
    bingo: boolean;
    msg: string;
};
type Logger = <T, Mps extends [StoreMutatorIdentifier, unknown][] = [], Mcs extends [StoreMutatorIdentifier, unknown][] = []>(f: StateCreator<T, Mps, Mcs>, name?: string) => StateCreator<T, Mps, Mcs>;
export declare const logger: Logger;
export type TUserInfo = {
    email: string;
    email_verified: boolean;
    picture: string;
    sub: string;
    username: string;
};
type TState = {
    toastMsg: Array<TToastMsg>;
};
type Action = {
    reset: () => void;
    setToastMsg: (fn: (prevToasts: TToastMsg[]) => TToastMsg[]) => void;
};
export declare const useToastStore: import("zustand").UseBoundStore<Omit<Omit<import("zustand").StoreApi<TState & Action>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: TState & Action, previousSelectedState: TState & Action) => void): () => void;
        <U>(selector: (state: TState & Action) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<TState & Action, Omit<TState & Action, "toastMsg">>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: TState & Action) => void) => () => void;
        onFinishHydration: (fn: (state: TState & Action) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<TState & Action, Omit<TState & Action, "toastMsg">>>;
    };
}>;
export {};
