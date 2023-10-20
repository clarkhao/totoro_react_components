import { FiStar } from "react-icons/fi";

type TRate = {
  /**
   * stars
   */
  stars: number;
  /**
   * size
   */
  size: "small" | "base" | "large";
};

export default function Rating({ ...props }: TRate) {
  const count = Math.round(props.stars);

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < count) {
          return (
            <FiStar
              key={index}
              className={[
                "text-yellow-300 h-auto cursor-pointer",
                props.size === "small"
                  ? "w-4"
                  : props.size === "base"
                  ? "w-8"
                  : "w-12",
              ].join(" ")}
              fill="#fde047"
            />
          );
        } else {
          return (
            <FiStar
              key={index}
              className={[
                "text-yellow-300 h-auto cursor-pointer",
                props.size === "small"
                  ? "w-4"
                  : props.size === "base"
                  ? "w-8"
                  : "w-12",
              ].join(" ")}
            />
          );
        }
      })}
    </div>
  );
}
