import React from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 text-black">
        <div className="flex">
          <a>
            <HiMenu color="888888" />
          </a>
        </div>
        <div className="shrink w-80 text-center">
          <a>logo</a>
        </div>
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input
            type="text"
            className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full placeholder-slate-500 focus:outline-none focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
}
