import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../component/next-input/cvaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "../../store";

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
    labeltext: "UserName",
    type: "text",
    name: "name",
    verify: true,
    lefticon: <FontAwesomeIcon icon={faUser} className="w-3 h-auto" />,
    variant: "filled",
    intent: "primary",
    height: "md",
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <Provider store={makeStore()}>
          <div className="max-w-[400px] flex flex-col justify-center items-center">
            <Story />
          </div>
        </Provider>
      );
    },
  ],
};
