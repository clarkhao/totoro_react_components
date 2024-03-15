"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { twMerge } from "tailwind-merge";

export default function Dashboard() {
  const isDark = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <>
      <div
        className={twMerge(
          "w-full min-h-screen pt-16 lg:pt-[88px] ",
          `${isDark ? "dark bg-dark-background" : "bg-light-background"}`,
        )}
      >
        dashboard
      </div>
    </>
  );
}
