import { useState } from "react";

type TTooltip = {
  /**
   * children
   */
  text: string;
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * classes
   */
  className?: string;
};

export function Tooltip({ text, ...props }: TTooltip) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={props.className ?? "relative"}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {props.children}
      </div>
      {showTooltip && (
        <div
          className={[
            "absolute top-[120%] left-1/2 -translate-x-1/2 p-1 rounded-md z-50 min-w-[120px]",
            "bg-gray-50 shadow-md dark:bg-gray-700 dark:text-gray-50 font-light text-sm",
            "flex justify-center",
          ].join(" ")}
        >
          {text}
        </div>
      )}
    </div>
  );
}
