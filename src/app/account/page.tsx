import { signOut } from "next-auth/react";
import React from "react";

export default function Account() {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
      <span>account</span>
    </>
  );
}
