import Link from "next/link";
import React from "react";

/**
 * Navigation component for the application.
 * Displays a navigation bar with links and search functionality.
 */

export default function Nav() {
  return (
    <div className="bg-slate-900 h-16 flex items-center">
      <div className="mx-auto custom-container text-white">
        <nav className="flex justify-between items-center">
          <div>
            <h6 className="">Blog Posts</h6>
          </div>
          <div className="flex items-center">
            <div>
              <Link href={"/"}>Blogs</Link>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="mx-4 px-5 py-1 rounded"
            />
            <button type="button" className="">
              Create Blog Post
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
