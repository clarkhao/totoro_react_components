import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../component/badge/cvaBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faMinus,
  faPaperPlane,
  faPlus,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IconButton } from "../../component/badge/iconButton";
import { Button } from "../../component/button/cvaButton";
import { CvaAvatar } from "../../component/avatar/cvaAvatar";

function Showcase() {
  const [count, setCount] = React.useState(2);
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
      <div className="flex flex-col gap-y-2">
        <h3>Icon-Buton Badges</h3>
        <div className="flex flex-row gap-x-4 justify-between items-center">
          <div className="flex flex-row gap-x-4">
            <Badge intent="primary" isAnimated num={count}>
              <IconButton
                fill="contained"
                shape="circular"
                size="base"
                intent={"secondary"}
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-6" />
              </IconButton>
            </Badge>
            <Badge intent="success" isAnimated num={count}>
              <IconButton
                fill="contained"
                shape="circular"
                size="base"
                intent={"secondary"}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-6" />
              </IconButton>
            </Badge>
            <Badge intent="error" isAnimated num={count}>
              <IconButton
                fill="contained"
                shape="circular"
                size="base"
                intent={"secondary"}
              >
                <FontAwesomeIcon icon={faTriangleExclamation} className="h-6" />
              </IconButton>
            </Badge>
          </div>
          <div className="flex flex-row items-center p-2 border border-dotted border-light-secondary-light-variant">
            <IconButton
              fill="contained"
              shape="square"
              size="small"
              intent={"secondary"}
              onClick={() => {
                if (count > 0) {
                  setCount((count) => count - 1);
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} className="h-6" />
            </IconButton>
            <IconButton
              fill="contained"
              shape="square"
              size="small"
              intent={"primary"}
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              <FontAwesomeIcon icon={faPlus} className="h-6" />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-row gap-x-4">
          <Badge intent="secondary" isAnimated num={100}>
            <IconButton
              fill="contained"
              shape="circular"
              size="base"
              intent={"primary"}
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-6" />
            </IconButton>
          </Badge>
          <Badge intent="success" num={100}>
            <IconButton
              fill="contained"
              shape="circular"
              size="base"
              intent={"primary"}
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-6" />
            </IconButton>
          </Badge>
          <Badge intent="error" num={"!"}>
            <IconButton
              fill="contained"
              shape="circular"
              size="base"
              intent={"primary"}
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-6" />
            </IconButton>
          </Badge>
          <Badge intent="invalid" num={"!"} isDot>
            <IconButton
              fill="contained"
              shape="circular"
              size="base"
              intent={"primary"}
              disabled
            >
              <FontAwesomeIcon icon={faUser} className="h-6" />
            </IconButton>
          </Badge>
          <Badge intent="success" num={"!"} isDot>
            <IconButton
              fill="contained"
              shape="square"
              size="base"
              intent={"secondary"}
            >
              <FontAwesomeIcon icon={faUser} className="h-6" />
            </IconButton>
          </Badge>
          <Badge intent="error" num={"!"} isDot>
            <IconButton
              fill="contained"
              shape="square"
              size="base"
              intent={"secondary"}
            >
              <FontAwesomeIcon icon={faUser} className="h-6" />
            </IconButton>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Icon Badges</h3>
        <div className="flex flex-row gap-x-4">
          <Badge
            intent={"primary"}
            isDot={false}
            isAnimated
            num={22}
            className="right-0 top-0"
          >
            <IconButton
              size={"base"}
              fill={"borderless"}
              shape={"circular"}
              disabled={false}
            >
              <FontAwesomeIcon icon={faBell} className="h-6" />
            </IconButton>
          </Badge>
          <Badge
            intent={"success"}
            isDot={false}
            isAnimated
            num={"😆"}
            className="right-0 top-0"
          >
            <IconButton
              size={"base"}
              fill={"borderless"}
              shape={"circular"}
              disabled={false}
            >
              <FontAwesomeIcon icon={faBell} className="h-6" />
            </IconButton>
          </Badge>
          <Badge
            intent={"error"}
            isDot={false}
            isAnimated
            num={"!"}
            className="right-0 top-0"
          >
            <IconButton
              size={"base"}
              fill={"borderless"}
              shape={"circular"}
              disabled={false}
            >
              <FontAwesomeIcon icon={faBell} className="h-6" />
            </IconButton>
          </Badge>
          <Badge
            intent={"invalid"}
            isDot={true}
            num={""}
            className="right-0 top-0"
          >
            <IconButton
              size={"base"}
              fill={"borderless"}
              shape={"circular"}
              disabled={true}
            >
              <FontAwesomeIcon icon={faBell} className="h-6" />
            </IconButton>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Button Badges</h3>
        <div className="flex flex-row gap-x-4">
          <Badge intent="success" num={"New"} isAnimated>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Primary Base
            </Button>
          </Badge>
          <Badge intent="primary" num={"Welcome!"} isAnimated>
            <Button
              intent={"secondary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Secondary Base
            </Button>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Avatar Badges</h3>
      </div>
      <div className="flex flex-row gap-x-4">
        <Badge intent="success" num={"!"} isDot>
          <CvaAvatar
            isLocal={false}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
        </Badge>
        <Badge intent="error" num={"!"} isDot>
          <CvaAvatar
            isLocal={false}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
        </Badge>
        <Badge intent="success" num={"New"} isAnimated>
          <CvaAvatar
            isLocal={false}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
        </Badge>
        <Badge intent="invalid" num={"New"} isDot>
          <CvaAvatar
            isLocal={false}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
        </Badge>
        <Badge intent="primary" num={3} isAnimated>
          <CvaAvatar
            isLocal={false}
            outerSize={"md"}
            innerSize={"md"}
            shape={"circular"}
          />
        </Badge>
      </div>
    </div>
  );
}

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Showcase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeAll: Story = {
  args: {},
};
