import React, { FC } from "react";

import { IconButton } from "./iconButton";
import { MenuList, TMenuData } from "../next-navigation/menuList";

import "./avatar.css";
import { CustomDropdown } from "../dropdown/customDropdown";
import { Avatar } from "./avatar";

type TAvatarIcon = {
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
};

export function AvatarIcon({ ...props }: TAvatarIcon) {
  return (
    <div className="w-10">
      <CustomDropdown
        clickable={AvatarClick}
        isAbs
        avatarUrl={props.userInfo.avatarUrl}
        pos={{ top: 50, right: -160 }}
      >
        <div className="w-[200px]">
          <MenuList data={props.menu} isCompact handleRoute={props.handler}>
            {props.children(props.userInfo)}
          </MenuList>
        </div>
      </CustomDropdown>
    </div>
  );
}

function AvatarClick({ handler, avatarUrl }: Record<string, unknown>) {
  return (
    <IconButton onClick={handler as React.MouseEventHandler<HTMLButtonElement> | undefined}>
      <Avatar size="md" avatarUrl={avatarUrl as string} />
    </IconButton>
  );
}
