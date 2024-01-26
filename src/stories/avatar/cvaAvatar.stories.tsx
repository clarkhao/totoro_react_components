import type { Meta, StoryObj } from "@storybook/react";
import { CvaAvatar } from "../../component/avatar/cvaAvatar";
import React from "react";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
      <div className="flex flex-col gap-y-2">
        <h3>Avatar with Square Shape</h3>
        <div className="flex flex-row justify-center items-end gap-x-4">
          <CvaAvatar isLocal={true} outerSize={"xs"} innerSize={"xs"} />
          <CvaAvatar isLocal={true} outerSize={"sm"} innerSize={"sm"} />
          <CvaAvatar isLocal={true} outerSize={"md"} innerSize={"md"} />
          <CvaAvatar isLocal={true} outerSize={"lg"} innerSize={"lg"} />
          <CvaAvatar isLocal={true} outerSize={"xl"} innerSize={"xl"} />
        </div>
        <h3>Avatar with Circular Shape</h3>
        <div className="flex flex-row justify-center items-end gap-x-4">
          <CvaAvatar
            isLocal={true}
            outerSize={"xs"}
            innerSize={"xs"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={true}
            outerSize={"sm"}
            innerSize={"sm"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={true}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={true}
            outerSize={"lg"}
            innerSize={"lg"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={true}
            outerSize={"xl"}
            innerSize={"xl"}
            shape={"circular"}
          />
        </div>
        <h3>Avatar with Square Shape and Avatar URL</h3>
        <div className="flex flex-row justify-center items-end gap-x-4">
          <CvaAvatar isLocal={false} outerSize={"xs"} innerSize={"xs"} />
          <CvaAvatar isLocal={false} outerSize={"sm"} innerSize={"sm"} />
          <CvaAvatar isLocal={false} outerSize={"md"} innerSize={"md"} />
          <CvaAvatar isLocal={false} outerSize={"lg"} innerSize={"lg"} />
          <CvaAvatar isLocal={false} outerSize={"xl"} innerSize={"xl"} />
        </div>
        <h3>Avatar with Circular Shape and Avatar URL</h3>
        <div className="flex flex-row justify-center items-end gap-x-4">
          <CvaAvatar
            isLocal={false}
            outerSize={"xs"}
            innerSize={"xs"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={false}
            outerSize={"sm"}
            innerSize={"sm"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={false}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={false}
            outerSize={"lg"}
            innerSize={"lg"}
            shape={"circular"}
          />
          <CvaAvatar
            isLocal={false}
            outerSize={"xl"}
            innerSize={"xl"}
            shape={"circular"}
          />
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof CvaAvatar> = {
  title: "UI/Avatar",
  component: Showcase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CvaAvatar>;

export const AvatarAll: Story = {
  args: {},
};
