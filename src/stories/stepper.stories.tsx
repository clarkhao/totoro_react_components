import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "../component/stepper/stepper";

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

export const InputDefault: Story = {
  args: {},
};
