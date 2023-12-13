import type { Meta, StoryObj } from "@storybook/react";
import { Intro } from "../../component/intro/intro";

const meta: Meta<typeof Intro> = {
  title: "Portfolio",
  component: Intro,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  args: {},
};
