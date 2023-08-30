import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Input from "../component/input/Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
    
  },
  
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const InputDefault: Story = {
  args: {
    labelText: "Name",
    type: "text",
    name: "name",
    needVerified: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await sleep(500);
    await userEvent.type(input, "He");
    await sleep(3000);
    await userEvent.type(input, "llo");
    await sleep(500);
    await userEvent.type(input, " World!");
  },
};