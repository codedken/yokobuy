"use client";

import { Button } from "@/components/ui/button";
import { Lock, LogOut, Minus, Plus, UserPlus2, X } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import UserButton from "@/components/UserButton";
import toast from "react-hot-toast";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { truncate } from "fs";

interface Props {
  toggleSearch: any;
  toggleSideMenu: any;
  open: boolean;
  searchOpen: any;
  links: any;
  expand: any;
  expand2: any;
  expandMenu: any;
  expandMenu2: any;
}
const MobileNavBar: React.FC<Props> = ({
  toggleSideMenu,
  open,
  searchOpen,
  links,
  expand,
  expand2,
  expandMenu,
  expandMenu2,
}) => {
  const { data: session } = useSession();
  return (
    <>
      <Sheet open={open} onOpenChange={toggleSideMenu}>
        <SheetContent
          side="left"
          className="px-3 py-6 lg:hidden sm:max-w-lg w-[85vw]"
        >
          <SheetHeader>
            <SheetTitle>
              <div
                className={`flex lg:hidden items-center 
             justify-between duration-700 transition-all`}
              >
                {session?.user && <UserButton user={session.user} />}
                <Link href="/" className={`${searchOpen ? "hidden" : "flex"}`}>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Yoko<span className="text-primary">Buy</span>
                  </h1>
                </Link>
                <Button
                  variant={"outline"}
                  className={`${searchOpen ? "opacity-0 hidden" : "opacity-100"} 
                        border-none h-10 rounded-none w-14 hover:bg-transparent 
                        transition-all text-gray-500`}
                  onClick={toggleSideMenu}
                >
                  <X />
                </Button>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <div className="w-full relative top-8">
                <ul>
                  {links.map((li: any, i: number) => {
                    const is_expand_and_active =
                      expand.is_expand && expand.activeId === i;
                    const is_sublist_empty =
                      Object.keys(li.sublist).length === 0;

                    return (
                      <div key={i} className="flex flex-col">
                        <div
                          className={`group flex justify-between cursor-pointer 
                      hover:text-primary items-center border-b h-12`}
                        >
                          <Link href={`${li.href}`} onClick={toggleSideMenu}>
                            <li
                              className={`uppercase tracking-wide group-hover:text-primary 
                                ${is_expand_and_active ? "text-primary" : "text-black"}  
                                text-sm whitespace-nowrap cursor-pointer`}
                            >
                              {li.name}
                            </li>
                          </Link>
                          {!is_sublist_empty ? (
                            <Button
                              variant={"outline"}
                              onClick={() => expandMenu(i)}
                              className={`border-none ${open ? "flex p-0 mr-2" : "hidden"} rounded-none hover:bg-transparent group-hover:text-primary
                        ${is_expand_and_active ? "text-primary" : "text-gray-700"}`}
                            >
                              {is_expand_and_active ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </Button>
                          ) : (
                            <></>
                          )}
                        </div>
                        {!is_sublist_empty && (
                          <div
                            className={`${is_expand_and_active ? "max-h-[72rem]" : "max-h-0"} 
                      w-full duration-700 overflow-y-scroll transition-all`}
                          >
                            <ul>
                              {Object.entries(li.sublist).map(
                                ([key, value]: any) => {
                                  const is_expand_and_active2 =
                                    expand2.is_expand &&
                                    expand2.activeId === key;
                                  return (
                                    <div key={key}>
                                      <div
                                        onClick={() => expandMenu2(key)}
                                        className="group ml-4 h-12 flex justify-between 
                                    items-center border-b py-2 cursor-pointer
                                    hover:text-primary text-black"
                                      >
                                        <li
                                          className={`text-sm ${is_expand_and_active2 ? "text-primary" : "text-black"} 
                                uppercase font-light tracking-wide group-hover:text-primary whitespace-nowrap`}
                                        >
                                          {key}
                                        </li>
                                        {value.length !== 0 && (
                                          <Button
                                            variant={"outline"}
                                            className={`border-none rounded-none hover:bg-transparent
                                  ${is_expand_and_active2 ? "text-primary" : "text-gray-700"}
                                  group-hover:text-primary`}
                                          >
                                            {is_expand_and_active2 ? (
                                              <Minus className="h-4 w-4" />
                                            ) : (
                                              <Plus className="h-4 w-4" />
                                            )}
                                          </Button>
                                        )}
                                      </div>

                                      {value.length !== 0 && (
                                        <div
                                          className={`
                            ${is_expand_and_active2 ? "max-h-[72rem]" : "max-h-0"} 
                            w-full duration-700 overflow-y-scroll transition-all`}
                                        >
                                          <ul>
                                            {value.map((val: any, i: any) => (
                                              <div
                                                key={i}
                                                className="hover:text-primary text-black ml-8 flex justify-between 
                            items-center py-3 cursor-pointer"
                                              >
                                                <li
                                                  className="text-xs uppercase tracking-wide 
                                    font-light whitespace-nowrap"
                                                >
                                                  {val}
                                                </li>
                                              </div>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className=" border-gray-200 py-6">
              <SheetFooter>
                <div
                  onClick={toggleSideMenu}
                  className={`${open ? "flex" : "hidden"} w-full overflow-hidden 
          h-12 divide-x-[0.5px]`}
                >
                  {session?.user ? (
                    <Button
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        toast.success("You logged out successfully...");
                      }}
                      className="bg-red-500 hover:bg-red-700 
      rounded-none w-full h-full"
                      variant="ghost"
                    >
                      <LogOut className="mr-2 text-white" />
                      <span className="text-white text-xs tracking-wider">
                        LOGOUT
                      </span>
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={() => signIn()}
                        className="bg-primary w-1/2 hover:bg-violet-700 
            rounded-none h-full"
                        variant="ghost"
                      >
                        <Lock className="mr-2 text-white" />
                        <span className="text-white text-xs tracking-wider">
                          LOGIN
                        </span>
                      </Button>
                      <Link href="/register" className="w-1/2 h-full">
                        <Button
                          className="bg-[#C44593] hover:bg-[#AB367E]
           rounded-none w-full h-full"
                          variant="ghost"
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
              </SheetFooter>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavBar;
