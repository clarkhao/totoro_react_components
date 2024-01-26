import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CvaAvatar } from "../../../component/avatar/cvaAvatar";

describe("component Avatar", () => {
  it("should render svg avatar", () => {
    const { container } = render(
      <CvaAvatar outerSize={"xs"} innerSize={"xs"} shape={"square"} isLocal />,
    );
    const iconUser = container.querySelector("[data-avatar='icon-user']");
    expect(iconUser).toBeInTheDocument();
  });
  it("should render image avatar", () => {
    const { container } = render(
      <CvaAvatar
        outerSize={"xs"}
        innerSize={"xs"}
        shape={"square"}
        isLocal={false}
      />,
    );
    const iconUser = container.querySelector("[data-avatar='image-user']");
    expect(iconUser).toBeInTheDocument();
  });
  it("should render square avatar", () => {
    const { container } = render(
      <CvaAvatar outerSize={"xs"} innerSize={"xs"} shape={"square"} isLocal />,
    );
    const iconUser = container.querySelector("[data-avatar='icon-user']");
    expect(iconUser).toHaveClass("rounded-sm");
  });
  it("should render circular avatar", () => {
    const { container } = render(
      <CvaAvatar
        outerSize={"xs"}
        innerSize={"xs"}
        shape={"circular"}
        isLocal
      />,
    );
    const iconUser = container.querySelector("[data-avatar='icon-user']");
    expect(iconUser).toHaveClass("rounded-full");
  });
});
