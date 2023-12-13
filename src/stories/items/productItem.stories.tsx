import type { Meta, StoryObj } from "@storybook/react";
import Product from "../../component/items/productItem";
import React from "react";

const meta: Meta<typeof Product> = {
  title: "UI/Item/ProductItem",
  component: Product,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemDefault: Story = {
  args: {
    item: {
      id: "gid://shopify/Product/7982856273942",
      title: "Sweatpants",
      variants: {
        edges: [
          {
            node: {
              id: "id",
              price: {
                amount: "35.0",
                currencyCode: "CAD",
              },
            },
          },
        ],
      },
      images: {
        edges: [
          {
            node: {
              url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
            },
          },
          {
            node: {
              url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants02.jpg?v=1675455387",
            },
          },
          {
            node: {
              url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants03.jpg?v=1675455387",
            },
          },
          {
            node: {
              url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/ClaySweatpants01.jpg?v=1675455387",
            },
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};
