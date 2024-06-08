import { Button } from "@/components/ui/button";
import { Lock, Minus, Plus, UserPlus2, X } from "lucide-react";
import Link from "next/link";

interface Props {
  toggleSearch: any;
  toggleSideMenu: any;
  open: any;
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
  return (
    <>
      <div
        className={`absolute bg-black ${open ? "opacity-80 flex" : "opacity-0 hidden"} 
                    lg:hidden delay-300 transition-all z-30 w-full h-screen`}
        onClick={toggleSideMenu}
      />
      <div
        className={`${open ? "w-10/12" : "w-0"} lg:w-0 lg:hidden 
                bg-white absolute flex flex-col h-screen 
                duration-500 z-40 transition-all`}
      >
        <div
          className={`flex flex-1 flex-col mt-6
                    overflow-y-scroll overflow-hidden`}
        >
          <div
            className={`flex lg:hidden items-center 
            ml-4 mr-2 justify-between duration-700 transition-all`}
          >
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
          <div className="w-full relative px-4 top-8">
            <ul>
              {links.map((li: any, i: number) => {
                const is_expand_and_active =
                  expand.is_expand && expand.activeId === i;
                const is_sublist_empty = Object.keys(li.sublist).length === 0;

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
                                expand2.is_expand && expand2.activeId === key;
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
        <div
          onClick={toggleSideMenu}
          className={`${open ? "flex" : "hidden"} w-full h-12 mb-14 divide-x-[0.5px]`}
        >
          <Link href="/login" className="w-1/2">
            <Button
              className="bg-primary hover:bg-violet-700 
            rounded-none w-full h-full"
              variant="ghost"
            >
              <Lock className="mr-2 text-white" />
              <span className="text-white text-xs tracking-wider">LOGIN</span>
            </Button>
          </Link>
          <Link href="/register" className="w-1/2">
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
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
