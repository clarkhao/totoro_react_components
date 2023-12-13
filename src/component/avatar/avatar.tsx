import Image from "next/image";
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
        return { w: 24, h: 24 };
      case "sm":
        return { w: 32, h: 32 };
      case "md":
        return { w: 40, h: 40 };
      case "lg":
        return { w: 80, h: 80 };
      case "xl":
        return { w: 144, h: 144 };
    }
  };
  return (
    <>
      {!props.avatarUrl ? (
        <FiHelpCircle
          className={["text-brand-secondary-light", size()].join(" ")}
        />
      ) : (
        <Image
          className={[
            "p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500",
            "hover:bg-gray-100 cursor-pointer hover:dark:bg-gray-700",
          ].join(" ")}
          src={props.avatarUrl}
          alt="Bordered avatar"
          width={size().w}
          height={size().h}
        />
      )}
    </>
  );
}
