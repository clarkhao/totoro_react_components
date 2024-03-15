import type { Meta, StoryObj } from "@storybook/react";
import { Pricing } from "../../component/pricing/pricing";

const meta: Meta<typeof Pricing> = {
  title: "UI/Pricing",
  component: Pricing,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingDefault: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    handleSelectPlan: (i) => {
      console.log(`select plan ${i}`);
    },
  },
};
