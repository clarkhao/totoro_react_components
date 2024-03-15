import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import json from "../../../public/config.json";

const avatar = cva(
  [
    "cursor-pointer",
    "text-light-surface",
    "focus:outline-none",
    "bg-light-primary dark:bg-dark-primary",
  ],
  {
    variants: {
      outerSize: {
        xs: [
          "p-1",
          "focus:ring-1 hover:ring-1",
          "flex justify-center items-center",
        ],
        sm: [
          "p-1.5",
          "focus:ring-2 hover:ring-2",
          "flex justify-center items-center",
        ],
        md: [
          "p-2",
          "focus:ring-4 hover:ring-4",
          "flex justify-center items-center",
        ],
        lg: [
          "p-4",
          "focus:ring-8 hover:ring-8",
          "flex justify-center items-center",
        ],
        xl: [
          "p-4",
          "focus:ring-8 hover:ring-8",
          "flex justify-center items-center",
        ],
      },
      shape: {
        circular: ["rounded-full"],
        square: ["rounded-sm"],
      },
      innerSize: {
        xs: ["w-5 h-5", "rounded-full"],
        sm: ["w-6 h-6", "rounded-full"],
        md: ["w-8 h-8", "rounded-full"],
        lg: ["w-16 h-16", "rounded-full"],
        xl: ["w-28 h-28", "rounded-full"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      outerSize: undefined,
      shape: undefined,
      innerSize: undefined,
    },
  },
);

type TAvatar = {
  isLocal: boolean;
};

export type IAvatar = TAvatar &
  VariantProps<typeof avatar> &
  HTMLAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLSpanElement>;

export const CvaAvatar = ({
  outerSize,
  shape,
  innerSize,
  isLocal,
  ...props
}: IAvatar) => {
  const [failedToLoad, setFailedToLoad] = React.useState(false);
  if (!isLocal && failedToLoad) {
    return (
      <span
        {...props}
        className={twMerge(avatar({ outerSize, shape }))}
        data-avatar="question"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
        }}
      >
        <FontAwesomeIcon
          icon={faQuestion}
          className={twMerge(avatar({ innerSize }), props.className)}
        />
      </span>
    );
  }
  return (
    <>
      {isLocal ? (
        <span
          {...props}
          className={twMerge(avatar({ outerSize, shape }))}
          data-avatar="icon-user"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            className={twMerge(avatar({ innerSize }), props.className)}
          />
        </span>
      ) : (
        <span
          {...props}
          className={twMerge(
            avatar({ outerSize, shape }),
            "bg-light-primary-light-variant dark:bg-dark-primary",
          )}
          data-avatar="image-user"
        >
          <img
            className={twMerge(
              avatar({ innerSize }),
              "bg-light-primary-light-variant dark:bg-dark-primary",
              props.className,
            )}
            src={json.avatar.url}
            alt="Bordered avatar"
            onError={() => {
              setFailedToLoad(true);
            }}
          />
        </span>
      )}
    </>
  );
};
