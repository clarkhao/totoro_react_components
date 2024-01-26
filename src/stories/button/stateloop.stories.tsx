import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../component/button/cvaButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Showcase() {
  const states = ["pre", "pending", "success", "fail"];
  const [index, setIndex] = React.useState(0);
  const timerRef = React.useRef<number>(0);
  const [auto, setAuto] = React.useState(true);
  React.useEffect(() => {
    if (auto) {
      timerRef.current = window.setInterval(() => {
        switch (index) {
          case 0:
            setIndex(1);
            break;
          case 1:
            setIndex([2, 3][Math.round(Math.random())]);
            break;
          default:
            setIndex(0);
            break;
        }
      }, 1000);
    }
    return () => {
      window.clearInterval(timerRef.current);
    };
  }, [index, auto]);
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
      <p>Click Once to stop loop and click again to start loop again.</p>
      <h3>Without Icon</h3>
      <Button
        intent={"primary"}
        fill={"contained"}
        disabled={false}
        size={"base"}
        state={states[index] as "pre" | "pending" | "success" | "fail"}
        className="w-48"
        onClick={() => {
          if (auto) {
            window.clearInterval(timerRef.current);
            setIndex(0);
            setAuto(false);
          } else {
            setAuto(true);
          }
        }}
      >
        Primary Base
      </Button>
      <h3>With Icon</h3>
      <Button
        intent={"primary"}
        fill={"contained"}
        disabled={false}
        size={"base"}
        state={states[index] as "pre" | "pending" | "success" | "fail"}
        className="w-48"
        onClick={() => {
          if (auto) {
            window.clearInterval(timerRef.current);
            setIndex(0);
            setAuto(false);
          } else {
            setAuto(true);
          }
        }}
        withIcon
        icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
      >
        Primary Base
      </Button>
    </div>
  );
}

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Showcase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StateLoop: Story = {
  args: {},
};
