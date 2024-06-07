"use client";

import { Button } from "@/components/ui/button";
import { Lock, Search, UserPlus2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BeforeNavBar = () => {
  const [open, setOpen] = useState(false);

  const openSearchBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="lg:flex hidden items-center justify-end w-full bg-black h-11 mx-auto px-44">
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
          <input
            type="text"
            className={`bg-white ${open ? "w-96 py-2 rounded-l-sm border-r-2 border-black pl-6" : "w-0"} transition-all text-gray-800 outline-none placeholder:text-gray-700 placeholder:text-sm placeholder:font-light`}
            placeholder="Search Item"
          />
        </div>

        <Button
          variant={"outline"}
          className="rounded-none h-11 border-none"
          onClick={openSearchBar}
        >
          {open ? <X /> : <Search />}
        </Button>

        <div className="flex gap-1.5">
          <Link href="/login">
            <Button
              variant={"outline"}
              className="bg-primary hover:bg-purple-700 rounded-none h-11 border-none"
            >
              <Lock className="mr-2 text-white" />
              <span className="text-white text-xs tracking-wider">LOGIN</span>
            </Button>
          </Link>

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
        </div>
      </div>
    </div>
  );
};

export default BeforeNavBar;
