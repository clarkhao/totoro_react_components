import type { Meta, StoryObj } from "@storybook/react";
import { WithFilterList } from "../../component/next-list/withFilter";
import React from "react";

const meta: Meta<typeof WithFilterList> = {
  title: "UI/List/FilterList",
  component: WithFilterList,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WithFilterList>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const FilterListDefault: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="px-2">
        <Story />
      </div>
    ),
  ],
};
