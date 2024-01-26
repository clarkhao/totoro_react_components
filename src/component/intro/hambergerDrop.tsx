import { NextDropdown } from "../../component/dropdown/dropdownV3";
import React from "react";
import {
  DropContext,
  useDropdown,
} from "../../component/dropdown/nextDropHook";
import { Hamberger } from "../../component/hamberger/hamberger";

type THambergerDrop = {
  /**
   * className
   */
  className?: string;
  /**
   * color
   */
  color: string;
  isLeft: boolean;
};

export function HambergerDrop({ ...props }: THambergerDrop) {
  const { dropState, dropDispatch } = useDropdown();
  return (
    <div className={["w-20", props.className].join(" ")}>
      <DropContext.Provider value={{ dropState, dropDispatch }}>
        <NextDropdown
          clickable={(data: Record<string, unknown>) => {
            console.log(data);
            return (
              <Hamberger
                color={props.color}
                id="blue-hamberger"
                drop={data.active as boolean}
              />
            );
          }}
          className={props.isLeft ? "-top-4 -left-4" : "-top-4 -right-4"}
          autoPos={{ auto: false, popupHeight: 0, popupWidth: 0 }}
          isByHover={false}
        >
          <section className="bg-gray-50 shadow-md pt-24 rounded-md">
            <ul className="p-4 flex flex-col justify-start items-start gap-2 transition-all">
              <li className="cursor-pointer">
                <a href="#home" className="text-lg hover:text-[#45f3ff]">
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#about" className="text-lg hover:text-[#45f3ff]">
                  About Me
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact" className="text-lg hover:text-[#45f3ff]">
                  Contact Me
                </a>
              </li>
            </ul>
            <div className="p-4 flex flex-col justify-start items-start gap-2">
              <h1 className="text-gray-400 text-lg">Say Hello</h1>
              <ul>
                <li className="cursor-pointer">
                  <a
                    href="mailto:clarktotoro@gmail.com"
                    className="text-lg hover:text-[#45f3ff]"
                  >
                    clarktotoro@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </NextDropdown>
      </DropContext.Provider>
    </div>
  );
}
