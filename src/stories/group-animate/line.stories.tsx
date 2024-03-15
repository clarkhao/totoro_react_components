import type { Meta, StoryObj } from "@storybook/react";
import { BorderLine } from "../../component/group-animate/line/line";

const meta: Meta<typeof BorderLine> = {
  title: "UI/Animate",
  component: BorderLine,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LineDefault: Story = {
  //color: "blue" | "dark" | "red" | "green" | "yellow" | "indigo" | "purple" | "pink"
  args: {
    children: "Javascript",
    color: "green",
  },
};
