"use client";

import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import LogoIcon from "../../../../assets/Icon/1.svg";
import { Button } from "@/app/components/shared/Button";
import Image from "next/image";
import { authOptions } from "@/app/_lib/auth";
// import Tooltip from "../../../common/Tooltip";

export async function Profile() {

  const session = await getServerSession(authOptions);
  const handleLogoutClick = () => signOut();

  return (
    <div className="grid grid-cols-profile items-center gap-3 cursor-pointer">
      <Image
        src={session?.user?.image ?? LogoIcon}
        alt={"User Profile Image"}
        width={40}
        height={40}
        className="h-30 w-30 rounded-full"
      />
      {/* <Tooltip text="Minha conta" position="top" variant="info"> */}
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          {session?.user
            ? `${session.user.name}`
            : "[USER_NAME]"}
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          {session?.user ? `${session.user.email}` : "[USER_EMAIL]"}
        </span>
      </div>
      {/* </Tooltip> */}
      <Button
        type="button"
        variant="ghost"
        data-dd-action-name="SignOut Profile button"
        aria-label="sign out button profile"
        onClick={handleLogoutClick}
      >
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  );
}
