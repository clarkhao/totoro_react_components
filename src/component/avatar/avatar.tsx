import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { IconButton } from "./iconButton";
import { MenuList, TMenuData } from "../next-navigation/menuList";
import { FiHelpCircle } from "react-icons/fi";

import "./avatar.css";

type TAvatar = {
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

export function Avatar(props: TAvatar) {
  const [hidden, setHidden] = React.useState(true);
  const avatarHandler = () => {
    setHidden(!hidden);
  };
  const avatarRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setHidden(true);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (!props.userInfo.avatarUrl) {
    return (
      <IconButton size="base">
        <FiHelpCircle className="w-10 h-10 text-brand-secondary-light" />
      </IconButton>
    );
  }
  return (
    <div
      className={[
        "flex flex-col justify-end items-end ",
        props.position ?? ""
      ].join(" ")}
    >
      <IconButton onClick={avatarHandler} size="base">
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={props.userInfo.avatarUrl}
          alt="Bordered avatar"
          ref={avatarRef}
        />
      </IconButton>
      <CSSTransition
        in={!hidden}
        timeout={300}
        classNames="avatar"
        unmountOnExit
      >
        <div className="w-[200px]">
          <MenuList data={props.menu} isCompact handleRoute={props.handler}>
            {props.children(props.userInfo)}
          </MenuList>
        </div>
      </CSSTransition>
    </div>
  );
}
