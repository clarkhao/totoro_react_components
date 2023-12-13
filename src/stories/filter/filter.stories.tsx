import type { Meta, StoryObj } from "@storybook/react";
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
