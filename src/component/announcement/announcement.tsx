"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconButton } from "../badge/iconButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import style from "./announcement.module.css";

type TAnnouncement = {
  animated: boolean;
  text: string;
};

export function Announcement({ animated = true, ...props }: TAnnouncement) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [w, setWidth] = React.useState(0);
  React.useEffect(() => {
    const handleResize = () => {
      console.log("start to resize");
      const width = divRef.current?.clientWidth;
      setWidth(width ?? 0);
      (divRef.current as HTMLElement).style.setProperty(
        "--translate-width",
        `${width}px`,
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animated]);
  return (
    <div
      className={twMerge(
        "flex items-center justify-between gap-4 bg-indigo-600 px-4 py-2 text-white",
        "overflow-hidden",
        style.cycle,
      )}
      ref={divRef}
    >
      <p
        className={twMerge(
          "text-sm font-medium text-left overflow-hidden",
          `${animated ? (w <= 480 ? style.sm : style.md) : ""}`,
        )}
      >
        {props.text}{" "}
        <Link href="#" className="inline-block underline">
          Check out more!
        </Link>
      </p>
      <IconButton
        size={"small"}
        fill={"borderless"}
        shape={"square"}
        disabled={false}
        className={twMerge(
          "bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-600 focus:ring-0",
          "dark:bg-indigo-700 dark:hover:bg-indigo-500 dark:active:bg-indigo-600 dark:focus:ring-0",
        )}
      >
        <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
      </IconButton>
    </div>
  );
}
