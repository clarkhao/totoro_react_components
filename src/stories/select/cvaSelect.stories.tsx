import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../component/select/cvaSelect";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectDefault: Story = {
  args: {
    title: "Select",
    items: [
      { id: 1, value: "Beijing" },
      { id: 2, value: "Tokyo" },
      { id: 3, value: "Tianjin" },
    ],
    question: "Which City do you like?",
    variant: "outlined",
    height: "md",
    intent: "primary",
  },
};
