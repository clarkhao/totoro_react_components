import type { Meta, StoryObj } from "@storybook/react";
import { PswStepper } from "../../component/next-input/cva/pswStepper";
import React from "react";

const meta: Meta<typeof PswStepper> = {
  title: "UI/Input",
  component: PswStepper,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordStepper: Story = {
  args: {
    length: 7,
    data: [
      {
        kind: "min",
        value: false,
        message: "Must be 6 or more characters long",
      },
      {
        kind: "max",
        value: false,
        message: "Must be 32 or fewer characters long",
      },
      { kind: "regex", value: false, message: "Must no space included" },
      {
        kind: "regex",
        value: false,
        message: "contains at least one lowercase English character",
      },
      {
        kind: "regex",
        value: false,
        message: "contains at least one uppercase English character",
      },
      { kind: "regex", value: false, message: "contains at least one number" },
      {
        kind: "regex",
        value: false,
        message: "contains at least one special character",
      },
      {
        kind: "regex",
        value: false,
        message: "Must no unrecognized characters",
      },
    ],
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-full h-screen">
          <Story />
        </div>
      );
    },
  ],
};
