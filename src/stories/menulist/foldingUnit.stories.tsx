import type { Meta, StoryObj } from "@storybook/react";
import FoldingItem from "../../component/menu/nested";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof FoldingItem> = {
  title: "UI/Menu",
  component: FoldingItem,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FoldingItemDefault: Story = {
  args: {
    bg: "blue",
    children: (
      <>
        <FontAwesomeIcon icon={faUser} />
        Hello
      </>
    ),
    folding: "vertical",
    path: "subject",
    level: 1,
    width: 240,
    items: [
      {
        children: <>wtow</>,
        folding: "horizontal",
        path: "one",
        level: 2,
        bg: "green",
        items: [
          {
            children: <>wtow</>,
            folding: undefined,
            path: "four",
            level: 3,
            width: 120,
          },
          {
            children: <>wtow</>,
            folding: "vertical",
            path: "three",
            level: 3,
            width: 120,
            items: [
              {
                children: <>wtow</>,
                folding: undefined,
              },
              {
                children: <>wtow</>,
                folding: undefined,
              },
            ],
          },
        ],
      },
      {
        children: <>wtow</>,
        folding: "horizontal",
        path: "two",
        level: 2,
        items: [
          {
            children: <>wtow</>,
            level: 3,
            width: 180,
          },
          {
            children: <>wtow</>,
            level: 3,
            width: 180,
          },
          {
            children: <>wtow</>,
            level: 3,
            width: 180,
          },
        ],
      },
      {
        children: <>wtow</>,
        folding: undefined,
      },
    ],
    className: "",
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-fit">
          <Story />
        </div>
      );
    },
  ],
};
