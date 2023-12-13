import type { Meta, StoryObj } from "@storybook/react";
import { MenuList } from "../../component/next-navigation/menuList";
import { FiCamera } from "react-icons/fi";
import React from "react";

const meta: Meta<typeof MenuList> = {
  title: "UI/Menu/MenuList",
  component: MenuList,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuDefault: Story = {
  args: {
    data: {
      menuData: [
        {
          title: "Subject",
          sub: ["one", "two", "three"],
          icon: {
            title: <FiCamera />,
            sub: [
              <FiCamera key="subject-one" />,
              undefined,
              <FiCamera key="subject-three" />,
            ],
          },
        },
        {
          title: "User",
          sub: ["one", "two", "three"],
          icon: {
            title: <FiCamera />,
            sub: [
              <FiCamera key="subject-one" />,
              undefined,
              <FiCamera key="subject-three" />,
            ],
          },
        },
        {
          title: "Some",
          sub: ["one", "two", "three"],
          icon: {
            title: <FiCamera />,
            sub: [
              <FiCamera key="subject-one" />,
              undefined,
              <FiCamera key="subject-three" />,
            ],
          },
        },
      ],
    },
    direction: "column",
  },
};
