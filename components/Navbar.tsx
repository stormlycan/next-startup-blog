import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={144} height={50} alt="logo" />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button type="submit">LogOut</Button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button type="submit">
                <span>Login</span>
              </Button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
