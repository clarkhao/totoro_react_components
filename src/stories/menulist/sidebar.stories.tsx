import type { Meta, StoryObj } from "@storybook/react";
import FoldingItem from "../../component/menu/nested";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleChevronLeft,
  faHome,
  faList,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { CvaAvatar } from "../../component/avatar/cvaAvatar";

function NextedMenu() {
  const [isZoomOut, setZoomOut] = React.useState(false);
  const handleResponsive = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("here");
    setZoomOut(!isZoomOut);
  };
  return (
    <nav
      className={twMerge(
        "min-h-screen bg-gray-200 dark:bg-gray-800 px-4",
        "transition-all duration-300 ease-out",
        `${isZoomOut ? "w-20" : "w-96"}`,
        "flex flex-col justify-start gap-y-20 ",
      )}
    >
      <ul>
        <span
          className={twMerge(
            "flex flex-col justify-center items-start relative py-4",
          )}
        >
          <a
            href="#"
            className={twMerge(
              "w-fit block cursor-pointer font-sans text-lg font-medium leading-relaxed text-inherit antialiased dark:text-dark-on-surface",
              isZoomOut ? "translate-x-3.5" : "",
            )}
          >
            {isZoomOut ? "BI" : "BrandIcon"}
          </a>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={twMerge(
              "w-6 h-6 self-end translate-x-full cursor-pointer text-light-primary dark:text-dark-primary",
              "transition-transform duration-300 ease-in-out",
              isZoomOut ? "rotate-180" : "",
            )}
            onClick={handleResponsive}
          />
        </span>
        <FoldingItem path="home" level={1} isZoom={isZoomOut}>
          <FontAwesomeIcon
            icon={faHome}
            className={`${isZoomOut ? "translate-x-1.5 dark:translate-x-2" : ""}`}
          />
          <span
            className={twMerge("flex-1", `${isZoomOut ? "w-0 hidden" : ""}`)}
          >
            Home
          </span>
        </FoldingItem>
        <FoldingItem
          folding={isZoomOut ? "horizontal" : "vertical"}
          path="dashboard"
          level={1}
          isZoom={isZoomOut}
          className={isZoomOut ? "translate-x-4" : ""}
          items={[
            {
              children: <>one</>,
              path: "one",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
            {
              children: <>two</>,
              path: "two",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
            {
              children: <>three</>,
              path: "three",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
          ]}
        >
          <FontAwesomeIcon
            icon={faUser}
            className={`${isZoomOut ? "translate-x-2.5" : ""}`}
          />
          <span
            className={twMerge("flex-1", `${isZoomOut ? "w-0 hidden" : ""}`)}
          >
            Dashboard
          </span>
        </FoldingItem>
        <FoldingItem
          folding={isZoomOut ? "horizontal" : "vertical"}
          path="projects"
          level={1}
          isZoom={isZoomOut}
          className={isZoomOut ? "translate-x-4" : ""}
          items={[
            {
              children: <>one</>,
              path: "one",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
            {
              children: <>two</>,
              path: "two",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
            {
              children: <>three</>,
              path: "three",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
          ]}
        >
          <FontAwesomeIcon
            icon={faList}
            className={`${isZoomOut ? "translate-x-2.5" : ""}`}
          />
          <span
            className={twMerge("flex-1", `${isZoomOut ? "w-0 hidden" : ""}`)}
          >
            Projects
          </span>
        </FoldingItem>
      </ul>
      <ul className="">
        <FoldingItem
          path="notification"
          level={1}
          isZoom={isZoomOut}
          badge={10}
        >
          <FontAwesomeIcon
            icon={faBell}
            className={`${isZoomOut ? "translate-x-2" : ""}`}
          />
          <span
            className={twMerge("flex-1", `${isZoomOut ? "w-0 hidden" : ""}`)}
          >
            Notification
          </span>
        </FoldingItem>
        <FoldingItem path="upgrade" level={1} isZoom={isZoomOut}>
          <FontAwesomeIcon
            icon={faStar}
            className={`${isZoomOut ? "translate-x-1.5 dark:translate-x-2" : ""}`}
          />
          <span
            className={twMerge("flex-1", `${isZoomOut ? "w-0 hidden" : ""}`)}
          >
            Upgrade
          </span>
        </FoldingItem>
        <FoldingItem
          path="account"
          folding={isZoomOut ? "horizontal" : "vertical"}
          level={1}
          isZoom={isZoomOut}
          className={isZoomOut ? "translate-x-4" : ""}
          items={[
            {
              children: <>one</>,
              path: "one",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
            {
              children: <>two</>,
              path: "two",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
            {
              children: <>three</>,
              path: "three",
              level: 2,
              bg: "green",
              width: isZoomOut ? 300 : undefined,
            },
          ]}
        >
          <CvaAvatar
            isLocal={false}
            outerSize={"sm"}
            innerSize={"sm"}
            shape={"square"}
          />
          <span
            className={twMerge("flex-1", `${isZoomOut ? "w-0 hidden" : ""}`)}
          >
            Name
          </span>
        </FoldingItem>
      </ul>
    </nav>
  );
}

const meta: Meta<typeof NextedMenu> = {
  title: "UI/Menu",
  component: NextedMenu,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarMenuDefault: Story = {
  args: {},
};
