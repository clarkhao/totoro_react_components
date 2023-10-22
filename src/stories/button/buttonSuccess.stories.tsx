import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { IButton, Button } from "../../component/button/button";
import React from "react";

const ButtonWrapper = (props: IButton) => {
  const [state, setState] = React.useState<
    "pending" | "success" | "fail" | undefined
  >(undefined);

  const handleClick = () => {
    if (state === undefined) {
      setState("pending");
      window.setTimeout(() => {
        setState("success");
      }, 1000);
    } else {
      setState(undefined);
    }
  };
  return (
    <Button {...props} callbackState={state} onClick={handleClick}>
      Button
    </Button>
  );
};

const meta: Meta<typeof ButtonWrapper> = {
  title: "UI/Button",
  component: ButtonWrapper,
  parameters: {
    layout: "centered",
    docs: {
      story: { inline: false }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonWrapper>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const SuccessAnimated: Story = {
  args: {
    children: "Button",
    isPrimary: false,
    width: "w-48",
    moreAnimated: true,
    isOutlined: true,
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const contained = canvas.getAllByTestId("test-button");
    await sleep(1000);
    await userEvent.click(contained[0]);
    await sleep(1000);
  },
};
