import type { Meta, StoryObj } from "@storybook/react";
import { DropdownSelect } from "../../component/select/dropdownSelect";
import React from "react";
import { SelecctContext } from "../../component/select/dropdownSelect";

const meta: Meta<typeof DropdownSelect> = {
  title: "UI/Select",
  component: DropdownSelect,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownSelectDefault: Story = {
  args: {
    height: "md",
    labelText: "Hello",
    className: "w-80",
    items: [
      { id: 0, item: <>Not Available</> },
      { id: 1, item: <>Some</> },
      { id: 2, item: <>Where</> },
    ],
    itemKey: "hello",
    variant: "standard",
    intent: "primary",
    default: 2,
  },
  decorators: [
    (Story) => {
      const [selected, setSelected] = React.useState<unknown>(2);

      return (
        <SelecctContext.Provider value={{ selected, setSelected }}>
          <div className="w-full flex flex-col justify-center gap-y-4">
            <p>selected: {selected as number}</p>
            <Story />
          </div>
        </SelecctContext.Provider>
      );
    },
  ],
};
