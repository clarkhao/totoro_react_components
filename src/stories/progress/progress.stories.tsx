import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../../component/progress/progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressDefault: Story = {
  args: {
    header: "React",
    count: 7,
  },
};
