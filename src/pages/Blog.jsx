import React, { useState } from "react";
import BlogPostDetail from "./../components/BlogPostDetail";

// Dummy blog post data
const dummyPosts = [
  {
    id: 1,
    date: "May 25",
    title:
      "উন্নত ক্যারিয়ারের জন্য মাইক্রোসফট অফিস: ওয়ার্ড, এক্সেল ও পাওয়ারপয়েন্ট",
    excerpt:
      "আপনি জানলে অবাক হবেন, বিশ্বের প্রায় ১২০ কোটি মানুষ বিভিন্ন কাজে মাইক্রোসফট অফিস ব্যবহার করে। এই যুগে এসে মাইক্রোসফট অফিস সফটওয়্যারের নাম শোনেননি, এরকম মানুষ বোধয় খুঁজে পাওয়া কষ্টকর হয়ে যাবে। কেননা, পৃথিবীর প্রতি ৭ জনের ১ জন মাইক্রোসফট অফিস ব্যবহার করে। ডকুমেন্ট ম্যানেজমেন্টের জন্য মাইক্রোসফট ওয়ার্ড, প্রেজেন্টেশন...",
  },
  {
    id: 2,
    date: "May 26",
    title: "ওয়েব ডেভেলপমেন্ট শিখুন সহজে",
    excerpt:
      "ওয়েব ডেভেলপমেন্ট বর্তমান সময়ে খুবই জনপ্রিয় একটি দক্ষতা। ফ্রন্ট-এন্ড, ব্যাক-এন্ড বা ফুল-স্ট্যাক ডেভেলপমেন্ট শিখে আপনি গড়তে পারেন আপনার ক্যারিয়ার। HTML, CSS, JavaScript দিয়ে শুরু করে শিখুন React, Node.js, Python...",
  },
  {
    id: 3,
    date: "May 27",
    title: "ডেটা সায়েন্স ও মেশিন লার্নিং",
    excerpt:
      "ডেটা সায়েন্স এবং মেশিন লার্নিং আধুনিক প্রযুক্তির দুটি গুরুত্বপূর্ণ ক্ষেত্র। ডেটা বিশ্লেষণ, মডেল তৈরি এবং অ্যালগরিদম ব্যবহার করে ডেটা থেকে মূল্যবান অন্তর্দৃষ্টি বের করা যায়। পাইথন এবং R এই ক্ষেত্রে বহুল ব্যবহৃত...",
  },
  {
    id: 4,
    date: "May 28",
    title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    excerpt:
      "মোবাইল অ্যাপ ডেভেলপমেন্ট বর্তমানে একটি দ্রুত বর্ধনশীল শিল্প। অ্যান্ড্রয়েড এবং iOS প্ল্যাটফর্মের জন্য নেটিভ বা ক্রস-প্ল্যাটফর্ম অ্যাপ তৈরি করতে শিখুন। Swift, Kotlin, React Native, Flutter ইত্যাদি জনপ্রিয়...",
  },
  {
    id: 5,
    date: "May 29",
    title: "সাইবার সিকিউরিটি কেন গুরুত্বপূর্ণ?",
    excerpt:
      "ডিজিটাল যুগে সাইবার সিকিউরিটি একটি অপরিহার্য বিষয়। ব্যক্তিগত তথ্য এবং সিস্টেমকে malicious attack থেকে রক্ষা করার জন্য সাইবার সিকিউরিটি জ্ঞান থাকা জরুরি। ফায়ারওয়াল, এনক্রিপশন, অ্যান্টিভাইরাস সফটওয়্যার...",
  },
];

const POSTS_PER_PAGE = 3; // Number of posts to show initially and per load

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const [selectedPost, setSelectedPost] = useState(null);

  const showMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + POSTS_PER_PAGE);
  };

  const handleReadMoreClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <BlogPostDetail post={selectedPost} onBackToList={handleBackToList} />
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {dummyPosts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="flex-shrink-0 mr-6 text-center">
              <div className="text-5xl font-bold text-green-600">
                {post.date.split(" ")[1]}
              </div>
              <div className="text-gray-600 text-sm">
                {post.date.split(" ")[0]}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p className="text-gray-700 mt-4">{post.excerpt}</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleReadMoreClick(post);
                }}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < dummyPosts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMorePosts}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
