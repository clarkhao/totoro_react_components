import React from "react";
import { Clickable, TClickable } from "../next-input/defaultClickable";
import { NextDropdown } from "../dropdown/dropdownV3";
import { twMerge } from "tailwind-merge";
import { VariantProps, cva } from "class-variance-authority";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ISelect {
  selected: unknown;
  setSelected: React.Dispatch<React.SetStateAction<unknown>>;
}

export const SelecctContext = React.createContext<ISelect | null>(null);

const selectDrop = cva(["w-full p-2 text-left hover:rounded-md"], {
  variants: {
    intent: {
      primary: [
        "hover:bg-light-primary-lighter-variant/30 dark:hover:bg-dark-primary-darker-variant/60",
      ],
      secondary: ["hover:bg-light-secondary-lighter-variant/30"],
    },
  },
  defaultVariants: {},
});

type TDropdownSelect = {
  items: Array<{ id: number; item: React.ReactNode }>;
  itemKey: string;
  default: number;
} & TClickable &
  VariantProps<typeof selectDrop>;

export function DropdownSelect({ height, intent, ...props }: TDropdownSelect) {
  const [selected, setSelected] = React.useState<number>(props.default);
  const ctx = React.useContext(SelecctContext);

  return (
    <>
      <NextDropdown
        clickable={(data: Record<string, unknown>) => (
          <Clickable
            labelText={props.labelText}
            drop={data.active as boolean}
            height={height}
            intent={intent}
            className={props.className}
            variant={props.variant}
            disabled={props.disabled}
            selected={selected !== undefined && selected !== 0}
          >
            {selected ? <>{props.items[selected].item}</> : null}
          </Clickable>
        )}
        autoPos={{ auto: false, popupHeight: 0, popupWidth: 0 }}
        isByHover={false}
        className="top-full left-1/2 translate-y-0 -translate-x-1/2"
        btnClass="h-12 rounded-md"
        clickClose
      >
        <ul
          className={twMerge(
            "flex flex-col p-2 w-[200px] rounded-md shadow-lg",
            "bg-transparent dark:bg-gray-700 dark:text-dark-on-surface",
          )}
        >
          {props.items.map((el, index) => {
            return (
              <li
                key={`${props.itemKey}-${el.id}`}
                onClick={() => {
                  setSelected(index);
                  ctx?.setSelected(index);
                }}
                className={twMerge(selectDrop({ intent }))}
              >
                {el.item}
              </li>
            );
          })}
        </ul>
      </NextDropdown>
    </>
  );
}
