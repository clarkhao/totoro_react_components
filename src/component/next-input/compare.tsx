import React from "react";
import { TCompare } from "../../utils/zod";

type TCompareList = {
  data: TCompare[];
};

export function CompareList({ data }: TCompareList) {
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
                "w-3 h-3 rounded-full bg-ele-success",
                `${
                  el.value
                    ? "bg-light-error dark:bg-dark-error"
                    : "bg-light-success dark:bg-dark-success"
                }`,
              ].join(" ")}
            ></span>
            <p>{el.message}</p>
          </span>
        );
      })}
    </>
  );
}
