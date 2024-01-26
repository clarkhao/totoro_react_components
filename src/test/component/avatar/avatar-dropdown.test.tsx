import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AvatarDropdown } from "../../../component/avatar/nextAvatarDrop";
import userEvent from "@testing-library/user-event";

describe("component AvatarDropdown", () => {
  it("should render dropdown after clicking avatar", async () => {
    const { container } = render(
      <AvatarDropdown size="md" shape={"square"} isLocal={false}>
        <p
          className="w-80 h-80 bg-light-secondary-dark-variant dark:bg-dark-secondary-dark-variant"
          data-avatar-dropdown="menu"
        ></p>
      </AvatarDropdown>,
    );
    const iconUser = container.querySelector(
      "[data-avatar='icon-user']",
    ) as Element;
    await userEvent.click(iconUser);
    const dropdown = container.querySelector("[data-avatar-dropdown='menu']");
    expect(dropdown).toBeInTheDocument;
  });
});
