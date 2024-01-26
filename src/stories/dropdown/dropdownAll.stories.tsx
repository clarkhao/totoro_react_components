import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { HambergerDrop } from "../../component/intro/hambergerDrop";
import { AvatarDropdown } from "../../component/avatar/nextAvatarDrop";
import { NextDropdown } from "../../component/dropdown/dropdownV3";
import { DefaultClickable } from "../../component/dropdown/defaultClickable";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-80 p-4">
      <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
        <h3 className="font-medium text-lg">Dropdown with Click</h3>
        <div className="flex flex-row items-center justify-between">
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Hello World"}
                drop={data.active as boolean}
                size={"base"}
              />
            )}
            autoPos={{ auto: true, popupHeight: 320, popupWidth: 320 }}
            isByHover={false}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Hello World"}
                drop={data.active as boolean}
                size={"base"}
              />
            )}
            autoPos={{ auto: true, popupHeight: 320, popupWidth: 320 }}
            isByHover={false}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Hello World"}
                drop={data.active as boolean}
                size={"base"}
              />
            )}
            autoPos={{ auto: true, popupHeight: 320, popupWidth: 320 }}
            isByHover={false}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
        <h3>Dropdown with Hover & Auto Direction</h3>
        <div className="flex flex-row items-center justify-between">
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Hello World"}
                drop={data.active as boolean}
                size={"base"}
              />
            )}
            autoPos={{ auto: true, popupHeight: 320, popupWidth: 320 }}
            isByHover={true}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Hello World"}
                drop={data.active as boolean}
                size={"base"}
              />
            )}
            autoPos={{ auto: true, popupHeight: 320, popupWidth: 320 }}
            isByHover={true}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
          <NextDropdown
            clickable={(data: Record<string, unknown>) => (
              <DefaultClickable
                title={"Hello World"}
                drop={data.active as boolean}
                size={"base"}
              />
            )}
            autoPos={{ auto: true, popupHeight: 320, popupWidth: 320 }}
            isByHover={true}
          >
            <p className="w-80 h-80 bg-gray-500"></p>
          </NextDropdown>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
        <h3>Dropdown with Hamberger and Avatar</h3>
        <div className="flex flex-row justify-around items-center">
          <HambergerDrop color={"blue"} isLeft />
          <AvatarDropdown size={"md"} shape={"square"} isLocal={false}>
            <p className="w-80 h-80 bg-light-secondary-dark-variant dark:bg-dark-secondary-dark-variant"></p>
          </AvatarDropdown>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
        <h3>Dropdown</h3>
      </div>
    </div>
  );
}

const meta: Meta<typeof NextDropdown> = {
  title: "UI/dropdown",
  component: Showcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDropdown: Story = {
  args: {},
};
