import type { Meta, StoryObj } from "@storybook/react";
import { ToastList } from "../../component/next-toast/toastList";
import { useToastStore } from "../../component/next-toast/store";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { LoremIpsum } from "lorem-ipsum";

const randomBool = () => Math.random() < 0.5;
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
function TestToastList() {
  const [setToastMsg] = useToastStore((state) => [
    state.setToastMsg,
  ]);
  const [count, setCount] = React.useState(0);
  const removeToast = (id: string) => {
    setToastMsg((prevToasts) => prevToasts.filter((el) => el.id !== id));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setCount((prev) => prev + 1);
          const id = uuidv4();
          const item = {
            id,
            bingo: randomBool(),
            msg: `${count} ${lorem.generateSentences(1)}`,
          };
          setToastMsg((pres) => pres.concat(item));
          setTimeout(() => {
            removeToast(id);
          }, 4000);
        }}
      >
        Add Toast
      </button>
      <ToastList />
    </div>
  );
}

const meta: Meta<typeof TestToastList> = {
  title: "UI/Toast",
  component: TestToastList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="overflow-clip">
          <Story />
        </div>
      );
    },
  ],
};
