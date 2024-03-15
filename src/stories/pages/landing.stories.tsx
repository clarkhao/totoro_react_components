// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage } from "../../page/landing";
import React from "react";

const meta: Meta<typeof LandingPage> = {
  title: "Page/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Landing: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};
