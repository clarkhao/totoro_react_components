import type { Meta, StoryObj } from "@storybook/react";
import { NextDropdown } from "../../component/dropdown/dropdownV3";
import React from "react";
import { Hamberger } from "../../component/hamberger/hamberger";

function Showcase() {
  return (
    <NextDropdown
      clickable={(data: Record<string, unknown>) => (
        <Hamberger
          size={"base"}
          color="green"
          id="gray"
          drop={data.active as boolean}
        />
      )}
      className={"top-0 left-0"}
      autoPos={{ auto: false, popupHeight: 0, popupWidth: 0 }}
      isByHover={false}
      btnClass="rounded-full"
    >
      <p className="w-80 h-80 bg-slate-900"></p>
    </NextDropdown>
  );
}

const meta: Meta<typeof NextDropdown> = {
  title: "UI/dropdown",
  component: Showcase,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: {},
};
