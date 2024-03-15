import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../component/next-input/cvaInput";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import { makeStore } from "../../store";

function Showcase() {
  return (
    <div className="flex flex-col gap-y-4 dark:text-dark-on-surface w-full justify-center items-center py-12">
      <div className="flex flex-col gap-y-20 w-1/3 justify-center items-center">
        <div className="flex flex-col gap-y-6">
          <h3>All 3 Variants with Primary</h3>
          <Input
            labeltext={"Standard Primary"}
            variant={"standard"}
            intent={"primary"}
            name="name"
            height="md"
          />
          <Input
            labeltext={"Outlined Primary"}
            variant={"outlined"}
            intent={"primary"}
            name="name"
            height="md"
          />
          <Input
            labeltext={"Filled Primary"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="md"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <h3>All 3 Variants with Secondary</h3>
          <Input
            labeltext={"Standard Secondary"}
            variant={"standard"}
            intent={"secondary"}
            name="name"
            height="md"
          />
          <Input
            labeltext={"Outlined Secondary"}
            variant={"outlined"}
            intent={"secondary"}
            name="name"
            height="md"
          />
          <Input
            labeltext={"Filled Secondary"}
            variant={"filled"}
            intent={"secondary"}
            name="name"
            height="md"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Standard</h3>
          <Input
            labeltext={"Standard"}
            variant={"standard"}
            intent={"primary"}
            name="name"
            height="md"
          />
          <Input
            labeltext={"With Icon"}
            variant={"standard"}
            intent={"primary"}
            name="name"
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labeltext={"Disabled"}
            variant={"standard"}
            intent={"primary"}
            name="name"
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            disabled
          />
          <Input
            labeltext={"With Validation"}
            variant={"standard"}
            intent={"primary"}
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            name="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Standard with Small Size</h3>
          <Input
            labeltext={"Standard"}
            variant={"standard"}
            intent={"primary"}
            height="sm"
            name="name"
          />
          <Input
            labeltext={"With Icon"}
            variant={"standard"}
            intent={"primary"}
            name="name"
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labeltext={"Diabled"}
            variant={"standard"}
            intent={"primary"}
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            disabled
            name="name"
          />
          <Input
            labeltext={"With Validation"}
            variant={"standard"}
            intent={"primary"}
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            name="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Outlined</h3>
          <Input
            labeltext={"Outlined"}
            variant={"outlined"}
            intent={"primary"}
            height="md"
            name="name"
          />
          <Input
            labeltext={"With Icon"}
            variant={"outlined"}
            intent={"primary"}
            name="name"
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labeltext={"Disabled"}
            variant={"outlined"}
            intent={"primary"}
            height="md"
            name="name"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            disabled
          />
          <Input
            labeltext={"With Validation"}
            variant={"outlined"}
            intent={"primary"}
            height="md"
            name="name"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Outlined with Smaller Size</h3>
          <Input
            labeltext={"Outlined"}
            variant={"outlined"}
            intent={"primary"}
            height="sm"
            name="name"
          />
          <Input
            labeltext={"With Icon"}
            variant={"outlined"}
            intent={"primary"}
            height="sm"
            name="name"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labeltext={"Disabled"}
            variant={"outlined"}
            intent={"primary"}
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            name="name"
            disabled
          />
          <Input
            labeltext={"With Validation"}
            variant={"outlined"}
            intent={"primary"}
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            name="name"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Filled</h3>
          <Input
            labeltext={"Filled"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="md"
          />
          <Input
            labeltext={"With Icon"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labeltext={"Disabled"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            disabled
          />
          <Input
            labeltext={"With Validation"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="md"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <hr />
          <h3>Text Input Filled</h3>
          <Input
            labeltext={"Filled"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="sm"
          />
          <Input
            labeltext={"With Icon"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
          />
          <Input
            labeltext={"Disabled"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
            disabled
          />
          <Input
            labeltext={"With Validation"}
            variant={"filled"}
            intent={"primary"}
            name="name"
            height="sm"
            lefticon={<FontAwesomeIcon icon={faUser} className="w-3 h-auto" />}
            verify={true}
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
