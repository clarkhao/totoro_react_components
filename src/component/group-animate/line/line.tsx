import style from "./line.module.css";

type IBorderLine = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * color
   */
  color:
    | "blue"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
} & React.HTMLAttributes<HTMLDivElement>;

export function BorderLine({ ...props }: IBorderLine) {
  const bgColor = () => {
    switch (props.color) {
      case "blue":
        return { bg: "before:bg-blue-100", text: "text-blue-800" };
      case "dark":
        return { bg: "before:bg-gray-100", text: "text-gray-800" };
      case "red":
        return { bg: "before:bg-red-100", text: "text-red-800" };
      case "green":
        return { bg: "before:bg-green-100", text: "text-green-800" };
      case "yellow":
        return { bg: "before:bg-yellow-100", text: "text-yellow-800" };
      case "indigo":
        return { bg: "before:bg-indigo-100", text: "text-indigo-800" };
      case "purple":
        return { bg: "before:bg-purple-100", text: "text-purple-800" };
      case "pink":
        return { bg: "before:bg-pink-100", text: "text-pink-800" };
      default:
        return { bg: "before:bg-blue-100", text: "text-blue-800" };
    }
  };
  return (
    <div className={props.className}>
      <div
        className={[
          "relative box-border w-32 h-12 duration-500 rounded-full",
          "before:content-[''] before:absolute before:inset-0.5 before:rounded-full",
          bgColor().bg,
          style.conic,
        ].join(" ")}
      >
        <div
          className={[
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            bgColor().text,
          ].join(" ")}
        >
          <h1>{props.children}</h1>
        </div>
      </div>
    </div>
  );
}
