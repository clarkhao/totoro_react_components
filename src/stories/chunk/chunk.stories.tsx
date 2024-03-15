import type { Meta, StoryObj } from "@storybook/react";
import { Chunk } from "../../component/chunk/chunk";
import React from "react";

const meta: Meta<typeof Chunk> = {
  title: "UI/Chunk",
  component: Chunk,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipDefault: Story = {
  args: {},
};

