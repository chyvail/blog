/**
 * Navigation component for the application.
 * Displays a navigation bar with links and search functionality.
 */

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Search from "./Search";
import Modal from "./Modal";
import { BiSolidPlusCircle } from "react-icons/bi";

export default function Nav() {
  const path = usePathname();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="bg-slate-900 h-16 flex items-center">
        <div className="mx-auto custom-container text-white">
          <nav className="flex justify-between items-center">
            <div>
              <h6 className="">Blog Posts</h6>
            </div>
            <div className="items-center hidden lg:flex md:flex">
              <div>
                <Link href={"/"}>Blogs</Link>
              </div>
              <Search />
              <button type="button" className="" onClick={handleClick}>
                Create Blog Post
              </button>
            </div>
            <div className="lg:hidden md:hidden cursor-pointer text-2xl">
              <BiSolidPlusCircle onClick={handleClick} />
            </div>
          </nav>
        </div>
      </div>
      {path !== "/" ? (
        <div className="bg-gray-200 h-10 flex items-center">
          <div className="custom-container mx-auto ">
            <Link href={"/"} className="flex items-center ">
              <IoMdArrowBack /> <div className="ml-2">Back to Blog Posts</div>
            </Link>
          </div>
        </div>
      ) : null}
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}
