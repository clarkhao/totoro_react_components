export const getRandomColor = () => {
  const colors = [
    "blue",
    "dark",
    "red",
    "green",
    "yellow",
    "indigo",
    "purple",
    "pink",
  ];
  return colors[Math.floor(Math.random() * colors.length)] as
    | "blue"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
};

type TBadge = {
  /**
   * content
   */
  actual: string;
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
  /**
   * isRemoved
   */
  isRemoved?: boolean;
  /**
   * handler
   */
  removeHandler?: (str: string) => void;
};

export function Badge({ actual, isRemoved = false, ...props }: TBadge) {
  const content = actual.length > 7 ? `${actual.slice(0, 7)}...` : actual;
  switch (props.color) {
    case "blue":
      return !isRemoved ? (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-default"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
            data-dismiss-target="#badge-dismiss-default"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "dark":
      return !isRemoved ? (
        <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-dark"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
            data-dismiss-target="#badge-dismiss-dark"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "red":
      return !isRemoved ? (
        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-red"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
            data-dismiss-target="#badge-dismiss-red"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "green":
      return !isRemoved ? (
        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-green"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
            data-dismiss-target="#badge-dismiss-green"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "yellow":
      return !isRemoved ? (
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-yellow"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
            data-dismiss-target="#badge-dismiss-yellow"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "indigo":
      return !isRemoved ? (
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-indigo"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
            data-dismiss-target="#badge-dismiss-indigo"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "purple":
      return !isRemoved ? (
        <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-purple"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
            data-dismiss-target="#badge-dismiss-purple"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    case "pink":
      return !isRemoved ? (
        <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-pink"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
            data-dismiss-target="#badge-dismiss-pink"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
    default:
      return !isRemoved ? (
        <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
          {content}
        </span>
      ) : (
        <span
          id="badge-dismiss-pink"
          className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"
        >
          {content}
          <button
            type="button"
            className="inline-flex items-center p-1 ml-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
            data-dismiss-target="#badge-dismiss-pink"
            aria-label="Remove"
            onClick={() => {
              if (props.removeHandler) {
                props.removeHandler(content);
              }
            }}
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      );
  }
}
