import type { Meta, StoryObj } from "@storybook/react";
import { AvatarWrapper } from "../../component/avatar/avatarWrapper";

const meta: Meta<typeof AvatarWrapper> = {
  title: "UI/Avatar",
  component: AvatarWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarDefault: Story = {
  args: {
    shape: "circular",
    size: "md",
    isLocal: true,
  },
};
