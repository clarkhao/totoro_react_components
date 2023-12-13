//components
import { Button } from "../button/button";
import { Carousel } from "../carousel/carouselWithNext";
import Rating from "../rating/rating";
//hooks
import { useCartStore } from "../next-list/cart/cartStore";
import React, { useRef } from "react";

type TItem = {
  item: Record<string, unknown>;
};
const speed = 500,
  curveDelay = 300;
export default function Product({ item }: TItem) {
  const [setCartItems, cartPos] = useCartStore((state) => [
    state.setCartItems,
    state.cartPos,
  ]);
  const timerRef = useRef(0);
  const removeRef = useRef(0);
  const productId = (
    item.variants as { edges: Array<Record<string, { id: string }>> }
  ).edges[0].node.id;
  const title = item.title as string;
  const image = (
    item.images as { edges: Array<Record<string, { url: string }>> }
  ).edges[0].node.url;
  const price = (
    item.variants as {
      edges: Array<Record<string, { price: { amount: number } }>>;
    }
  ).edges[0].node.price.amount;
  const handeAddToCart = () => {
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
  }, [cartPos.x, cartPos.y, item]);
  return (
    <>
      <div className="w-full relative max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Carousel
          imageUrls={(item.images as {edges: Array<Record<string, unknown>>}).edges.map(
            (el: Record<string, unknown>) => {
              return {
                image: (el.node as {url: string}).url,
                blur: "data:image/webp;base64,UklGRpoDAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggrAEAAPAUAJ0BKoIAggA+7WinTjo/tKIvdcyT8B2JZwcFf3XZBhuL2ee87QNmeTYbfv1RLxwFhEG7VtpRFb3XJ1ZWEfdi9bXfKMsagJW58JSol95NFSfF87ZaYdN6wmHo9Kq2zAsz1DYA0UhY4r+pKtnp8okVEWncrGSd0mgh4Nwhk7yDv/yKx/zDqLfEH/8BXhOf1/BZbFtpnMkN+BW0313NjQPENa1BsGkYO16vRax+EqgAAP7yxOTSZnX0ryPJeD6LwwcUka4P98LegWO/a7T5WjfYCCJgTwJvVqwZCctGX2ITvenAS3qTKPl1SZ/jq+uHbyUXLRhwFPKuBMSV1xJ+Ti8LYNPMX9ca/uY7UxB3mEB9A9bUiONShWcvfvaOn0yj1rPoGoLF3428UU5OVpyq/45ACl81BaBu6LNDCVOm5541kuuAOAiJ8V3prtukrujA+zaK0P2PLDv4IKPlXkkLF5pf/y9QIDhJDiuVz4/GSaRTo74erxwQLW9MEK8rfRYRWqnqK+B1DmcLpcb6aVIb8jJAi7GQTRsoj2BhW4S1PKCQEOcQ91Gk5tkPgAAA",
              };
            }
          )}
          imageSize={{ width: 400, height: 400 }}
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
              {`$${price}`}
            </span>
            <Button
              size="small"
              isPrimary
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

