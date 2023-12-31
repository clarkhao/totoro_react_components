import type { Meta, StoryObj } from "@storybook/react";
import { GraphqlList } from "../../component/next-list/list";
import React from "react";

const meta: Meta<typeof GraphqlList> = {
  title: "UI/List/GraphqlList",
  component: GraphqlList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof GraphqlList>;

export const ClientListDefault: Story = {
  args: {
    url: "https://mock.shop/api",
    renderWays: "infinite",
  },
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
      </div>
    ),
  ],
};
