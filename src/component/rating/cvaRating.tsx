import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VariantProps, cva } from "class-variance-authority";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { ClickConfetti } from "../confetti/confetti";

const rating = cva(
  [
    "cursor-pointer",
    "hover:text-yellow-400",
    "transition-colors duration-300 ease-in-out",
  ],
  {
    variants: {
      size: {
        sm: ["w-4 h-auto"],
        md: ["w-6 h-auto"],
        lg: ["w-10 h-auto"],
      },
    },
    defaultVariants: {},
  },
);

type TRating = {
  scored: number;
} & VariantProps<typeof rating>;

export function Rating({ size, scored = 0, ...props }: TRating) {
  const [prev, setPrev] = React.useState(scored);
  const [score, setScore] = React.useState(scored);
  React.useEffect(() => {
    console.log(score);
  }, [score]);
  return (
    <span className="flex flex-row-reverse">
      {new Array(6).fill(0).map((el, index) => {
        return (
          <Fragment key={`start-${index}`}>
            <ClickConfetti
              colors={"gold"}
              variant={"order"}
              size={"lg"}
              disabled={prev === 5 - index}
              dataId={`star${index}`}
              className={twMerge(
                "peer peer-hover:text-yellow-400 text-gray-300",
                `${index >= 5 ? "opacity-0" : ""}`,
              )}
            >
              <FontAwesomeIcon
                icon={faStar}
                className={twMerge(
                  rating({ size }),
                  `${5 - score <= index ? "text-yellow-400 " : "text-inherit"}`,
                  `${5 - score === index ? "animate-ping-once" : ""}`,
                )}
                onClick={() => {
                  setPrev(score);
                  setScore(5 - index);
                }}
              />
            </ClickConfetti>
          </Fragment>
        );
      })}
    </span>
  );
}
