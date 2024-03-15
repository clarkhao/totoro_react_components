import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../../component/skeleton/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonDefault: Story = {
  args: {},
};
