//components
import { Button } from "../button/button";
import { Carousel } from "../carousel/carousel";
import Rating from "../rating/rating";
//hooks
import { useCartStore } from "../next-list/cart/cartStore";
import React, { useRef } from "react";

type TItem = {
  item: Record<string, any>;
};
const speed = 500,
  curveDelay = 300;
export default function Product({ item, ...props }: TItem) {
  const [cartItems, setCartItems, cartPos] = useCartStore((state) => [
    state.cartItems,
    state.setCartItems,
    state.cartPos,
  ]);
  const timerRef = useRef(0);
  const removeRef = useRef(0);
  const productId = item.variants.edges[0].node.id;
  const title = item.title;
  const image = item.images.edges[0].node.url;
  const price = item.variants.edges[0].node.price.amount;
  const handeAddToCart = (e: React.MouseEvent) => {
    window.setTimeout(() => {
      setCartItems((prev) => {
        return {
          ...prev,
          [productId]: {
            productId,
            quantity: (prev[productId]?.quantity ?? 0) + 1,
            title,
            image,
            price,
          },
        };
      });
    }, 1000);
  };
  React.useEffect(() => {
    const btn = document.querySelector(
      `button[data-addtocart="${(item.id as string).split("/").reverse()[0]}"]`
    ) as HTMLButtonElement;
    const addItem = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLButtonElement;
      const position = target.getBoundingClientRect();
      const flyingBtn = document.createElement("div");
      flyingBtn.style.width = "30px";
      flyingBtn.style.height = "30px";
      flyingBtn.style.borderRadius = "50%";
      flyingBtn.style.backgroundColor = "#FF2773";
      flyingBtn.style.position = "fixed";
      flyingBtn.style.top = position.top + "px";
      flyingBtn.style.left = position.left + "px";
      flyingBtn.style.zIndex = "9999";

      flyingBtn.style.opacity = "1";
      flyingBtn.style.transition = `all ${speed / 1000}s ease, top ${
        (speed + curveDelay) / 1000
      }s ease, left ${speed / 1000}s ease, transform ${speed / 1000}s ease ${
        (speed - 10) / 1000
      }s`;
      document.body.appendChild(flyingBtn);

      timerRef.current = window.setTimeout(() => {
        flyingBtn.style.top = `${cartPos.y}px`;
        flyingBtn.style.left = `${cartPos.x}px`;
        flyingBtn.style.height = "1rem";
        flyingBtn.style.width = "1rem";
        flyingBtn.style.transform = "scale(0)";
      }, 0);
      removeRef.current = window.setTimeout(() => {
        flyingBtn.remove();
      }, 1000);
    };

    btn?.addEventListener("click", addItem);
    return () => {
      btn?.removeEventListener("click", addItem);
      window.clearTimeout(timerRef.current);
      window.clearTimeout(removeRef.current);
    };
  }, [item]);
  return (
    <>
      <div className="w-full relative max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Carousel
          imageUrls={item.images.edges.map(
            (el: Record<string, any>) => el.node.url
          )}
          imageSize={{ width: 450, height: 450 }}
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <Rating size="small" stars={5} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {5}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {`\$${price}`}
            </span>
            <Button
              size="small"
              variant="primary"
              moreAnimated
              onClick={handeAddToCart}
              addToCart={(item.id as string).split("/").reverse()[0]}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
