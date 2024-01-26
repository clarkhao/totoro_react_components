import React, { FC } from "react";

import { MenuList, TMenuData } from "../next-navigation/menuList";
import { IconButton } from "../badge/iconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

type TAvatarTest = {
  /**
   * handler
   */
  handler: (router: string) => void;
  /**
   * user
   */
  userInfo: Record<string, unknown>;
  /**
   * menu
   */
  menu: Record<string, Array<TMenuData>>;
  /**
   * children
   */
  children: FC;
  /**
   * size
   */
  size: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * position
   */
  position?: string;
};

export function AvatarDefault(props: TAvatarTest) {
  const size = () => {
    switch (props.size) {
      case "xs":
        return "w-6 h-6";
      case "sm":
        return "w-8 h-8";
      case "md":
        return "w-10 h-10";
      case "lg":
        return "w-20 h-20";
      case "xl":
        return "w-36 h-36";
    }
  };
  if (!props.userInfo.avatarUrl) {
    return (
      <IconButton
        size={"base"}
        intent={"primary"}
        fill={"contained"}
        shape={"circular"}
        disabled={false}
      >
        <FontAwesomeIcon icon={faQuestion} className="h-6" />
      </IconButton>
    );
  }
  return (
    <>
      <div
        className={["flex flex-col justify-end items-end", "relative"].join(
          " ",
        )}
      >
        <input
          className={[
            "peer",
            "w-12 h-12 border-2 rounded-full cursor-pointer",
            "bg-transparent hover:bg-gray-200 active:bg-gray-100 dark:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-400",
            size(),
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
