import type { Meta, StoryObj } from "@storybook/react";
import { ToastQueue } from "../../component/toast/toastQueue";
import React from "react";
import { Button } from "../../component/button/cvaButton";
import { Provider } from "react-redux";
import { makeStore } from "../../store";
import { TToastMsg } from "../../store/slices/toast";
import { nanoid } from "nanoid";
import { LoremIpsum } from "lorem-ipsum";
import { useDispatch } from "react-redux";
import { add } from "../../store/slices/toast";

const Toast = () => {
  const dispatch = useDispatch();

  const handleAddToast = () => {
    const colorsIndex = Math.round(Math.random() * 4);
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 2,
        min: 1,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
    const newToast: TToastMsg = {
      id: nanoid(),
      colors: (
        ["info", "success", "error", "warning", "msg"] as Array<
          "info" | "success" | "error" | "warning" | "msg"
        >
      )[colorsIndex],
      msg: lorem.generateParagraphs(1),
      display: "standard",
      timed: "lg",
      variant: "colored",
    };
    dispatch(add(newToast));
  };
  return (
    <>
      <Button
        intent={"primary"}
        fill={"contained"}
        disabled={false}
        size={"base"}
        state={"pre"}
        className="w-48"
        onClick={handleAddToast}
      >
        New Toast
      </Button>
      <ToastQueue pos={"bottom"} />
    </>
  );
};

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastQueueDefault: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <Provider store={makeStore()}>
          <Story />
        </Provider>
      );
    },
  ],
};
