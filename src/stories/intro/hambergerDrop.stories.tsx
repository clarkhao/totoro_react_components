import type { Meta, StoryObj } from "@storybook/react";
import { HambergerDrop } from "../../component/intro/hambergerDrop";

const meta: Meta<typeof HambergerDrop> = {
  title: "UI/dropdown/withHamberger",
  component: HambergerDrop,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHamberger: Story = {
  args: {
    className: "fixed right-10 top-10",
    color: "blue",
  },
};
