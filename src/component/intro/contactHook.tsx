"use client";
import React from "react";

type TError = {
  errors: Record<string, { isErr: boolean; errMsg: string | undefined }>;
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, { isErr: boolean; errMsg: string | undefined }>>
  >;
};

export const ErrorContext = React.createContext<TError | null>(null);