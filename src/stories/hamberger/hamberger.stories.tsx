import type { Meta, StoryObj } from "@storybook/react";
import { Hamberger } from "../../component/hamberger/hamberger";

const meta: Meta<typeof Hamberger> = {
  title: "UI/hamberger",
  component: Hamberger,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HambergerDefault: Story = {
  args: {
    size: "base",
    drop: false,
    color: "blue",
    id: "hamberger",
  },
};
