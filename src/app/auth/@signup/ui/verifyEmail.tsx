import React from "react";
import { OTP } from "../../../../component/next-input/otp";
import { twMerge } from "tailwind-merge";
import { Button } from "../../../../component/button/cvaButton";
import { Chip } from "../../../../component/chip/chip";
import { userPool } from "../../utils/cognito";
import { CognitoUser } from "amazon-cognito-identity-js";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../../../store/slices/auth";
import { TToastMsg, add } from "../../../../store/slices/toast";
import { nanoid } from "nanoid";
import { RootState } from "../../../../store";
import { logger } from "../../../../utils";
import { SpinnerOverlay } from "../../../../component/spinner/spinnerOverlay";

export default function VerifyCode() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const [code, setCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const cognitoUser = new CognitoUser({
    Username: auth.signup.email,
    Pool: userPool,
  });
  const handleResend = () => {
    setIsLoading(true);
    cognitoUser.resendConfirmationCode(function (err, result) {
      setIsLoading(false);
      if (err) {
        const newToast: TToastMsg = {
          id: nanoid(),
          colors: "error",
          msg: err.message || JSON.stringify(err),
          display: "standard",
          timed: "lg",
          variant: "colored",
        };
        dispatch(add(newToast));
        return;
      }
      logger.log("call result: " + JSON.stringify(result));
      const newToast: TToastMsg = {
        id: nanoid(),
        colors: "success",
        msg: "New code has been sent to your email.",
        display: "standard",
        timed: "lg",
        variant: "colored",
      };
      dispatch(add(newToast));
    });
  };
  const handleVerify = (v: string) => {
    setIsLoading(true);
    logger.log(v);
    cognitoUser.confirmRegistration(v, true, function (err, result) {
      setIsLoading(false);
      if (err) {
        logger.error(err.message || JSON.stringify(err));
        return;
      }
      logger.log("call result: " + result);
      dispatch(setStep({ ...auth.signup, step: 2 }));
    });
  };
  const hideInfo = (email: string) => {
    const [name, site] = email.split("@");
    return name.slice(0, 1) + "***@" + site.slice(0, 1) + "***";
  };
  const handleChangeEmail = () => {
    dispatch(setStep({ email: auth.signup.email, step: 0 }));
  };
  return (
    <>
      <form
        className={twMerge(
          "w-full max-w-[400px]",
          "flex flex-col justify-center items-start gap-6",
        )}
      >
        <p className="text-sm text-justify text-light-on-background dark:text-dark-on-background">
          An email with a verification code has been sent to your email{" "}
          {hideInfo(auth.signup.email)}
        </p>
        <label className="font-medium text-light-on-background dark:text-dark-on-background">
          Please Enter Your Digit Code
        </label>
        <OTP
          size={6}
          intent={"primary"}
          handleSet={(v) => {
            handleVerify(v);
            setCode(v);
          }}
        />
        <span className="w-full inline-flex justify-start items-end gap-2 ">
          <label className="text-light-on-background dark:text-dark-on-background">
            {"Don't receive a Code?"}
          </label>
          <Chip
            bgColor={"indigo"}
            actual={"Resend Code"}
            length={"Resend Code".length + 1}
            selected={false}
            handleClick={handleResend}
          />
        </span>
        <span className="w-full flex flex-col justify-center items-end gap-2">
          <Button
            intent={"primary"}
            fill={"contained"}
            disabled={false}
            size={"base"}
            state={"pre"}
            className="w-full"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleVerify(code);
            }}
          >
            Verify Email
          </Button>
          <p className="text-sm dark:text-dark-primary-light-variant">
            <Link
              href={"/auth?sign=up"}
              as={"/auth?sign=up"}
              className="hover:text-light-primary"
              onClick={handleChangeEmail}
            >
              <ins>Change Email?</ins>
            </Link>
          </p>
        </span>
      </form>
      {isLoading ? <SpinnerOverlay /> : null}
    </>
  );
}
