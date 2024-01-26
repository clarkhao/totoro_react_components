import type { Meta, StoryObj } from "@storybook/react";
import SpinnerLoop from "../../component/spinner/spinnerLoop";

const meta: Meta<typeof SpinnerLoop> = {
  title: "UI/Spinner",
  component: SpinnerLoop,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {},
};
