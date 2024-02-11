'use client'

import TitlePage from "@/app/components/layout/TitlePage";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signOut();
    }


  }, [status]);

  return (
    <>
      <TitlePage title="Dashboard" description="Welcome [user.name]" />
      <br />
      {JSON.stringify(status)}
    </>
  );
}
