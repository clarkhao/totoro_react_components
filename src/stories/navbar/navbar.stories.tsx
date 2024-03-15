import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../../component/navbar/navbar";

const meta: Meta<typeof Navbar> = {
  title: "UI/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarDefault: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};
