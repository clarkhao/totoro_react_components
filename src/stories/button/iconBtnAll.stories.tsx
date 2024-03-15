import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../../component/badge/iconButton";
import React from "react";
import {
  faPlus,
  faTrashCan,
  faPen,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
      <div className="flex flex-row gap-x-2">
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"circular"}
          disabled={false}
          onClick={() => window.alert("hello")}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"circular"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"contained"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"circular"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"outlined"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
        <IconButton
          size={"base"}
          fill={"borderless"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPlus} className="h-6" />
        </IconButton>
      </div>
      <div className="flex flex-row gap-x-2">
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"circular"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"contained"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"circular"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"outlined"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          fill={"borderless"}
          shape={"circular"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faTrashCan} className="h-6" />
        </IconButton>
      </div>
      <div className="flex flex-row gap-x-2">
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPen} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"square"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faPen} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"contained"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPen} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPen} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"square"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faPen} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"outlined"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPen} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          fill={"borderless"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faPen} className="h-6" />
        </IconButton>
      </div>
      <div className="flex flex-row gap-x-2">
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faCamera} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"contained"}
          shape={"square"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faCamera} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"contained"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faCamera} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faCamera} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"primary"}
          fill={"outlined"}
          shape={"square"}
          disabled={true}
        >
          <FontAwesomeIcon icon={faCamera} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          intent={"secondary"}
          fill={"outlined"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faCamera} className="h-5" />
        </IconButton>
        <IconButton
          size={"base"}
          fill={"borderless"}
          shape={"square"}
          disabled={false}
        >
          <FontAwesomeIcon icon={faCamera} className="h-6" />
        </IconButton>
      </div>
    </div>
  );
}

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: Showcase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonAll: Story = {
  args: {},
};
