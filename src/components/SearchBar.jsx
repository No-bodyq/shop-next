"use client";
import React, { useState } from "react";
import ExpandedSearchBar from "./ExpandedSearchBar";

export default function SearchBar() {
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
          <img src="search.svg" className="w-6 h-5" />
          <p>Search</p>
        </div>
      )}
    </>
  );
}
