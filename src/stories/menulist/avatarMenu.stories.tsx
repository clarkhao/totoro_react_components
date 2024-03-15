import type { Meta, StoryObj } from "@storybook/react";
import FoldingItem from "../../component/menu/nested";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { Chip } from "../../component/chip/chip";
import Link from "next/link";
import { signOut } from "next-auth/react";

type TAvatarMenu = {
  name: string;
  email: string;
  role: string;
};

function Menu({ ...props }: TAvatarMenu) {
  return (
    <nav className="w-full flex flex-col justify-center gap-y-4 p-4 bg-light-background dark:bg-dark-surface shadow rounded-sm">
      <div>
        <span className="flex flex-col p-1 items-start cursor-text">
          <span className="font-normal dark:text-dark-on-surface  ">
            {props.name ?? "???"}
          </span>
          <span className="text-gray-300">{props.email ?? "???@???"}</span>
        </span>
        <span className="flex flex-row">
          <Chip bgColor={"green"} actual={"Free"} size={"xs"} />
          <Link
            href={""}
            className="text-light-primary text-sm hover:text-light-primary-light-variant"
          >
            Upgrade Your Plan
          </Link>
        </span>
      </div>
      <hr />
      <ul>
        <FoldingItem path="account" level={1}>
          <FontAwesomeIcon icon={faUser} />
          <span className={twMerge("flex-1")}>Account Settings</span>
        </FoldingItem>
        <FoldingItem
          path="signout"
          level={1}
          onClick={() => {
            console.log("sign out");
            signOut();
          }}
        >
          <FontAwesomeIcon icon={faSignOut} />
          <span className={twMerge("flex-1")}>Sign Out</span>
        </FoldingItem>
      </ul>
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

export const AvatarMenuDefault: Story = {
  args: {},
};
