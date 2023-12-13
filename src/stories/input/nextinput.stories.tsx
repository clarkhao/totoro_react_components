import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../component/next-input/inputField";

const meta: Meta<typeof InputField> = {
  title: "UI/Input/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    variant: "outlined",
    labelText: "Name",
    type: "text",
    name: "name",
    needVerified: true,
  },
};

export const Password: Story = {
  args: {
    variant: "outlined",
    labelText: "Password",
    name: "password",
    needVerified: true,
  },
};

export const Search: Story = {
  args: {
    variant: "outlined",
    labelText: "Search",
    type: "search",
    name: "search",
  },
};

export const FilledDefault: Story = {
  args: {
    labelText: "Name",
    type: "text",
    name: "name",
    needVerified: true,
    variant: "filled",
  },
};
