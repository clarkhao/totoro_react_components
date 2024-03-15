import React from "react";
import { auth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session);
  if (session === null) {
    redirect("/");
  }
  return <div className="">{children}</div>;
}
