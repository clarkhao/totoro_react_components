import type { Meta, StoryObj } from "@storybook/react";
import { OTP } from "../../component/next-input/otp";

const meta: Meta<typeof OTP> = {
  title: "UI/Input",
  component: OTP,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputOTPDefault: Story = {
  args: {
    size: 6,
  },
};
