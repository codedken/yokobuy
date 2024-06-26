"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchInput = ({
  style,
  inputStyle,
}: {
  style: string;
  inputStyle: string;
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={style}>
      <div
        className={`absolute search-slider 
            ${searchValue !== "" ? "paused" : ""} left-0 pr-20 w-full`}
      >
        <ul className="pl-6 w-full">
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Search Items...
          </li>
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Electronics - tv, refrigerator, musicals
          </li>
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Gadgets - phones, computers, tabs
          </li>
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Automobiles - cars and their parts
          </li>
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Fashion - suit, native, shoes, bags
          </li>
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Furnitures - ergonomic chair, sofa & couch
          </li>
          <li
            className="h-12 w-full whitespace-nowrap 
                flex items-center text-gray-400 text-sm"
          >
            Search Items...
          </li>
        </ul>
      </div>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        className={`${searchValue !== "" ? "bg-white " : "bg-transparent "} 
        ${inputStyle}
        `}
        placeholder=""
      />
      <div
        className="flex justify-center absolute top-0 
              bottom-0 my-auto right-1 h-5/6 w-16 rounded-full 
            bg-black items-center cursor-pointer"
      >
        <Search className="text-white" />
      </div>
    </div>
  );
};

export default SearchInput;
