import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Select } from "../../component/select/select";
import React from "react";
import { FilterWrapper } from "../../component/fitler/filterWrapper";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SelectDefault: Story = {
  args: {
    items: [
      { id: "123", title: "Man" },
      { id: "234", title: "Woman" },
    ],
    title: "Select Collection",
    height: 'small'
  },
  decorators: [
    (Story) => (
      <FilterWrapper>
        <Story />
      </FilterWrapper>
    ),
  ],
};
