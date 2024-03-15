"use client";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import SignupForm from "./formWrapper";
import SignupCtx, { useStep } from "../../utils/hook";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../../../../component/styles/transition.css";
import { Stepper } from "../../../../component/stepper/stepper";
import VerifyCode from "./verifyEmail";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export default function Provider() {
  const signup = useSelector((state: RootState) => state.auth.signup);
  const [stepState, stepDispatch] = useStep([
    "User Info",
    "Verify Email",
    "Complete",
  ]);
  const getStepChild = (step: number) => {
    switch (step) {
      case 0:
        return <SignupForm />;
      case 1:
        return <VerifyCode />;
      case 2:
        return <span>Verify OK</span>;
      case 3:
        return <span>Redirect to Workspace</span>;
      default:
        return <SignupForm />;
    }
  };
  return (
    <Fragment>
      <SignupCtx.Provider value={{ stepState, stepDispatch }}>
        <div
          className={twMerge(
            "w-full h-14 max-w-[400px] flex justify-center items-center",
          )}
        >
          <SwitchTransition mode={"out-in"}>
            <CSSTransition
              key={`${stepState.stepOpen}`}
              timeout={{ exit: 150, enter: 150 }}
              classNames={"ymotion"}
            >
              {signup.step > 0 || stepState.stepOpen ? (
                <Stepper
                  step={signup.step}
                  steps={stepState.steps ?? []}
                  size={"sm"}
                  className="grid-cols-3"
                />
              ) : (
                <strong className="text-gray-500 dark:text-gray-300">
                  Create New Account
                </strong>
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={signup.step}
            timeout={{ exit: 150, enter: 150 }}
            classNames={"xmotion"}
          >
            {getStepChild(signup.step)}
          </CSSTransition>
        </SwitchTransition>
      </SignupCtx.Provider>
    </Fragment>
  );
}
