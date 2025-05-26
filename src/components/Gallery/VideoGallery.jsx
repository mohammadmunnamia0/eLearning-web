import React, { useState } from "react";
import VideoModal from "./VideoModal";

const VideoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [visibleVideos, setVisibleVideos] = useState(4); // State to manage the number of visible videos

  // Placeholder video data (expanded for show more)
  const allVideos = [
    {
      id: 1,
      title: "কোর্স ১: মাইক্রোসফট ওয়ার্ড বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    }, // Example YouTube URL
    {
      id: 2,
      title: "কোর্স ১: মাইক্রোসফট ওয়ার্ড বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "কোর্স ১: মাইক্রোসফট ওয়ার্ড বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "কোর্স ১: মাইক্রোসফট ওয়ার্ড বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "কোর্স ২: এক্সেল বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "কোর্স ২: এক্সেল বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "কোর্স ৩: পাওয়ারপয়েন্ট বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "কোর্স ৩: পাওয়ারপয়েন্ট বেসিক থেকে প্রো",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 9,
      title: "কোর্স ৪: ইন্টারনেট ও ইমেইল",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 10,
      title: "কোর্স ৪: ইন্টারনেট ও ইমেইল",
      thumbnailUrl: "placeholder",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl(""); // Clear video URL on close
  };

  const loadMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 4); // Load 4 more videos
  };

  const displayedVideos = allVideos.slice(0, visibleVideos);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-teal-700">
        ভিডিও গ্যালারী
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              {/* Placeholder image/thumbnail */}
              <div className="bg-orange-500 aspect-video flex items-center justify-center text-white text-4xl font-bold">
                PD
              </div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="bg-green-500 rounded-full p-3 cursor-pointer"
                  onClick={() => openModal(video.videoUrl)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {visibleVideos < allVideos.length && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full flex items-center"
            onClick={loadMoreVideos}
          >
            আরও দেখুন
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        videoUrl={videoUrl}
        onClose={closeModal}
      />
    </div>
  );
};
export default VideoGallery;