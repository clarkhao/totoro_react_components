import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../component/badge/badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const BadgeDefault: Story = {
  args: {
    actual: "Daily",
    isRemoved: false,
    color: "blue",
  },
};
export const BadgeDeleteDefault: Story = {
  args: {
    actual: "Daily",
    isRemoved: true,
    color: "pink",
  },
};
export const BadgeExtraTextDefault: Story = {
  args: {
    actual: "EnjoyDailyLif",
    isRemoved: true,
    color: "green",
  },
};
