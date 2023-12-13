import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import style from "./slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type TSlider = {
  /**
   * imageList
   */
  imageList: Array<{ from: string; to: string }>;
};

export function Slider({ ...props }: TSlider) {
  const onScrollLeft = () => {
    const ele = document.querySelector("[data-scroll]");
    ele?.scrollTo({ left: ele?.scrollLeft - 395, behavior: "smooth" });
  };
  const onScrollRight = () => {
    const ele = document.querySelector("[data-scroll]");
    ele?.scrollTo({ left: ele?.scrollLeft + 395, behavior: "smooth" });
  };
  const onClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="min-w-full h-[200px] relative">
      <section
        className={["w-full h-[200px] flex flex-row", style.slider].join(" ")}
        data-scroll
      >
        {props.imageList.map((el, i) => {
          return (
            <img
              key={`slider-${i}`}
              id={`slider-${i}`}
              src={el.from}
              alt="slider-photo"
              className={["cursor-pointer rounded-md", style.image].join(" ")}
              onClick={() => onClick(el.to)}
            />
          );
        })}
      </section>
      <div
        className={[
          "h-[200px] w-10 hover:bg-gray-400 hover:cursor-pointer absolute top-0",
          "rounded-tl-md rounded-bl-md",
        ].join(" ")}
        onClick={onScrollLeft}
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "20px", height: "auto", color: "#45f3ff" }}
        />
      </div>
      <div
        className={[
          "h-[200px] w-10 hover:bg-gray-400 hover:cursor-pointer absolute top-0 right-0",
          "rounded-tr-md rounded-br-md",
        ].join(" ")}
        onClick={onScrollRight}
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "20px", height: "auto", color: "#45f3ff" }}
        />
      </div>
    </div>
  );
}
