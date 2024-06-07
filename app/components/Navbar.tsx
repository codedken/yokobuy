"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import ItemQty from "./ItemQty";
import { useState } from "react";
import { categories_list } from "../models/categories_list";
import MobileNavBar from "./MobileNavBar";

const links = categories_list;

export default function Navbar() {
  const { handleCartClick } = useShoppingCart();

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expand, setExpand] = useState({
    is_expand: false,
    activeId: -1,
  });

  const [expand2, setExpand2] = useState({
    is_expand: false,
    activeId: -1,
  });

  const [subList, setSubListId] = useState({
    activeKey: "",
    isSubListOpen: false,
  });

  const modifySubListId = (key: any) => {
    setSubListId((prev) => ({
      activeKey: key,
      isSubListOpen: !prev.isSubListOpen,
    }));
  };

  const toggleSideMenu = () => {
    setOpen((prev) => {
      if (searchOpen) setSearchOpen(false);
      return !prev;
    });
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const expandMenu = (id: number) => {
    setExpand((prev) => {
      if (prev.activeId !== id && prev.is_expand) {
        setExpand2((_) => {
          return {
            ..._,
            is_expand: false,
          };
        });
        return {
          activeId: id,
          is_expand: true,
        };
      }

      setExpand2((_) => {
        return {
          ..._,
          is_expand: false,
        };
      });

      return {
        activeId: id,
        is_expand: !prev.is_expand,
      };
    });
  };

  const expandMenu2 = (id: any) => {
    setExpand2((prev) => {
      if (prev.activeId !== id && prev.is_expand === true) {
        return {
          activeId: id,
          is_expand: true,
        };
      }

      return {
        activeId: id,
        is_expand: !prev.is_expand,
      };
    });
  };

  return (
    <header className="mb-4 border-b border-black sticky top-0 z-50 bg-white">
      <MobileNavBar
        toggleSearch={toggleSearch}
        toggleSideMenu={toggleSideMenu}
        open={open}
        searchOpen={searchOpen}
        links={links}
        expand={expand}
        expand2={expand2}
        expandMenu={expandMenu}
        expandMenu2={expandMenu2}
      />
      <div className="flex items-center justify-between lg:mx-auto px-4 sm:px-6 lg:max-w-7xl">
        <Button
          variant={"outline"}
          className="flex lg:hidden rounded-none border-black border-y-0 h-14 w-14 sm:h-20 sm:w-20"
          onClick={toggleSideMenu}
        >
          <Menu />
        </Button>
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold">
            Yoko<span className="text-primary">Buy</span>
          </h1>
        </Link>
        <nav className="hidden gap-8 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx} className="group block relative">
              <Link
                href={link.href}
                className="text-sm uppercase text-black transition 
                            duration-100 group-hover:text-primary"
              >
                {link.name}
              </Link>
              <div
                className="absolute group-hover:w-full h-[0.05rem] w-0 -mt-0.5 
                         bg-gray-900 mx-auto transition-all left-0 right-0
                         duration-500"
              />
              {Object.keys(link.sublist).length !== 0 ? (
                <ul
                  className="group-hover:w-[12rem] group-hover:border border-black 
                  w-0 flex flex-col gap-4 -left-6 absolute bg-white z-40 py-8"
                >
                  {Object.entries(link.sublist).map(([key, value]) => (
                    <div
                      key={key}
                      onMouseOver={() => modifySubListId(key)}
                      onMouseOut={() => modifySubListId("")}
                      className="relative px-6 cursor-pointer text-black hover:text-primary 
                      group-hover:flex hidden gap-4 justify-between items-center"
                    >
                      <li className={`whitespace-nowrap text-sm uppercase`}>
                        <Link href="">{key}</Link>
                        {
                          <ul
                            className={`absolute ${
                              subList.activeKey == key && value.length !== 0
                                ? "w-[12rem] border"
                                : "w-0"
                            } -mt-10 left-[11.5rem] flex flex-col gap-6 
                            bg-white py-6 z-40 transition-all delay-300 duration-300 overflow-hidden 
                            shadow-sm border-black`}
                          >
                            {value.map((val: any, i: any) => (
                              <li
                                key={i}
                                className={`whitespace-nowrap
                                          text-xs text-gray-500 uppercase 
                                          px-8 hover:text-primary`}
                              >
                                <Link href="">{val}</Link>
                              </li>
                            ))}
                          </ul>
                        }
                      </li>
                      {value.length !== 0 && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          ))}
        </nav>
        <div
          onClick={() => handleCartClick()}
          className="flex cursor-pointer relative divide-x border-r sm:border-l"
        >
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-14 w-14 sm:h-20 sm:w-20 border-black 
                        border-y-0 rounded-none"
          >
            <ShoppingBag />
          </Button>
          <ItemQty />
        </div>
      </div>
    </header>
  );
}
