import React from "react";
import SpinnerFont from "./spinnerFont";

export function SpinnerOverlay() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-100/60 z-50">
      <span className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SpinnerFont />
      </span>
    </div>
  );
}
