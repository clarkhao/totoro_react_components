import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import json from "../../../public/config.json";

const avatar = cva(["cursor-pointer", "text-light-surface"], {
  variants: {
    outerSize: {
      xs: [
        "w-6",
        "h-6",
        "hover:ring-1",
        "bg-light-primary dark:bg-dark-primary",
        "flex justify-center items-center",
      ],
      sm: [
        "w-8",
        "h-8",
        "hover:ring-2",
        "bg-light-primary dark:bg-dark-primary",
        "flex justify-center items-center",
      ],
      md: [
        "w-10",
        "h-10",
        "hover:ring-4",
        "bg-light-primary dark:bg-dark-primary",
        "flex justify-center items-center",
      ],
      lg: [
        "w-20",
        "h-20",
        "hover:ring-8",
        "bg-light-primary dark:bg-dark-primary",
        "flex justify-center items-center",
      ],
      xl: [
        "w-36",
        "h-36",
        "hover:ring-8",
        "bg-light-primary dark:bg-dark-primary",
        "flex justify-center items-center",
      ],
    },
    shape: {
      circular: ["rounded-full"],
      square: ["rounded-sm"],
    },
    innerSize: {
      xs: [
        "w-4",
        "h-4",
        "bg-light-primary dark:bg-dark-primary",
        "rounded-full",
      ],
      sm: [
        "w-6",
        "h-6",
        "bg-light-primary dark:bg-dark-primary",
        "rounded-full",
      ],
      md: [
        "w-8",
        "h-8",
        "bg-light-primary dark:bg-dark-primary",
        "rounded-full",
      ],
      lg: [
        "w-16",
        "h-16",
        "bg-light-primary dark:bg-dark-primary",
        "rounded-full",
      ],
      xl: [
        "w-32",
        "h-28",
        "bg-light-primary dark:bg-dark-primary",
        "rounded-full",
      ],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    outerSize: undefined,
    shape: undefined,
    innerSize: undefined,
  },
});

type TAvatar = {
  isLocal: boolean;
};

export type IAvatar = TAvatar &
  VariantProps<typeof avatar> &
  HTMLAttributes<HTMLDivElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

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
      <button
        {...props}
        className={twMerge(avatar({ outerSize, shape }))}
        data-avatar="question"
      >
        <FontAwesomeIcon
          icon={faQuestion}
          className={twMerge(avatar({ innerSize }))}
        />
      </button>
    );
  }
  return (
    <>
      {isLocal ? (
        <div
          {...props}
          className={twMerge(avatar({ outerSize, shape }))}
          data-avatar="icon-user"
        >
          <FontAwesomeIcon
            icon={faUser}
            className={twMerge(avatar({ innerSize }))}
          />
        </div>
      ) : (
        <div
          {...props}
          className={twMerge(avatar({ outerSize, shape }))}
          data-avatar="image-user"
        >
          <img
            className={twMerge(avatar({ innerSize }))}
            src={json.avatar.url}
            alt="Bordered avatar"
            onError={() => {
              setFailedToLoad(true);
            }}
          />
        </div>
      )}
    </>
  );
};
