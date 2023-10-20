import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Dropdown } from "../../component/dropdown/dropdown";
import React from "react";

const meta: Meta<typeof Dropdown> = {
  title: "UI/dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DropdownDefault: Story = {
  args: {
    title: "Select Collections",
    children: (
      <ul
        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownBgHoverButton"
      >
        {["abccdde","b","c"].map((el, index) => (
          <li key={index}>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id={`checkbox-item-${index}`}
                type="checkbox"
                value=""
                className={[
                  "w-4 h-4 text-brand-secondary bg-gray-100 border-gray-300 rounded focus:ring-violet-300 focus:ring-2",
                  "dark:text-violet-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700",
                ].join(" ")}
                onChange={(e) => {
                  console.log(`${el} ${e.target.checked}`);
                }}
              />
              <label
                htmlFor={`checkbox-item-${index}`}
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                {el}
              </label>
            </div>
          </li>
        ))}
      </ul>
    ),
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
