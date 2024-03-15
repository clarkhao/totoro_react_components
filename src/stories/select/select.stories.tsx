import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../component/select/select";
import React from "react";
import { FilterWrapper } from "../../component/fitler/filterWrapper";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectOld: Story = {
  args: {
    items: [
      { id: "123", title: "Man" },
      { id: "234", title: "Woman" },
    ],
    title: "Select Collection",
    height: "small",
  },
  decorators: [
    (Story) => (
      <FilterWrapper>
        <Story />
      </FilterWrapper>
    ),
  ],
};
