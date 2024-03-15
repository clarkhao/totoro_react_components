import type { Meta, StoryObj } from "@storybook/react";
import { Announcement } from "../../component/announcement/announcement";

const meta: Meta<typeof Announcement> = {
  title: "UI/Announcement",
  component: Announcement,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AnnouncementDefault: Story = {
  args: {
    animated: true,
    text: "You can now use Amazon Cognito.",
  },
};
