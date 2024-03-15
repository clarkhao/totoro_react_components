"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { twMerge } from "tailwind-merge";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDark = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <div
      className={twMerge(
        "w-full min-h-screen ",
        `${isDark ? "dark bg-dark-background" : "bg-light-background"}`,
      )}
    >
      {children}
    </div>
  );
}
