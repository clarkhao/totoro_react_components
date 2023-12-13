import { create } from "zustand";
import { logger } from "../../store/logger";
export type TCartItemState = {
  productId: string;
  quantity: number;
  title: string;
  image: string;
  price: number;
};
type TState = {
  cartItems: {
    [key: string]: TCartItemState;
  };
  cartPos: { x: number; y: number };
};
type Action = {
  reset: () => void;
  setCartItems: (
    fn: (prevCartItems: { [key: string]: TCartItemState }) => {
      [key: string]: TCartItemState;
    },
  ) => void;
  setCartPos: (x: number, y: number) => void;
};

const initialState: TState = {
  cartItems: {},
  cartPos: { x: 0, y: 0 },
};
export const useCartStore = create<TState & Action>(
  logger((set) => ({
    ...initialState,
    reset: () => {
      set(initialState);
    },
    setCartItems: (fn) =>
      set((state) => ({
        cartItems: fn(state.cartItems),
      })),
    setCartPos: (x, y) => set(() => ({ cartPos: { x, y } })),
  })),
);
