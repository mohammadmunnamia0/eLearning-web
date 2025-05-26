import React from "react";

const BlogPostDetail = ({ post, onBackToList }) => {
  if (!post) {
    return null; 
  }

  return (
    <div className="container mx-auto py-8">
     
      <img
        src="https://via.placeholder.com/800x400" // Replace with actual thumbnail logic
        alt="Blog Thumbnail"
        className="w-full h-auto rounded-lg mb-8"
      />

      <div className="flex items-center text-gray-600 text-sm mb-4">
        <div className="text-green-600 font-bold mr-2">
          {post.date.split(" ")[1]}
        </div>
        <div>{post.date.split(" ")[0]}</div>
      </div>

      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <div className="text-gray-700 leading-relaxed">
        {/* Display full blog content - currently using excerpt as placeholder */}
        <p>{post.excerpt}</p>{" "}
        {/* You will need to replace this with full content */}
      </div>

      <button
        onClick={onBackToList}
        className="mt-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      >
        Back to Blog List
      </button>
    </div>
  );
};

export default BlogPostDetail;
