import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Image from "next/image";
//style
import "./carouselTransition.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type TCarousel = {
  /**
   * imageUrls
   */
  imageUrls: Array<{ image: string; blur: string }>;
  /**
   * imageSize
   */
  imageSize?: { width: number; height: number };
};

export function Carousel({ imageUrls, ...props }: TCarousel) {
  const [availableIndex, setAvailableIndex] = React.useState(0);
  const [isAscending, setAscending] = React.useState(true);
  const handleAsyncStateUpdate = async (next: boolean) => {
    return new Promise((resolve) => {
      setAscending(next);
      resolve("finished");
    });
  };

  return (
    <div className="relative min-w-min min-h-min">
      <TransitionGroup
        className={[
          "flex gap-0 overflow-hidden items-center justify-center min-h-[200px] max-h-[400px]",
          isAscending ? "flex-row" : "flex-row-reverse",
        ].join(" ")}
      >
        <CSSTransition
          key={availableIndex}
          timeout={{ exit: 500, enter: 500 }}
          classNames={isAscending ? "item-toleft" : "item-toright"}
        >
          <Image
            src={imageUrls[availableIndex].image}
            alt="image"
            width={props.imageSize?.width}
            height={props.imageSize?.height}
            placeholder="blur"
            blurDataURL={imageUrls[availableIndex].blur}
            loading="lazy"
          />
        </CSSTransition>
      </TransitionGroup>

      <span
        className={[
          "flex justify-center items-center gap-2 absolute bottom-4 left-0 right-0 mx-auto cursor-pointer",
        ].join(" ")}
      >
        {imageUrls.length > 1
          ? imageUrls.map((_, index) => (
              <>
                <FontAwesomeIcon
                  icon={faCircle}
                  key={`circle-${index}`}
                  fill={index !== availableIndex ? "gray" : "white"}
                  className={[
                    "w-3 h-auto",
                    index !== availableIndex
                      ? "text-gray-400"
                      : "text-gray-200",
                  ].join(" ")}
                  onClick={async () => {
                    let temp;
                    setAvailableIndex((prev) => {
                      temp = prev;
                      return prev;
                    });
                    await handleAsyncStateUpdate(index >= (temp ?? 1));
                    setAvailableIndex(index);
                  }}
                />
              </>
            ))
          : null}
      </span>
    </div>
  );
}
