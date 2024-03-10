/**
 * Footer component for the application.
 * Displays a Footer with the current date displayed dynamically
 */

import React from "react";

export default function Footer() {
  let currentDate = new Date();
  return (
    <div className="bg-slate-900 h-16 flex items-center mt-8 ">
      <div className="mx-auto custom-container text-white">
        <nav className="flex justify-between items-center">
          <div>
            <h6 className="">Blog Posts</h6>
          </div>
          <div className="flex items-center">
            @Copyright @{currentDate.getFullYear()}. BlogPost
          </div>
        </nav>
      </div>
    </div>
  );
}
