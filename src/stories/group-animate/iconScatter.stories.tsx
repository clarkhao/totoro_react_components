import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { IconScatter } from "../../component/group-animate/iconScatter";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

const meta: Meta<typeof IconScatter> = {
  title: "UI/Animate/IconScatter",
  component: IconScatter,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const IconScatterDefault: Story = {
  args: {
    from: { x: 200, y: 400 },
    childList: [
      <FontAwesomeIcon
        key={"icon-0"}
        icon={faCoffee}
        style={{
          color: "red",
          width: "100px",
          height: "auto",
        }}
      />,
      <FontAwesomeIcon
        key={"icon-1"}
        icon={faCode}
        style={{
          color: "red",
          width: "100px",
          height: "auto",
        }}
      />,
      <FontAwesomeIcon
        key={"icon-2"}
        icon={faCss3Alt}
        style={{
          color: "red",
          width: "100px",
          height: "auto",
        }}
      />,
    ],
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
