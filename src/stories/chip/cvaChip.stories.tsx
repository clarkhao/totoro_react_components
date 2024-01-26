import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../component/chip/chip";
import React from "react";
import { Tooltip } from "../../component/tooltip/tooltip";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
      <div className="flex flex-col gap-y-2">
        <h3>Chips without Delete Icon</h3>
        <div className="flex flex-row gap-x-2">
          <Chip bgColor={"blue"} actual={"Hello"} />
          <Chip bgColor={"dark"} actual={"World"} />
          <Chip bgColor={"green"} actual={"I"} />
          <Chip bgColor={"yellow"} actual={"Am"} />
          <Chip bgColor={"indigo"} actual={"Clark"} />
          <Chip bgColor={"pink"} actual={"Daily"} />
          <Chip bgColor={"red"} actual={"Daily"} />
          <Chip bgColor={"purple"} actual={"Daily"} />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Chips in smaller size</h3>
        <div className="flex flex-row gap-x-2">
          <Chip bgColor={"blue"} actual={"Hello"} size={"xs"} />
          <Chip bgColor={"dark"} actual={"World"} size={"xs"} />
          <Chip bgColor={"green"} actual={"I"} size={"xs"} />
          <Chip bgColor={"yellow"} actual={"Am"} size={"xs"} />
          <Chip bgColor={"indigo"} actual={"Clark"} size={"xs"} />
          <Chip bgColor={"pink"} actual={"Daily"} size={"xs"} />
          <Chip bgColor={"red"} actual={"Daily"} size={"xs"} />
          <Chip bgColor={"purple"} actual={"Daily"} size={"xs"} />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Chips with Delete Icon</h3>
        <div className="flex flex-row gap-x-2">
          <Chip bgColor={"blue"} btnColor={"blue"} actual={"blue"} isRemoved />
          <Chip bgColor={"dark"} btnColor={"dark"} actual={"dark"} isRemoved />
          <Chip
            bgColor={"green"}
            btnColor={"green"}
            actual={"green"}
            isRemoved
          />
          <Chip
            bgColor={"yellow"}
            btnColor={"yellow"}
            actual={"yellow"}
            isRemoved
          />
          <Chip
            bgColor={"indigo"}
            btnColor={"indigo"}
            actual={"indigo"}
            isRemoved
          />
          <Chip bgColor={"pink"} btnColor={"pink"} actual={"pink"} isRemoved />
          <Chip bgColor={"red"} btnColor={"red"} actual={"red"} isRemoved />
          <Chip
            bgColor={"purple"}
            btnColor={"purple"}
            actual={"purple"}
            isRemoved
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Chips with Longer Text</h3>
        <div className="flex flex-row gap-x-2">
          <Chip
            bgColor={"blue"}
            btnColor={"blue"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"dark"}
            btnColor={"dark"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"green"}
            btnColor={"green"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"yellow"}
            btnColor={"yellow"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"indigo"}
            btnColor={"indigo"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"pink"}
            btnColor={"pink"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"red"}
            btnColor={"red"}
            actual={"Hellooooooo"}
            isRemoved
          />
          <Chip
            bgColor={"purple"}
            btnColor={"purple"}
            actual={"Hellooooooo"}
            isRemoved
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Chips with Tip | Hover on 😄</h3>
        <div className="flex flex-row gap-x-2">
          <Tooltip text={"\u{1F600}HoverOnMe"}>
            <Chip
              bgColor={"blue"}
              btnColor={"blue"}
              actual={"\u{1F600}HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="🤪HoverOnMe">
            <Chip
              bgColor={"dark"}
              btnColor={"dark"}
              actual={"🤪HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="😪HoverOnMe">
            <Chip
              bgColor={"green"}
              btnColor={"green"}
              actual={"😪HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="😮HoverOnMe">
            <Chip
              bgColor={"yellow"}
              btnColor={"yellow"}
              actual={"😮HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="😎HoverOnMe">
            <Chip
              bgColor={"indigo"}
              btnColor={"indigo"}
              actual={"😎HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="😭HoverOnMe">
            <Chip
              bgColor={"pink"}
              btnColor={"pink"}
              actual={"😭HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="🥵HoverOnMe">
            <Chip
              bgColor={"red"}
              btnColor={"red"}
              actual={"🥵HoverOnMe"}
              isRemoved
            />
          </Tooltip>
          <Tooltip text="🤖HoverOnMe">
            <Chip
              bgColor={"purple"}
              btnColor={"purple"}
              actual={"🤖HoverOnMe"}
              isRemoved
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Showcase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipAll: Story = {
  args: {},
};
