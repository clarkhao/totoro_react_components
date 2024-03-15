"use client";
import React from "react";
import { Input } from "../../../../component/next-input/cvaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { Button } from "../../../../component/button/cvaButton";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../store/slices/auth";
import { RootState } from "../../../../store";
import ErrorBoundary from "../../../../component/error/ErrorBoundary";
import { SignInResponse, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { debounce, logger } from "../../../../utils";
import { SpinnerOverlay } from "../../../../component/spinner/spinnerOverlay";

export default function SigninForm() {
  const dispatch = useDispatch();
  const errState = useSelector((state: RootState) => state.error.errors);
  const auth = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const handleSignin = async () => {
    const { error, status, ok, url } = (await signIn("credentials", {
      email: email,
      password: pwd,
      redirect: false,
    })) as SignInResponse;
    logger.log(status);
    logger.log(error);
    logger.log(ok);
    logger.log(url);
    setIsLoading(false);
    switch (error) {
      case "User is not confirmed.":
        dispatch(setStep({ email, step: 1 }));
        router.push("/auth?sign=up");
        break;
      case null:
        router.refresh();
        break;
      default:
        break;
    }
  };

  return (
    <ErrorBoundary>
      <form
        className={twMerge(
          "w-full max-w-[400px]",
          "flex flex-col justify-center items-start gap-6 ",
        )}
      >
        <Input
          labeltext={"Email"}
          variant={"filled"}
          intent={"primary"}
          name="email"
          type="email"
          height="md"
          lefticon={
            <FontAwesomeIcon icon={faEnvelope} className="w-3 h-auto" />
          }
          verify
          reqerr={errState?.name}
          value={email}
          handleset={(v) => setEmail(v)}
        />
        <Input
          labeltext={"Password"}
          variant={"filled"}
          intent={"primary"}
          name="password"
          type={auth.fields["type"]}
          height="md"
          lefticon={<FontAwesomeIcon icon={faLock} className="w-3 h-auto" />}
          reqerr={errState?.password}
          value={pwd}
          handleset={(v) => setPwd(v)}
        />
        <span className="w-full flex flex-col justify-center gap-2">
          <Button
            intent={"primary"}
            fill={"contained"}
            disabled={isLoading}
            size={"base"}
            state={"pre"}
            className="p-x-2 w-full"
            onClick={(e) => {
              e.preventDefault();
              debounce(async () => {
                setIsLoading(true);
                await handleSignin();
              }, 300);
            }}
          >
            Login
          </Button>
          <span className="w-full flex flex-row justify-between dark:text-gray-300">
            <p className="text-sm">
              {"Don't have an account? "}
              <Link
                href={"/auth?sign=up"}
                as={"/auth?sign=up"}
                className="dark:text-dark-primary-light-variant hover:text-light-primary dark:hover:text-dark-primary"
              >
                <ins>Sign up</ins>
              </Link>
            </p>
            <p className="text-sm">
              <Link
                href={"/auth?sign=up"}
                as={"/auth?sign=up"}
                className="dark:text-dark-primary-light-variant hover:text-light-primary dark:hover:text-dark-primary"
              >
                <ins>Forget Password</ins>
              </Link>
            </p>
          </span>
        </span>
      </form>
      {isLoading ? <SpinnerOverlay /> : null}
    </ErrorBoundary>
  );
}
