import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../component/avatar/avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarDefault: Story = {
  args: {
    size: "md",
    avatarUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed",
  },
};
