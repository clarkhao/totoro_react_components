import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../component/next-input/cvaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "../../store";
import { Button } from "../../component/button/cvaButton";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/slices/error";
import { RootState } from "../../store";

function Showcase() {
  const dispatch = useDispatch();
  const errState = useSelector((state: RootState) => state.error.errors);
  const fields = useSelector((state: RootState) => state.auth.fields);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add({ from: "name", message: "some request error" }));
  };
  const [value, setValue] = React.useState("");

  return (
    <form className="w-[400px] flex flex-col gap-y-12 items-end">
      <Input
        labeltext="Password"
        type={fields["type"]}
        name="password"
        variant={"filled"}
        intent={"primary"}
        height="md"
        lefticon={<FontAwesomeIcon icon={faLock} className="w-3 h-auto" />}
        reqerr={errState?.password}
        value={value}
        handleset={(v) => setValue(v)}
        verify={true}
      />
      <Button
        intent={"primary"}
        fill={"outlined"}
        size={"base"}
        state={"pre"}
        className="w-60"
        onClick={handleSubmit}
        disabled={errState["email-verify"] !== undefined || value === ""}
      >
        Submit
      </Button>
    </form>
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

export const RequestError: Story = {
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
