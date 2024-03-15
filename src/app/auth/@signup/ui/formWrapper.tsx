"use client";
import React from "react";
import { Input } from "../../../../component/next-input/cvaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { Button } from "../../../../component/button/cvaButton";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../store/slices/auth";
import { add } from "../../../../store/slices/error";
import { RootState } from "../../../../store";
import Link from "next/link";
import SignupCtx from "../../utils/hook";
import { userPool } from "../../utils/cognito";
import { logger } from "../../../../utils";

export default function SignupForm() {
  const dispatch = useDispatch();
  const errState = useSelector((state: RootState) => state.error.errors);
  const auth = useSelector((state: RootState) => state.auth);
  const ctx = React.useContext(SignupCtx);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    userPool.signUp(email, pwd, [], [], (err, result) => {
      if (err) {
        logger.log(err.message || JSON.stringify(err));
        dispatch(
          add({ from: "email", message: err.message || JSON.stringify(err) }),
        );
        return;
      }
      const cognitoUser = result?.user;
      if (cognitoUser) {
        dispatch(setStep({ email, step: 1 }));
      }
    });
  };

  return (
    <form
      className={twMerge(
        "w-full max-w-[400px]",
        "flex flex-col justify-center items-start gap-2 ",
      )}
    >
      <Input
        labeltext={"Email"}
        variant={"filled"}
        intent={"primary"}
        name="email"
        type="email"
        height="md"
        lefticon={<FontAwesomeIcon icon={faEnvelope} className="w-3 h-auto" />}
        verify
        reqerr={errState?.email}
        value={email}
        handleset={(v) => setEmail(v)}
        onFocus={() =>
          ctx?.stepDispatch({ type: "toggle-step", payload: true })
        }
        onBlur={() => {
          if (email === "" && pwd === "") {
            ctx?.stepDispatch({ type: "toggle-step", payload: false });
          }
        }}
      />
      <Input
        labeltext={"Password"}
        variant={"filled"}
        intent={"primary"}
        name="password"
        type={auth.fields["type"]}
        height="md"
        lefticon={<FontAwesomeIcon icon={faLock} className="w-3 h-auto" />}
        verify
        reqerr={errState?.password}
        value={pwd}
        handleset={(v) => setPwd(v)}
        onFocus={() =>
          ctx?.stepDispatch({ type: "toggle-step", payload: true })
        }
        onBlur={() => {
          if (email === "" && pwd === "") {
            ctx?.stepDispatch({ type: "toggle-step", payload: false });
          }
        }}
      />
      <span className="w-full flex flex-col justify-center items-end gap-2">
        <Button
          intent={"primary"}
          fill={"contained"}
          disabled={false}
          size={"base"}
          state={"pre"}
          className="p-x-2 w-full"
          onClick={handleSignup}
        >
          Sign up
        </Button>
        <p className="text-sm text-light-on-background dark:text-dark-on-background">
          {"Already have an account? "}
          <Link
            href={"/auth?sign=in"}
            as={"/auth?sign=in"}
            className="text-light-primary-dark-variant dark:text-dark-primary-light-variant dark:hover:text-dark-primary hover:text-light-primary"
          >
            <ins>Sign in</ins>
          </Link>
        </p>
      </span>
      <p className="text-xs p-x-2 max-w-[400px] w-full text-justify dark:text-gray-400">
        {
          "By clicking the “Sign up” button or using any of the social login options, you are creating an account, and agree to "
        }
        <Link href={""} as={""}>
          <ins>
            <strong>Terms of Service</strong>
          </ins>
        </Link>{" "}
        and{" "}
        <Link href={""} as={""}>
          <ins>
            <strong>and Privacy Policy</strong>
          </ins>
        </Link>
      </p>
    </form>
  );
}
