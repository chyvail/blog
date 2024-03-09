/**
 * Search component for the application.
 * Displays an input with a search icon
 */

import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="relative">
      <input
        type="text"
        className="mx-4 px-5 py-1 rounded text-slate-900"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Text"
      />
      <div className="absolute inset-y-0 right-0 pr-7 flex items-center">
        <Link href={`/search/${search}`}>
          <CiSearch className="text-slate-900 cursor-pointer pointer-events-none" />
        </Link>
      </div>
    </div>
  );
}
