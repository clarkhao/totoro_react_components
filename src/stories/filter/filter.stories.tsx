import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { FilterClient } from "../../component/fitler/filterClient";
import React from "react";
import { FilterWrapper } from "../../component/fitler/filterWrapper";

const meta: Meta<typeof FilterClient> = {
  title: "UI/Filter",
  component: FilterClient,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FilterClient>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const FilterDefault: Story = {
  args: {
    items: [
      { id: "123", title: "Men" },
      { id: "234", title: "Women" },
    ],
  },
  decorators: [
    (Story) => (
      <FilterWrapper>
        <Story />
      </FilterWrapper>
    ),
  ],
};
