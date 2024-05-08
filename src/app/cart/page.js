"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const navigate = useRouter();
  return (
    <main className="flex justify-center items-center h-[400px] gap-10">
      <button
        onClick={() => navigate.back()}
        className="bg-black text-white px-5 py-2 rounded-md hover:bg-red-600"
      >
        Back
      </button>
      <div className="text-center text-3xl py-10">Cart</div>
    </main>
  );
}
