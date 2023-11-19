import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import {Intro} from "../../component/intro/intro";
import React from "react";

const meta: Meta<typeof Intro> = {
  title: "Portfolio",
  component: Intro,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Introduction: Story = {
  args: {
    
  },
  
};
