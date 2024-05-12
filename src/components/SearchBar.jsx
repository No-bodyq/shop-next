"use client";
import React, { useState } from "react";
import ExpandedSearchBar from "./ExpandedSearchBar";
import { usePathname } from "next/navigation";

export default function SearchBar() {
  const routeName = usePathname();
  const isHomePage = routeName === "/";
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <>
      {isExpanded ? (
        <ExpandedSearchBar />
      ) : (
        <div
          className="flex gap-1 cursor-pointer items-center"
          onClick={expand}
        >
          <img
            src={isHomePage ? "search.svg" : "search-dark.svg"}
            className="w-6 h-5"
          />
          <p>Search</p>
        </div>
      )}
    </>
  );
}
