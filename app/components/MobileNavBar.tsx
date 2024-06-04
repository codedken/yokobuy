import { Button } from "@/components/ui/button";
import { Minus, Plus, Search, X } from "lucide-react";
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
  toggleSearch,
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
        className={`${open ? "w-9/12 pt-12" : "w-0"} lg:w-0 lg:hidden flex justify-center 
                                       absolute duration-700 z-40 transition-all h-screen bg-white
                                       overflow-y-scroll overflow-hidden`}
      >
        <div
          className={`${open ? "opacity-100 top-6" : "opacity-0 -top-40"} 
                                        px-3 flex w-full absolute lg:hidden items-center 
                                        justify-between duration-700 transition-all`}
        >
          <Button
            variant={"outline"}
            className={`${searchOpen ? "opacity-0" : "opacity-100"} 
                        border-none h-10 rounded-none w-14 hover:bg-transparent 
                        transition-all hover:text-primary text-gray-500`}
            onClick={toggleSideMenu}
          >
            <X
              className={`${open ? "rotate-0" : "rotate-180"} transition-all`}
            />
          </Button>
          <Link href="/" className={`${searchOpen ? "hidden" : "flex"}`}>
            <h1 className="text-2xl md:text-3xl font-bold">
              Yoko<span className="text-primary">Buy</span>
            </h1>
          </Link>

          <Button
            variant={"outline"}
            className="border-none hover:bg-transparent hover:text-primary
                                rounded-none text-gray-500"
            onClick={toggleSearch}
          >
            {searchOpen ? <X /> : <Search className="h-6 w-6" />}
          </Button>
        </div>
        <input
          type="text"
          className={`${searchOpen ? "w-9/12 border pl-6 " : "w-0"} bg-gray-200 
                                h-10 absolute outline-none transition-all top-6 right-14
                              placeholder:text-gray-500 placeholder:text-sm placeholder:font-light`}
          placeholder="Search Item..."
        />
        <div className="w-full relative px-8 top-16">
          <ul>
            {links.map((li: any, i: number) => {
              const is_expand_and_active =
                expand.is_expand && expand.activeId === i;
              const is_sublist_empty = Object.keys(li.sublist).length === 0;

              return (
                <div key={i} className="flex flex-col">
                  <div
                    onClick={() => expandMenu(i)}
                    className={`group flex justify-between cursor-pointer hover:text-primary items-center border-b h-12`}
                  >
                    <li
                      className={`uppercase tracking-wide group-hover:text-primary 
                                ${is_expand_and_active ? "text-primary" : "text-black"}  
                                font-light whitespace-nowrap cursor-pointer`}
                    >
                      {li.name}
                    </li>
                    {!is_sublist_empty ? (
                      <Button
                        variant={"outline"}
                        className={`border-none rounded-none hover:bg-transparent group-hover:text-primary
                        ${is_expand_and_active ? "text-primary" : "text-gray-700"}`}
                      >
                        {is_expand_and_active ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
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
                        {Object.entries(li.sublist).map(([key, value]: any) => {
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
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
