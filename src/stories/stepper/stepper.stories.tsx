import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "../../component/stepper/stepper";
import React from "react";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const StepperDefault: Story = {
  args: {
    steps: [
      { step: "step one", err: null },
      { step: "step two", err: new Error("") },
      { step: "step three", err: null },
      { step: "step four", err: null },
    ],
    step: -1,
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <Story />
        </div>
      );
    },
  ],
};
