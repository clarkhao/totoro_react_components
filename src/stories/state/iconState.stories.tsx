import type { Meta, StoryObj } from "@storybook/react";
import { IconState } from "../../component/state/iconState";
import React from "react";

const meta: Meta<typeof IconState> = {
  title: "UI/State",
  component: IconState,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StateDefault: Story = {
  args: {
    width: 24,
    state: "success",
    prevState: (
      <p className="dark:text-glow dark:text-dark-on-surface">Hello</p>
    ),
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
