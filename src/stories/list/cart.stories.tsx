import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "../../component/next-list/cart/index";
import React from "react";

const meta: Meta<typeof Cart> = {
  title: "Scenary/Shopping Cart",
  component: Cart,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Cart>;

export const CartDefault: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="pb-2">
        <Story />
      </div>
    ),
  ],
};
