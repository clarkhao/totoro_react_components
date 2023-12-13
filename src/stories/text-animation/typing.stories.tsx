import type { Meta, StoryObj } from "@storybook/react";
import { Typing } from "../../component/group-text-animation/typing";
import React from "react";
import {
  TypingContext,
  useTyping,
} from "../../component/group-text-animation/typingHook";

const meta: Meta<typeof Typing> = {
  title: "UI/Text-Animation/Typing",
  component: Typing,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Typing>;

export const NumberDefault: Story = {
  args: {
    text: ["Hello World", "I am Clark", "I am a Developer"],
  },
  decorators: [
    (Story) => {
      const { typingStates, typingDispatch } = useTyping();
      return (
        <TypingContext.Provider value={{ typingStates, typingDispatch }}>
          <Story />
        </TypingContext.Provider>
      );
    },
  ],
};
