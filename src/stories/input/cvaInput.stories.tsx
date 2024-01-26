import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../component/next-input/cvaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    labelText: "UserName",
    type: "text",
    verify: "name",
    leftIcon: <FontAwesomeIcon icon={faUser} className="w-3 h-auto" />,
    variant: "filled",
    intent: "primary",
    height: "md",
    label: "normal",
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
};
