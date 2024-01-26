import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Chip } from "../../../component/chip/chip";

describe("component Chip", () => {
  it("should render Chip with right text", () => {
    render(
      <Chip
        actual={"HelloWorld"}
        bgColor={"blue"}
        btnColor={"blue"}
        size={"sm"}
      />,
    );
    const textEl = screen.getByText("HelloWorld");
    expect(textEl).toBeInTheDocument;
  });
  it("should render Chip with remove icon", () => {
    const { container } = render(
      <Chip
        actual="HelloWorld"
        isRemoved
        bgColor={"blue"}
        btnColor={"blue"}
        size={"sm"}
      />,
    );
    const btn = container.querySelector(
      "[data-dismiss-target='#badge-dismiss-default']",
    );
    expect(btn).toBeInTheDocument;
  });
  it("should render the right color", () => {
    const { container } = render(
      <Chip
        actual="HelloWorld"
        isRemoved
        bgColor={"red"}
        btnColor={"red"}
        size={"sm"}
      />,
    );
    const badge = container.querySelector("[data-badge='badge']");
    expect(badge).toHaveClass("text-red-800");
  });
});
