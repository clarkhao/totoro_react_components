import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { IconButton } from "../button/iconButton";
import { MenuList, TMenuData } from "../next-navigation/menuList";
import { FiHelpCircle } from "react-icons/fi";

import "./avatar.css";
import Image from "next/image";

type TAvatarTest = {
  /**
   * handler
   */
  handler: (router: string) => void;
  /**
   * user
   */
  userInfo: Record<string, any>;
  /**
   * menu
   */
  menu: Record<string, Array<TMenuData>>;
  /**
   * children
   */
  children: FC;
  /**
   * position
   */
  position?: string;
};

export function AvatarTest(props: TAvatarTest) {
  if (!props.userInfo.avatarUrl) {
    return (
      <IconButton size="base">
        <FiHelpCircle className="w-10 h-10 text-brand-secondary-light" />
      </IconButton>
    );
  }
  return (
    <>
      <div
        className={[
          "flex flex-col justify-end items-end",
          "relative",
        ].join(" ")}
      >
        <input
          className={[
            "peer",
            "w-12 h-12 border-2 rounded-full cursor-pointer",
            "bg-transparent hover:bg-gray-200 active:bg-gray-100 dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-400",
          ].join(" ")}
          id="hidden-one"
          type="button"
          style={{
            backgroundImage: `url('${props.userInfo.avatarUrl}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0px 0px",
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
        <div className="w-[200px] opacity-0 -translate-y-3 peer-focus:opacity-100 peer-focus:translate-y-1 duration-300 ease-in-out">
          <MenuList data={props.menu} isCompact handleRoute={props.handler}>
            {props.children(props.userInfo)}
          </MenuList>
        </div>
      </div>
    </>
  );
}
