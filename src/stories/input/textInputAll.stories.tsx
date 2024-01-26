import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../component/next-input/cvaInput";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface w-full justify-center items-center py-12">
      <div className="flex flex-col gap-y-20 w-1/3 justify-center items-center">
        <div className="flex flex-col gap-y-6">
          <h3>All 3 Variants with Primary</h3>
          <Input
            labelText={"Standard Primary"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"Outlined Primary"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"Filled Primary"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="md"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <h3>All 3 Variants with Secondary</h3>
          <Input
            labelText={"Standard Secondary"}
            variant={"standard"}
            intent={"secondary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"Outlined Secondary"}
            variant={"outlined"}
            intent={"secondary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"Filled Secondary"}
            variant={"filled"}
            intent={"secondary"}
            label={"normal"}
            height="md"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Standard</h3>
          <Input
            labelText={"Standard"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"With Icon"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labelText={"Disabled"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
            disabled
          />
          <Input
            labelText={"With Validation"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Standard with Small Size</h3>
          <Input
            labelText={"Standard"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="sm"
          />
          <Input
            labelText={"With Icon"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labelText={"Diabled"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
            disabled
          />
          <Input
            labelText={"With Validation"}
            variant={"standard"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Outlined</h3>
          <Input
            labelText={"Outlined"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"With Icon"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labelText={"Disabled"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
            disabled
          />
          <Input
            labelText={"With Validation"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Outlined with Smaller Size</h3>
          <Input
            labelText={"Outlined"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="sm"
          />
          <Input
            labelText={"With Icon"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labelText={"Disabled"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
            disabled
          />
          <Input
            labelText={"With Validation"}
            variant={"outlined"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Filled</h3>
          <Input
            labelText={"Filled"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="md"
          />
          <Input
            labelText={"With Icon"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labelText={"Disabled"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
            disabled
          />
          <Input
            labelText={"With Validation"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="md"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Filled</h3>
          <Input
            labelText={"Filled"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="sm"
          />
          <Input
            labelText={"With Icon"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labelText={"Disabled"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
            disabled
          />
          <Input
            labelText={"With Validation"}
            variant={"filled"}
            intent={"primary"}
            label={"normal"}
            height="sm"
            leftIcon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify="name"
          />
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Showcase,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputAll: Story = {
  args: {},
};

