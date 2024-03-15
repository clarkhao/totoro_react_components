import type { Meta, StoryObj } from "@storybook/react";
import { ClickConfetti } from "../../component/confetti/confetti";
import React from "react";
import { Button } from "../../component/button/cvaButton";

const meta: Meta<typeof ClickConfetti> = {
  title: "UI/Animate",
  component: ClickConfetti,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ClickConfettiDefault: Story = {
  args: {
    children: (
      <Button
        intent={"primary"}
        fill={"contained"}
        disabled={false}
        size={"base"}
        state={"pre"}
        className="w-48"
      >
        Primary Base
      </Button>
    ),
    colors: "#27add8",
    dataId: "some",
    size: "md",
    variant: "chaos",
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
