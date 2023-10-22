import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { IconButton } from "./iconButton";
import { MenuList, TMenuData } from "../next-navigation/menuList";
import { FiHelpCircle } from "react-icons/fi";

import "./avatar.css";
import { CustomDropdown } from "../dropdown/customDropdown";
import { Avatar, TAvatar } from "./avatar";

type TAvatarIcon = {
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
};

export function AvatarIcon({...props}: TAvatarIcon) {
  return (
    <div className="w-10">
      <CustomDropdown clickable={AvatarClick} isAbs avatarUrl={props.userInfo.avatarUrl} pos={{top: 50, right: -160}}>
      <div className="w-[200px]">
        <MenuList data={props.menu} isCompact handleRoute={props.handler}>
          {props.children(props.userInfo)}
        </MenuList>
      </div>
    </CustomDropdown>
    </div>
  );
}

function AvatarClick({handler, avatarUrl, ...props}: Record<string, any>) {
  return (
    <IconButton onClick={handler}>
      <Avatar size="md" avatarUrl={avatarUrl}/>
    </IconButton>
  );
}