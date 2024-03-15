import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../../component/toast/toast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastDefault: Story = {
  args: {
    msg: "Hello World!.I am Clark",
    colors: "info",
    display: "writer",
    handleDel: () => {
      console.log("delete this toast");
    },
  },
};
