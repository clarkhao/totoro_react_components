import type { Meta, StoryObj } from "@storybook/react";
import { SearchWrapper } from "../../component/next-input/searchWrapper";
import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "../../store";

const meta: Meta<typeof SearchWrapper> = {
  title: "UI/Input",
  component: SearchWrapper,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchDefault: Story = {
  args: {
    labelText: "YoutWorks",
    type: "search",
    name: "search",
    verify: false,
    variant: "filled",
    intent: "primary",
    height: "md",
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <Provider store={makeStore()}>
          <div className="w-fit">
            <Story />
          </div>
        </Provider>
      );
    },
  ],
};
