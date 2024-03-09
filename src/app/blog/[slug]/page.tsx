import React from "react";
import { useRouter } from "next/router";
import blogData from "@/app/data/blogData";
import Heading from "@/app/components/Heading";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
  const { slug } = params;
  const singlePost = blogData.filter((post) => post.slug === slug);
  return (
    <div>
      <div>Back Button</div>
      {singlePost.map((post) => (
        <div key={post.id}>
          <div className="text-center">
            <Heading title={post.title} />
            <h6 className="font-normal mt-4 text-gray-600 text-sm">
              {post.date}
            </h6>
          </div>
          <div className="mt-4 individual-post">
            <img src={post.image} alt={post.slug} />
          </div>
          <div className="custom-container mx-auto text-center mt-4">
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
