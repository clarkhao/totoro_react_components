import type { Meta, StoryObj } from "@storybook/react";
import { CartList } from "../../component/next-list/cart/cartList";

const meta: Meta<typeof CartList> = {
  title: "UI/List/CartList",
  component: CartList,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof CartList>;

export const ClientListDefault: Story = {
  args: {
    items: {
      "gid://shopify/ProductVariant/43695710371862": {
        image:
          "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358",
        price: 25.0,
        productId: "gid://shopify/ProductVariant/43695710371862",
        quantity: 1,
        title: "Slides",
      },
    },
  },
};
