"use client";
import React from "react";

type TDropdown = {
  /**
   * title
   */
  title: string;
  /**
   * children
   */
  children: React.ReactNode;
};

export function Dropdown(props: TDropdown) {
  console.log(process.env.STORYBOOK);
  const [hidden, setHidden] = React.useState(true);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setHidden(true);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div
      className="flex flex-col justify-start items-center gap-2"
      ref={dropdownRef}
    >
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        className={[
          "group/btn bg-transparent border-gray-300 dark:focus:border-violet-500 border font-medium rounded-lg text-sm px-1 h-8 text-center inline-flex items-center justify-between",
          "text-black dark:text-white dark:border-gray-600",
          "focus:ring-violet-500 focus:ring-1",
        ].join(" ")}
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        <span
          className={[
            "block px-1 py-1 rounded-lg cursor-pointer",
            "inline-flex items-center gap-2",
          ].join(" ")}
        >
          {props.title}
        </span>
        <span className="shrink-0 transition duration-300 group-focus/btn:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        id="dropdownBgHover"
        className={[
          "z-10 bg-white rounded-lg shadow dark:bg-gray-700 w-fit",
          hidden ? "hidden" : "block",
        ].join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
}
