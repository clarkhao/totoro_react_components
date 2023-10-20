import { FaPlus } from "react-icons/fa6";

export function AddSort({ title, ...props }: Record<string, any>) {
  return (
    <span
      className={[
        "cursor-pointer dark:text-gray-200 text-gray-600 p-2 pl-3 w-full flex flex-row items-center gap-1 text-sm hover:bg-gray-300 dark:hover:bg-gray-500",
        "hover:rounded-md",
      ].join(" ")}
      onClick={props.handler}
    >
      <FaPlus />
      <span>{title}</span>
    </span>
  );
}
