/**
 * BlogList component for the application.
 * Displays a all post dynamically rendered from the dummy data
 */

import React from "react";
import Heading from "./Heading";
import blogData from "../data/blogData";

export default function BlogList() {
  return (
    <div>
      <Heading title="The Accessibility Blog" />
      <div className="custom-container mx-auto mt-2 font-semibold text-gray-600">
        <p>The voice of the excluded</p>
      </div>
      <hr className="mt-8" />
      <div className="custom-container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {blogData &&
            blogData.map((post) => (
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
                    <h4 className="text-2xl font-extrabold text-slate-900 post-title">
                      {post.title}
                    </h4>
                    <p className="font-normal mt-2 flex justify-between text-gray-600 text-base post-description">
                      {post.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
