// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import Signup from "../../../app/auth/@signup/page";

const meta: Meta<typeof Signup> = {
  title: "Page/Signup",
  component: Signup,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
