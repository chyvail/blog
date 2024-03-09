import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        className="mx-4 px-5 py-1 rounded"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 right-0 pr-7 flex items-center pointer-events-none">
        <CiSearch className="text-slate-900" />
      </div>
    </div>
  );
}
