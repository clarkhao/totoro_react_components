"use client";
import React from "react";
import { Button } from "../../../component/button/cvaButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import { debounce } from "../../../utils";
import { SpinnerOverlay } from "../../../component/spinner/spinnerOverlay";

export default function Signup() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <div className="w-full flex justify-center">
        <Button
          intent={"secondary"}
          fill={"outlined"}
          disabled={isLoading}
          size={"base"}
          state={"pre"}
          className="p-x-2 max-w-[400px] w-full"
          withIcon
          icon={<FontAwesomeIcon icon={faGoogle} className="w-3 h-auto" />}
          onClick={() => {
            debounce(() => {
              setIsLoading(true);
              signIn("cognito_google");
            }, 300);
          }}
        >
          Continue with Google
        </Button>
      </div>
      <p className="text-light-on-background dark:text-dark-on-background">
        or
      </p>
      {isLoading ? <SpinnerOverlay /> : null}
    </>
  );
}