import type { Meta, StoryObj } from "@storybook/react";
import { SortTable } from "../../component/table/sortTable";

const meta: Meta<typeof SortTable> = {
  title: "Scenary/SortTable",
  component: SortTable,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SortTable>;

export const SortTableDefault: Story = {
  args: {
    title: "Global Forest Area",
    isPagination: true,
  },
};
