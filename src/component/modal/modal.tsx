import React from "react";
import { ModalContext } from "./hook";
import { CSSTransition } from "react-transition-group";
import "./modal-transition.css";

type TModal = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * title
   */
  title?: string;
};

export function Modal({ ...props }: TModal) {
  const modal = React.useContext(ModalContext);
  React.useEffect(() => {
    const modalEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        modal?.modalDispatch({ type: "toggle-modal", payload: false });
      }
    };

    document.body.addEventListener("keydown", modalEscape);
    return () => {
      document.body.removeEventListener("keydown", modalEscape);
    };
  }, []);
  return (
    <>
      <CSSTransition
        in={modal?.modalState.isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div
          className={[
            "fixed inset-0 m-auto w-full p-4 border rounded-md z-50 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full",
            "flex justify-center items-center",
            "bg-gray-300/80 dark:bg-gray-800/80",
          ].join(" ")}
        >
          <div className="relative w-full max-w-md max-h-full text-black dark:text-white">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-96 overflow-auto">
              <button
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="crypto-modal"
                onClick={() =>
                  modal?.modalDispatch({ type: "toggle-modal", payload: false })
                }
              >
                <svg
                  className="w-3 h-3"
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
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  {props.title ?? "Modal Title"}
                </h3>
              </div>

              <div className="flex justify-center items-center w-full h-full">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
