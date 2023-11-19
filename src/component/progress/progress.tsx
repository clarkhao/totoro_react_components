import style from "./progress.module.css";

type TProgress = {
  /**
   * header
   */
  header: string;
  /**
   * count
   */
  count: number;
};

export function Progress({ ...props }: TProgress) {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <p className="min-w-[64px] text-[12px]">{props.header}</p>
      <div className="flex-1 inline-flex flex-row justify-start gap-[2px] min-w-[240px] ml-4">
        {new Array(props.count).fill(0).map((el, i) => {
          return (
            <span
              key={`progress-count-${i}`}
              className={[
                "h-1 bg-cyan-500 inline-block rounded-md",
                style.count,
              ].join(" ")}
            ></span>
          );
        })}
        {new Array(10 - props.count).fill(0).map((el, i) => {
          return (
            <span
              key={`progress-count-${i}`}
              className={[
                "h-1 border border-cyan-500 bg-gray-400 inline-block rounded-md",
                style.count,
              ].join(" ")}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
