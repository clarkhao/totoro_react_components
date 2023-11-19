import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import {BorderLine} from "../../component/line/line";
import React from "react";

const meta: Meta<typeof BorderLine> = {
  title: "UI/Line/BorderLine",
  component: BorderLine,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const LineDefault: Story = {
  //color: "blue" | "dark" | "red" | "green" | "yellow" | "indigo" | "purple" | "pink"
  args: {
    children: "Javascript",
    color: 'green'
  },
  
};
