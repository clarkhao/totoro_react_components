import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SortTable } from "../../component/table/sortTable";
import React from "react";

const meta: Meta<typeof SortTable> = {
  title: "Scenary/SortTable",
  component: SortTable,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SortTable>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SortTableDefault: Story = {
  args: {
    title: "Global Forest Area",
    isPagination: true,
  },
};
