"use client";
// One Time Passcode
import { VariantProps, cva } from "class-variance-authority";
import React, { ChangeEvent, Fragment } from "react";
import { twMerge } from "tailwind-merge";

const otp = cva(
  [
    "min-w-[40px] text-center text-base rounded-lg focus:ring-1",
    "outline-none focus:outline-none border-2",
  ],
  {
    variants: {
      intent: {
        primary: [
          "focus:ring-light-primary focus:border-light-primary",
          "dark:focus:ring-dark-primary dark:focus:border-dark-primary",
        ],
        secondary: [
          "focus:ring-light-secondary focus:border-light-secondary",
          "dark:focus:ring-dark-secondary dark:focus:border-dark-secondary",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

type TOtp = {
  size: number;
  handleSet?: (value: string) => void;
} & VariantProps<typeof otp>;

export function OTP({ intent, ...props }: TOtp) {
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [values, setValues] = React.useState<Array<string>>(
    new Array(props.size).fill(""),
  );

  const [err, setErr] = React.useState<Array<boolean>>(
    new Array(props.size).fill(false),
  );
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  React.useEffect(() => {
    inputRefs.current[focusIndex]?.focus();
  }, [focusIndex, props.size]);
  React.useEffect(() => {
    console.log(values);
    let passed = true;
    const errs = [...err];
    values.forEach((el, i) => {
      if (!el) {
        errs[i] = true;
        passed = false;
      } else {
        errs[i] = false;
      }
    });
    setErr(errs);
    if (passed && props.handleSet) {
      props.handleSet(values.join(""));
    }
  }, [values]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();
    const arr = [...values];
    arr[i] = e.target.value;
    setValues(arr);
  };
  return (
    <div
      className={twMerge(
        "flex flex-row justify-center items-center gap-x-2",
        "w-full",
      )}
    >
      {new Array(props.size).fill(0).map((el, index) => {
        return (
          <Fragment key={`opt-${index}`}>
            <input
              className={twMerge(
                otp({ intent }),
                `${err[index] ? "border-light-error focus:border-light-error focus:ring-light-error" : ""}`,
              )}
              size={1}
              maxLength={1}
              ref={(reference) => (inputRefs.current[index] = reference)}
              value={values[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyUp={async (e) => {
                if (e.key === "Backspace") {
                  if (!(e.target as HTMLInputElement).value) {
                    setFocusIndex(index - 1 < 0 ? 0 : index - 1);
                  }
                } else if (e.ctrlKey && e.key === "v") {
                  const clipboardData = await (
                    await navigator.clipboard.readText()
                  ).trim();
                  const arr = [...values];
                  //here there's one error
                  const newValues = arr
                    .slice(0, index)
                    .concat(clipboardData.split(""));
                  setValues(newValues.slice(0, props.size));

                  setFocusIndex((prev) =>
                    prev + clipboardData.length > props.size - 1
                      ? props.size - 1
                      : prev + clipboardData.length,
                  );
                } else {
                  if ((e.target as HTMLInputElement).value) {
                    setFocusIndex(
                      index + 1 > props.size - 1 ? props.size - 1 : index + 1,
                    );
                  }
                }
              }}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
