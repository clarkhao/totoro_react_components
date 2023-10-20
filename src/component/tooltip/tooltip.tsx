import { useState } from "react";

type TTooltip = {
  /**
   * text
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
            "absolute top-full left-1/2 -translate-x-1/2 p-1 rounded-full z-50 min-w-[120px]",
            "bg-gray-50 shadow-md dark:bg-gray-700 dark:text-gray-50",
            "flex justify-center"
          ].join(" ")}
        >
          {text}
        </div>
      )}
    </div>
  );
}
