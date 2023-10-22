import { FiHelpCircle } from "react-icons/fi";

export type TAvatar = {
  /**
   * size
   */
  size: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * user
   */
  avatarUrl: string;
};

export function Avatar({ ...props }: TAvatar) {
  const size = () => {
    switch (props.size) {
      case "xs":
        return "w-6 h-6";
      case "sm":
        return "w-8 h-8";
      case "md":
        return "w-10 h-10";
      case "lg":
        return "w-20 h-20";
      case "xl":
        return "w-36 h-36";
    }
  };
  return (
    <>
      {!props.avatarUrl ? (
        <FiHelpCircle
          className={["text-brand-secondary-light", size()].join(" ")}
        />
      ) : (
        <img
          className={[
            "p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500",
            "hover:bg-gray-100 cursor-pointer hover:dark:bg-gray-700",
            size(),
          ].join(" ")}
          src={props.avatarUrl}
          alt="Bordered avatar"
        />
      )}
    </>
  );
}
