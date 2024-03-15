"use client";
import React from "react";
import { NextDropdown } from "../dropdown/dropdownV3";
import { DefaultClickable } from "../dropdown/defaultClickable";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "../button/cvaButton";
import { Badge } from "../badge/cvaBadge";
import { IconButton } from "../badge/iconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBook,
  faList,
  faPlus,
  faProjectDiagram,
  faSignOut,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AvatarDropdown } from "../avatar/nextAvatarDrop";
import { HambergerDrop } from "../intro/hambergerDrop";
import FoldingItem from "../menu/nested";
import { useRouter } from "next/navigation";
import { Chip } from "../chip/chip";
import { signOut } from "next-auth/react";

type TNavbar = {
  isLogged: boolean;
  name: string | undefined;
  email: string | undefined;
};

export function Navbar({ ...props }: TNavbar) {
  const router = useRouter();
  return (
    <nav
      className={twMerge(
        "block fixed top-0 w-full z-30 px-4 mx-auto shadow-md bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 box-border",
        "text-light-on-background bg-light-surface dark:bg-dark-surface dark:ring-inset dark:ring ring-gray-700",
      )}
    >
      <div className="containe h-14 lg:h-20 flex items-center justify-between mx-auto text-blue-gray-900">
        <a
          href="/"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased dark:text-dark-on-surface"
        >
          BrandIcon
        </a>
        <div className="hidden lg:flex h-full flex-row justify-center items-center gap-x-4">
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Templates"}
                drop={data.active as boolean}
                size={"base"}
                bottomHighlight
                className="h-14 lg:h-20"
              />
            )}
            autoPos={{ auto: false, popupHeight: 320, popupWidth: 320 }}
            isByHover={true}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Features"}
                drop={data.active as boolean}
                size={"base"}
                bottomHighlight
                className="h-14 lg:h-20"
              />
            )}
            autoPos={{ auto: false, popupHeight: 320, popupWidth: 320 }}
            isByHover={true}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
          <Link
            href={"/docs"}
            className={twMerge(
              "font-medium text-light-on-surface dark:text-dark-on-surface px-2 h-14 lg:h-20",
              "relative group flex justify-center items-center",
            )}
          >
            Docs
            <span className="absolute w-0 h-1 bottom-0 left-0 bg-light-primary dark:bg-dark-primary group-hover:w-full"></span>
          </Link>
          <Link
            href={"/pricing"}
            className={twMerge(
              "font-medium text-light-on-surface dark:text-dark-on-surface px-2 h-14 lg:h-20",
              "relative group flex justify-center items-center",
            )}
          >
            Pricing
            <span className="absolute w-0 h-1 bottom-0 left-0 bg-light-primary dark:bg-dark-primary group-hover:w-full"></span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-1 md:gap-x-2">
          {props.isLogged ? (
            <>
              <Button
                intent={"primary"}
                fill={"contained"}
                disabled={false}
                size={"small"}
                state={"pre"}
                withIcon
                icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
                className="w-32 lg:w-36 lg:h-10 lg:text-sm lg:font-medium lg:px-6focus:ring-4"
              >
                New Project
              </Button>
              <Badge
                intent={"primary"}
                isDot={false}
                isAnimated
                num={1}
                className="right-0 top-0 h-5 w-5 sm:h-6 sm:w-6"
              >
                <IconButton
                  size={"base"}
                  fill={"borderless"}
                  shape={"circular"}
                  disabled={false}
                >
                  <FontAwesomeIcon icon={faBell} className="h-5 sm:h-6" />
                </IconButton>
              </Badge>
              <AvatarDropdown
                size={"sm"}
                shape={"square"}
                isLocal={false}
                className="top-full translate-y-4"
                avatarClass="md:w-8 md:h-8"
              >
                <nav className="w-full flex flex-col justify-center gap-y-4 p-4 bg-light-background dark:bg-dark-surface shadow rounded-sm">
                  <div>
                    <span className="flex flex-col p-1 items-start cursor-text">
                      <span className="font-normal dark:text-dark-on-surface  ">
                        {props.name ?? "???"}
                      </span>
                      <span className="text-gray-300">
                        {props.email ?? "???@???"}
                      </span>
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
                      <span className={twMerge("flex-1")}>
                        Account Settings
                      </span>
                    </FoldingItem>
                    <FoldingItem
                      path="signout"
                      level={1}
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                      }}
                    >
                      <FontAwesomeIcon icon={faSignOut} />
                      <span className={twMerge("flex-1")}>Sign Out</span>
                    </FoldingItem>
                  </ul>
                </nav>
              </AvatarDropdown>
            </>
          ) : (
            <>
              <Button
                intent={"primary"}
                fill={"contained"}
                disabled={false}
                size={"small"}
                state={"pre"}
                className={twMerge(
                  "w-24 lg:w-32 lg:h-10 lg:text-sm lg:font-medium lg:px-6 focus:ring-4",
                  "hidden sm:flex",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/auth?sign=in");
                }}
              >
                Log In
              </Button>
              <Button
                intent={"secondary"}
                fill={"outlined"}
                disabled={false}
                size={"small"}
                state={"pre"}
                className={twMerge(
                  "w-24 lg:w-32 lg:h-10 lg:text-sm lg:font-medium lg:px-6 focus:ring-4",
                  "hidden lg:flex",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/auth?sign=up");
                }}
              >
                Sign Up
              </Button>
              <HambergerDrop
                color={""}
                isLeft={false}
                size="small"
                className="block lg:hidden z-30"
              >
                <nav
                  className={twMerge(
                    "bg-gray-200 dark:bg-gray-800 px-4",
                    "flex flex-col justify-start gap-y-2",
                    "w-screen py-4 pt-20",
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
                  <FoldingItem path="docs" level={1}>
                    <FontAwesomeIcon icon={faBook} />
                    <span className={twMerge("flex-1")}>Docs</span>
                  </FoldingItem>
                  <FoldingItem path="upgrade" level={1}>
                    <FontAwesomeIcon icon={faStar} />
                    <span className={twMerge("flex-1")}>Pricing</span>
                  </FoldingItem>
                  <Button
                    intent={"primary"}
                    fill={"contained"}
                    disabled={false}
                    size={"small"}
                    state={"pre"}
                    className="w-24 lg:w-32 lg:h-10 lg:text-sm lg:font-medium lg:px-6focus:ring-4"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/auth?sign=in");
                    }}
                  >
                    Log In
                  </Button>
                  <Button
                    intent={"secondary"}
                    fill={"outlined"}
                    disabled={false}
                    size={"small"}
                    state={"pre"}
                    className="w-24 lg:w-32 lg:h-10 lg:text-sm lg:font-medium lg:px-6focus:ring-4"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/auth?sign=in");
                    }}
                  >
                    Sign Up
                  </Button>
                </nav>
              </HambergerDrop>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
