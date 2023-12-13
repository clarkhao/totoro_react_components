import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../component/modal/modal";
import React from "react";
import { Button } from "../../component/button/button";
import { ModalContext, useModal } from "../../component/modal/hook";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalDefault: Story = {
  args: {
    children: (
      <div className="h-96 flex justify-center items-center">Model Content</div>
    ),
  },
  decorators: [
    (Story) => {
      const { modalState, modalDispatch } = useModal();
      return (
        <ModalContext.Provider value={{ modalState, modalDispatch }}>
          <Button
            size="base"
            onClick={() =>
              modalDispatch({ type: "toggle-modal", payload: true })
            }
          >
            Open Modal
          </Button>
          <Story />
        </ModalContext.Provider>
      );
    },
  ],
};
