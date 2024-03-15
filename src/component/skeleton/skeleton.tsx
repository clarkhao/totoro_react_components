import React from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton() {
  return (
    <div
      className={twMerge(
        "w-full h-[400px] max-w-[400px] flex flex-col justify-evenly items-center animate-pulse",
      )}
    >
      <span className="flex flex-row w-full justify-evenly items-center">
        {new Array(3).fill(0).map((el, index) => {
          return (
            <span
              key={`${index}-signup-skeleton`}
              className="flex flex-col justify-center items-center gap-y-2"
            >
              <span className="bg-gray-200 rounded-full dark:bg-gray-700 w-16 h-5"></span>
              <span className="bg-gray-300 rounded-full dark:bg-gray-700 w-5 h-5"></span>
            </span>
          );
        })}
      </span>
      <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="w-full flex flex-row justify-evenly items-center">
        {new Array(6).fill(0).map((el, index) => {
          return (
            <span
              key={`${index}-signup-skeleton-second`}
              className="w-16 h-12 rounded-lg bg-gray-300 dark:bg-gray-700"
            ></span>
          );
        })}
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="h-10 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  );
}
