import { Button } from "../../button/button";
import { FaPaypal, FaApplePay } from "react-icons/fa6";
import { TCartItemState, useCartStore } from "./cartStore";
import { CartItem } from "../../items/cartItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./cartItem-transition.css";
import { ModalContext } from "../../modal/hook";
import React from "react";
import { Number } from "../../group-text-animation/number";

type TCartList = {
  /**
   * items?
   */
  items?: {
    [key: string]: TCartItemState;
  };
};

export function CartList({ ...props }: TCartList) {
  const [cartItems, setCartItems] = useCartStore((state) => [
    state.cartItems,
    state.setCartItems,
  ]);
  const modal = React.useContext(ModalContext);
  const initTotal = Object.values(cartItems).reduce((acc, el) => {
    acc += el.price * el.quantity;
    return acc;
  }, 0);
  const prevNum = React.useRef(initTotal.toFixed(2));
  React.useEffect(() => {
    prevNum.current = (total ?? "0").toString();
  }, [cartItems]);
  const total = React.useMemo(() => {
    return Object.values(cartItems).reduce((acc, el) => {
      acc += el.price * el.quantity;
      return acc;
    }, 0);
  }, [cartItems]);

  const handleRemove = (id: string) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };
  return (
    <>
      <div className="my-4 space-y-6 flex flex-col justify-center items-center overflow-auto">
        {Object.keys(cartItems ?? props.items).length > 0 ? (
          <>
            <ul className="space-y-4 w-full h-full">
              <TransitionGroup component={null}>
                {Object.values(cartItems ?? props.items).map((item, index) => (
                  <CSSTransition
                    key={item.productId}
                    timeout={300}
                    classNames="cart-item"
                  >
                    <li
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <CartItem
                        item={item}
                        handleRemove={() => handleRemove(item.productId)}
                      />
                    </li>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ul>
            <div className="w-full border-t flex flex-row justify-between items-center font-bold">
              <span>Sub total</span>
              <span>
                $
                <Number
                  size="base"
                  numbers={{
                    start: prevNum.current.toString(),
                    end: total.toFixed(2),
                  }}
                />
              </span>
            </div>
            <div className="space-y-4 text-center w-48">
              <Button variant="primary" size="base" width="w-full">
                Check out
              </Button>
            </div>
          </>
        ) : (
          <div>Shopping Cart currently empty</div>
        )}
        <button
          className={[
            "inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600",
            Object.keys(cartItems).length > 0
              ? ""
              : "dark:text-brand-primary-light text-brand-primary-light",
          ].join(" ")}
          onClick={() =>
            modal?.modalDispatch({ type: "toggle-modal", payload: false })
          }
        >
          Continue shopping
        </button>
      </div>
    </>
  );
}
