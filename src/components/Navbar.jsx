import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="flex justify-between px-8 py-2 text-md items-center sticky z-10 text-white">
      <div className="flex justify-between gap-10 items-baseline">
        <Link href="/">
          <h1 className="text-2xl font-extrabold">Jolt</h1>
        </Link>
        <div className="flex justify-between gap-4">
          <Link href="/">Categories</Link>
          <Link href="/">Collections</Link>
          <Link href="/">Store</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Find Store</Link>
        </div>
      </div>
      <div className="flex gap-x-10 items-end">
        <SearchBar />
        <Link href="/cart">
          <div className="flex gap-1 items-center">
            <img src="bag.svg" className="w-6 h-5" />
            <p>Cart(0)</p>
          </div>
        </Link>
        <Link href="/cart">
          <div className="flex gap-1 items-center">
            <img src="profile.svg" className="w-6 h-6" />
            <p>Signup/Login</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
