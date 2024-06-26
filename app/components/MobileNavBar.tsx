"use client";

import { Button } from "@/components/ui/button";
import { Lock, LogOut, Minus, Plus, UserPlus2, X } from "lucide-react";
import Link from "next/link";
import UserButton from "@/components/UserButton";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetFooter,
} from "@/components/ui/sheet";
import AlertDialogMenu from "./AlertDialogMenu";
import { useToast } from "@/components/ui/use-toast";

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
  const { data: session, status } = useSession();
  const { toast } = useToast();
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
             gap-4 duration-700 transition-all`}
              >
                {status === "loading" ? (
                  <div
                    className="animate-spin ml-2 w-8 h-8 rounded-full 
            border-white border-4 border-t-primary"
                  />
                ) : (
                  session?.user && <UserButton user={session.user} />
                )}
                <Link href="/" className={`${searchOpen ? "hidden" : "flex"}`}>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Yoko<span className="text-primary">Buy</span>
                  </h1>
                </Link>
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
                  className={`${open ? "flex" : "hidden"} w-full overflow-hidden 
          h-12 gap-2`}
                >
                  {session?.user ? (
                    <AlertDialogMenu
                      action={() => {
                        signOut({ callbackUrl: "/" });
                        toast({
                          title: "Logged Out",
                          description: "You logged out successfully...",
                        });
                      }}
                    >
                      <Button
                        className="bg-[#192a66] hover:bg-[#304aa8] w-full 
                        h-full"
                        variant="ghost"
                      >
                        <LogOut className="mr-2 text-white" />
                        <span className="text-white text-xs tracking-wider">
                          LOGOUT
                        </span>
                      </Button>
                    </AlertDialogMenu>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          signIn();
                        }}
                        className="bg-[#192a66] hover:bg-[#304aa8] w-1/2 
                        h-full"
                        variant="ghost"
                      >
                        <Lock className="mr-2 text-white" />
                        <span className="text-white text-xs tracking-wider">
                          LOGIN
                        </span>
                      </Button>
                      <Link href="/register" className="w-1/2 h-full">
                        <Button
                          onClick={() => {
                            toggleSideMenu();
                          }}
                          className="bg-[#761f54] hover:bg-[#AB367E]
                         w-full h-full"
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
