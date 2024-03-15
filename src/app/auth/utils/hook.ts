"use client";
import React from "react";
import { deepClone, logger } from "../../../utils";

export type TSignupStep = {
  steps: Array<{ step: string; err: Error | null }>;
  // display the step change
  stepOpen: boolean;
};

type TSignupStepPayload = {
  reset: undefined;
  "set-error": { step: number; err: Error | null };
  "toggle-step": boolean;
};

export type TSignupStepAction = {
  type: keyof TSignupStepPayload;
  payload: TSignupStepPayload[TSignupStepAction["type"]];
};

function useStep(
  stepTitles: Array<string>,
): [TSignupStep, React.Dispatch<TSignupStepAction>] {
  const initStep: TSignupStep = {
    steps: stepTitles.map((el) => {
      return {
        step: el,
        err: null,
      };
    }),
    stepOpen: false,
  };
  const stepReducer = (state: TSignupStep, action: TSignupStepAction) => {
    switch (action.type) {
      case "reset":
        return initStep;
      case "set-error": {
        const stepsCopy = deepClone<Array<{ step: string; err: Error | null }>>(
          state.steps,
        );
        stepsCopy[
          (action.payload as TSignupStepPayload["set-error"]).step
        ].err = (action.payload as TSignupStepPayload["set-error"]).err;
        return { ...state, steps: stepsCopy };
      }
      case "toggle-step":
        return { ...state, stepOpen: action.payload as boolean };
      default:
        return state;
    }
  };
  const [stepState, stepDispatch] = React.useReducer(stepReducer, initStep);
  React.useEffect(() => {
    logger.log(stepState);
  }, [stepState]);

  return [stepState, stepDispatch];
}

type TStepHandler = {
  stepState: TSignupStep;
  stepDispatch: React.Dispatch<TSignupStepAction>;
};

const SignupCtx = React.createContext<TStepHandler | null>(null);

export { useStep };
export default SignupCtx;
