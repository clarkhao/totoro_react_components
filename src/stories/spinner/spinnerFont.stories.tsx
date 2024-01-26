import type { Meta, StoryObj } from "@storybook/react";
import SpinnerFont from "../../component/spinner/spinnerFont";

const meta: Meta<typeof SpinnerFont> = {
  title: "UI/Spinner",
  component: SpinnerFont,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerIcon: Story = {
  args: {},
};
