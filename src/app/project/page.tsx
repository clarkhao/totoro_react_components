import { signOut } from "next-auth/react";
import React from "react";

export default function Project() {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
      <span>project</span>
    </>
  );
}
