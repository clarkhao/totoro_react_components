import type { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "../../component/items/cartItem";
import React from "react";

const meta: Meta<typeof CartItem> = {
  title: "UI/Item/CartItem",
  component: CartItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const CartItemDefault: Story = {
  args: {
    item: {
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      price: 25,
      title: "Product Title",
      quantity: 1,
    },
    handleRemove: () => {},
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
