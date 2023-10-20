"use client"
//app
import React from "react";
//components
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FaRegCircleCheck, FaRegCircleXmark, FaX } from "react-icons/fa6";
//hooks
import { useToastStore } from "./store";
//style
import "./toast-transition.css";

function ToastList() {
  const [toastMsg, setToastMsg] = useToastStore((state) => [
    state.toastMsg,
    state.setToastMsg,
  ]);

  return (
    <div className="w-full flex flex-col justify-end items-center absolute left-0 right-0 bottom-0 ml-auto mr-auto">
      <TransitionGroup component={null}>
        {toastMsg.map((toast) => {
          return (
            <CSSTransition key={toast?.id} classNames="toast" timeout={500}>
              <div
                className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                {toast.bingo ? (
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <FaRegCircleCheck />
                    <span className="sr-only">Check icon</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                    <FaRegCircleXmark />
                  </div>
                )}
                <div className="ml-3 text-sm font-normal">{toast.msg}</div>
                <button
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-success"
                  aria-label="Close"
                  onClick={() =>
                    setToastMsg((prevToasts) =>
                      prevToasts.filter((el) => el.id !== toast?.id)
                    )
                  }
                >
                  <span className="sr-only">Close</span>
                  <FaX />
                </button>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

export {ToastList};
