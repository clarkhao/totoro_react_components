import React from "react";
import { TCompare } from "../../../utils/zod";

type TCompareList = {
  data: TCompare[];
};

export function CompareList({ data }: TCompareList) {
  console.log(data);
  return (
    <>
      {data.map((el, index) => {
        return (
          <span
            key={`${el.kind}-${index}`}
            className="flex flex-row justify-start items-center gap-x-2"
          >
            <span
              className={[
                "w-2 h-2 md:w-3 md:h-3 rounded-full bg-ele-success",
                `${
                  el.value === true
                    ? "bg-light-error dark:bg-dark-error"
                    : el.value === false
                      ? "bg-light-success dark:bg-dark-success"
                      : "bg-orange-400 dark:bg-orange-500"
                }`,
              ].join(" ")}
            ></span>
            <p className="text-xs">{el.message}</p>
          </span>
        );
      })}
    </>
  );
}
