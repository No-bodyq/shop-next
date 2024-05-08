import React from "react";

export default function ExpandedSearchBar() {
  return (
    <div className="flex items-center">
      <img src="search-dark.svg" className="w-6 h-5 relative left-8" />
      <input
        className="w-[400px] rounded-2xl pl-9 py-[2px] flex items-end bg-white outline-none text-black"
        placeholder="Enter search here"
      />
    </div>
  );
}
