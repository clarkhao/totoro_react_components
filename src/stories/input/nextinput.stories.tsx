import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import {InputField} from "../../component/next-input/inputField";

const meta: Meta<typeof InputField> = {
  title: "UI/Input/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
    
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
    variant: "outlined",
    labelText: "Name",
    type: "text",
    name: "name",
    needVerified: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
  },
};

export const Password: Story = {
  args: {
    variant: "outlined",
    labelText: "Password",
    name: "password",
    needVerified: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
  },
};

export const Search: Story = {
  args: {
    variant: "outlined",
    labelText: "Search",
    type: "search",
    name: "search",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
  },
};

export const FilledDefault: Story = {
  args: {
    labelText: "Name",
    type: "text",
    name: "name",
    needVerified: true,
    variant: "filled"
  },

};