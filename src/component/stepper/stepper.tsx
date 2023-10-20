type TStepper = {
  /**
   * title
   */
  title?: string;
};

export function Stepper({ ...props }: TStepper) {
  return (
    <>
      <div>
        <h2 className="sm:sr-only text-center">{props.title ?? "Title"}</h2>

        <div className="relative">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex flex-col items-center gap-2 bg-white p-2">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">
                1
              </span>

              <span className="hidden sm:block"> Details </span>
            </li>
            <div className="flex-1 mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: "100%" }}
              ></div>
            </div>
            <li className="flex flex-col items-center gap-2 bg-white p-2">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">
                2
              </span>

              <span className="hidden sm:block"> Address </span>
            </li>
            <div className="flex-1 mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: "0%" }}
              ></div>
            </div>
            <li className="flex flex-col items-center gap-2 bg-white p-2">
              <span className="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                3
              </span>

              <span className="hidden sm:block"> Payment </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
