import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpinnerFont() {
  return (
    <FontAwesomeIcon
      icon={faSpinner}
      className="w-8 h-auto animate-spin text-light-on-primary-light-variant dark:text-dark-on-primary-dark-variant"
    />
  );
}
