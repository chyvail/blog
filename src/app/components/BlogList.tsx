/**
 * BlogList component for the application.
 * Displays a all post dynamically rendered from the dummy data
 */
"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import blogData from "../data/blogData";
import Link from "next/link";

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div>
      <Heading title="The Accessibility Blog" />
      <div className="custom-container mx-auto mt-2 font-semibold text-gray-600">
        <p>The voice of the excluded</p>
      </div>
      <hr className="mt-8" />
      <div className="custom-container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post) => (
            <div className="blog" key={post.id}>
              <img
                src={post.image}
                alt={post.slug}
                className="object-cover h-auto w-full"
              />
              <div>
                <h6 className="font-normal mt-4 flex justify-between text-gray-600 text-sm">
                  <div>{post.date}</div>
                  <div>5 min Read</div>
                </h6>
                <div className="mt-2">
                  <Link href={`/blog/${post.slug}`}>
                    <h4 className="text-2xl font-extrabold text-slate-900 post-title">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="font-normal mt-2 flex justify-between text-gray-600 text-base post-description">
                    {post.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between ">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPosts.length < postsPerPage}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
