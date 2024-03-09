/**
 * Search page for the application.
 * Displays a search page with filterd posts based on keywords
 */

import React from "react";
import Heading from "../../components/Heading";
import blogData from "@/app/data/blogData";
import Link from "next/link";

interface SearchProps {
  params: {
    text: string;
  };
}

const SearchPage: React.FC<SearchProps> = ({ params }) => {
  const { text } = params;

  const filteredPosts = blogData.filter((posts) =>
    posts.title.toLowerCase().includes(text.toLocaleLowerCase())
  );

  return (
    <div className="text-center">
      <Heading title="Search Blogs" />
      <div>
        <h6 className="font-normal mt-4 text-gray-600 text-md">
          Showing {filteredPosts.length | 0} results of {text}
        </h6>
      </div>
      <div className="custom-container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredPosts &&
            filteredPosts.map((post) => (
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
      </div>
    </div>
  );
};

export default SearchPage;
