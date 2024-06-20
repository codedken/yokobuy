"use client";

import UserButton from "@/components/UserButton";
import { Button } from "@/components/ui/button";
import { Lock, LogOut, Search, UserPlus2, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import SearchInput from "./SearchInput";

const BeforeNavBar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const openSearchBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="lg:flex hidden items-center justify-end w-full bg-black h-14 mx-auto px-44">
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
            className={`relative ${open ? "w-96" : "w-0"} flex h-12 transition-all`}
          >
            <SearchInput
              style={`bg-white ${open ? "w-96 border-none" : "w-0"} 
              text-gray-800 transition-all h-12 overflow-hidden relative outline-none
              rounded-l-sm
              placeholder:text-gray-700 placeholder:text-sm placeholder:font-light`}
              inputStyle="search-input w-full flex h-full pl-6 pr-20
            relative rounded-l-sm border-gray-400
            outline-none focus:border-black"
            />
          </div>
        </div>

        <Button
          variant={"outline"}
          className="rounded-none h-12 border-none"
          onClick={openSearchBar}
        >
          {open ? <X /> : <Search />}
        </Button>

        <div className="flex gap-1.5">
          {status === "authenticated" ? (
            <div className="ml-2 flex items-center">
              <UserButton user={session.user} />
            </div>
          ) : status === "loading" ? (
            <div className="ml-2 w-8 h-8 border-2 animate-spin border-r-0 border-white rounded-full" />
          ) : (
            <>
              <Button
                onClick={() => signIn()}
                variant={"outline"}
                className="bg-primary hover:bg-purple-700 rounded-none h-12 border-none"
              >
                <Lock className="mr-2 text-white" />
                <span className="text-white text-xs tracking-wider">LOGIN</span>
              </Button>

              <Link href="/register">
                <Button
                  variant={"outline"}
                  className="bg-[#C44593] hover:bg-[#AB367E] rounded-none h-12 border-none"
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
