import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../component/button/cvaButton";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface">
      <div className="flex flex-col gap-y-2">
        <h3>Primary</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Primary Small
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={true}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Primary Disabled
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={true}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Primary Disabled
            </Button>
          </div>
          <div className="flex flex-col gap-6">
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
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={true}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Primary Disabled
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={true}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Primary Disabled
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Primary Large
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={true}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Primary Disabled
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={true}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Primary Disabled
            </Button>
          </div>
        </div>
        <h3>Secondary</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Button
              intent={"secondary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Secondary Small
            </Button>
            <Button
              intent={"secondary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Outlined
            </Button>
            <Button
              intent={"secondary"}
              fill={"contained"}
              disabled={true}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Disabled
            </Button>
            <Button
              intent={"secondary"}
              fill={"outlined"}
              disabled={true}
              size={"small"}
              state={"pre"}
              className="w-40"
            >
              Disabled
            </Button>
          </div>
          <div className="flex flex-col gap-6">
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
            <Button
              intent={"secondary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Outlined
            </Button>
            <Button
              intent={"secondary"}
              fill={"contained"}
              disabled={true}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Disabled
            </Button>
            <Button
              intent={"secondary"}
              fill={"outlined"}
              disabled={true}
              size={"base"}
              state={"pre"}
              className="w-48"
            >
              Disabled
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              intent={"secondary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Secondary Large
            </Button>
            <Button
              intent={"secondary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Outlined
            </Button>
            <Button
              intent={"secondary"}
              fill={"contained"}
              disabled={true}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Disabled
            </Button>
            <Button
              intent={"secondary"}
              fill={"outlined"}
              disabled={true}
              size={"large"}
              state={"pre"}
              className="w-56"
            >
              Disabled
            </Button>
          </div>
        </div>
        <h3>With Icon</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"pre"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Small
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"pre"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={true}
              size={"small"}
              state={"pre"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Disabled
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={true}
              size={"small"}
              state={"pre"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Disabled
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"pre"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Base
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"pre"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={true}
              size={"base"}
              state={"pre"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Disabled
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={true}
              size={"base"}
              state={"pre"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary Disabled
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"pre"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary Large
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"pre"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={true}
              size={"large"}
              state={"pre"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary Disabled
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={true}
              size={"large"}
              state={"pre"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary Disabled
            </Button>
          </div>
        </div>
        <h3>Pending</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"pending"}
              className="w-40"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"pending"}
              className="w-40"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"pending"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"pending"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"pending"}
              className="w-48"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"pending"}
              className="w-48"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"pending"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"pending"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"pending"}
              className="w-56"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"pending"}
              className="w-56"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"pending"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"pending"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary
            </Button>
          </div>
        </div>
        <h3>Success</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"success"}
              className="w-40"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"success"}
              className="w-40"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"success"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"success"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"success"}
              className="w-48"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"success"}
              className="w-48"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"success"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"success"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"success"}
              className="w-56"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"success"}
              className="w-56"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"success"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"success"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary
            </Button>
          </div>
        </div>
        <h3>Fail</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"fail"}
              className="w-40"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"fail"}
              className="w-40"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"small"}
              state={"fail"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"small"}
              state={"fail"}
              className="w-40"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"fail"}
              className="w-48"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"fail"}
              className="w-48"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"base"}
              state={"fail"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"base"}
              state={"fail"}
              className="w-48"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-3 h-auto" />}
            >
              Primary
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"fail"}
              className="w-56"
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"fail"}
              className="w-56"
            >
              Primary Outlined
            </Button>
            <Button
              intent={"primary"}
              fill={"contained"}
              disabled={false}
              size={"large"}
              state={"fail"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary
            </Button>
            <Button
              intent={"primary"}
              fill={"outlined"}
              disabled={false}
              size={"large"}
              state={"fail"}
              className="w-56"
              withIcon
              icon={<FontAwesomeIcon icon={faPlus} className="w-4 h-auto" />}
            >
              Primary
            </Button>
          </div>
        </div>
      </div>
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

export const ButtonAll: Story = {
  args: {},
};
