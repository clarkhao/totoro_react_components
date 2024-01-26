import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "../../component/spinner/spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerDefault: Story = {
  args: {},
};
