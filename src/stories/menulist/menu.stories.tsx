import type { Meta, StoryObj } from "@storybook/react";
import FoldingItem from "../../component/menu/nested";
import React from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faList,
  faProjectDiagram,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../component/button/cvaButton";

function Menu() {
  return (
    <nav
      className={twMerge(
        "bg-gray-100 dark:bg-gray-800 p-4",
        "flex flex-col justify-start gap-y-2",
      )}
    >
      <FoldingItem
        folding={"vertical"}
        path="templates"
        level={1}
        items={[
          {
            children: <>one</>,
            path: "one",
            level: 2,
            bg: "green",
          },
          {
            children: <>two</>,
            path: "two",
            level: 2,
            bg: "green",
          },
          {
            children: <>three</>,
            path: "three",
            level: 2,
            bg: "green",
          },
        ]}
      >
        <FontAwesomeIcon icon={faProjectDiagram} />
        <span className={twMerge("flex-1")}>Template</span>
      </FoldingItem>
      <FoldingItem
        folding={"vertical"}
        path="features"
        level={1}
        items={[
          {
            children: <>one</>,
            path: "one",
            level: 2,
            bg: "green",
          },
          {
            children: <>two</>,
            path: "two",
            level: 2,
            bg: "green",
          },
          {
            children: <>three</>,
            path: "three",
            level: 2,
            bg: "green",
          },
        ]}
      >
        <FontAwesomeIcon icon={faList} />
        <span className={twMerge("flex-1")}>Features</span>
      </FoldingItem>
      <FoldingItem path="upgrade" level={1}>
        <FontAwesomeIcon icon={faBook} />
        <span className={twMerge("flex-1")}>Docs</span>
      </FoldingItem>
      <FoldingItem path="upgrade" level={1}>
        <FontAwesomeIcon icon={faStar} />
        <span className={twMerge("flex-1")}>Pricing</span>
      </FoldingItem>
      <Button
        intent={"secondary"}
        fill={"outlined"}
        disabled={false}
        size={"small"}
        state={"pre"}
        className="w-24 lg:w-32 lg:h-10 lg:text-sm lg:font-medium lg:px-6focus:ring-4"
      >
        Log In
      </Button>
      <Button
        intent={"primary"}
        fill={"contained"}
        disabled={false}
        size={"small"}
        state={"pre"}
        className="w-24 lg:w-32 lg:h-10 lg:text-sm lg:font-medium lg:px-6focus:ring-4"
      >
        Sign In
      </Button>
    </nav>
  );
}

const meta: Meta<typeof Menu> = {
  title: "UI/Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuDefault: Story = {
  args: {},
};
