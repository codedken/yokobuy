"use client";

import UserButton from "@/components/UserButton";
import { Button } from "@/components/ui/button";
import { Lock, LogOut, Search, UserPlus2, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const BeforeNavBar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const openSearchBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="lg:flex hidden items-center justify-end w-full bg-black h-12 mx-auto px-44">
      <div className="flex items-center">
        <div className="flex items-center">
          <p
            className={`${open ? "hidden" : ""} text-white text-sm font-light mr-8 whitespace-nowrap`}
          >
            Need help?
            <Link
              href=""
              className="underline ml-2 hover:text-primary hover:no-underline"
            >
              Contact us on Whatsapp
            </Link>
            <Link
              href=""
              className="underline ml-2 hover:text-primary hover:no-underline"
            >
              or Contact Us
            </Link>
          </p>
          <div
            className={`relative ${open ? "w-96" : "w-0 "} flex h-11 transition-all`}
          >
            <input
              type="text"
              className={`bg-white ${open ? "w-96 py-[10px] rounded-l-sm border-r-2 border-black pl-6" : "w-0"} 
              text-gray-800 transition-all relative outline-none placeholder:text-gray-700 placeholder:text-sm placeholder:font-light`}
              placeholder="Search Item"
            />
            <Button
              variant="outline"
              className={`${!open && "hidden"} w-14 h-11 right-1 rounded-none border-none absolute`}
            >
              <Search />
            </Button>
          </div>
        </div>

        <Button
          variant={"outline"}
          className="rounded-none h-11 border-none"
          onClick={openSearchBar}
        >
          {open ? <X /> : <Search />}
        </Button>

        <div className="flex gap-1.5">
          {session?.user ? (
            <div className="ml-2 flex items-center gap-4">
              {/* <Button
                onClick={() => signOut()}
                variant={"outline"}
                className="bg-red-500 hover:bg-red-700 rounded-none h-11 border-none"
              >
                <LogOut className="mr-2 text-white" />
                <span className="text-white text-xs tracking-wider">
                  LOGOUT
                </span>
              </Button> */}
              <UserButton user={session.user} />
            </div>
          ) : (
            <>
              <Button
                onClick={() => signIn()}
                variant={"outline"}
                className="bg-primary hover:bg-purple-700 rounded-none h-11 border-none"
              >
                <Lock className="mr-2 text-white" />
                <span className="text-white text-xs tracking-wider">LOGIN</span>
              </Button>

              <Link href="/register">
                <Button
                  variant={"outline"}
                  className="bg-[#C44593] hover:bg-[#AB367E] rounded-none h-11 border-none"
                >
                  <UserPlus2 className="mr-2 text-white" />
                  <span className="text-white text-xs tracking-wider">
                    REGISTER
                  </span>
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeforeNavBar;
