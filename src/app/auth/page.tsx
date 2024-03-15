"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { twMerge } from "tailwind-merge";
import { ToastQueue } from "../../component/toast/toastQueue";
import Signin from "./@signin/page";
import Layout from "./@signup/layout";
import Signup from "./@signup/page";

export default function Auth() {
  const searchParams = useSearchParams();
  const auth = searchParams.get("sign");
  const isDark = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <>
      <div
        className={twMerge(
          "w-full min-h-screen pt-24 lg:pt-32 flex flex-col justify-start items-center gap-10",
          `${isDark ? "dark bg-dark-background" : "bg-light-background"}`,
        )}
      >
        <h2 className="text-2xl text-light-on-background dark:text-dark-on-background">
          <strong>{auth === "up" ? "Sign up" : "Sign in"}</strong>
        </h2>
        {auth === "up" ? (
          <Layout>
            <Signup />
          </Layout>
        ) : (
          <Signin />
        )}
      </div>
      <ToastQueue pos={"right"} />
    </>
  );
}
