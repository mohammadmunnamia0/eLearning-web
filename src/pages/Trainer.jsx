import React, { useState } from "react";

const Trainer = () => {
  const trainers = [
    {
      name: "রাশেদুল ইসলাম",
      title: "সিনিয়র প্রশিক্ষক, মাইক্রোসফট ওয়ার্ড বিশেষজ্ঞ",
      image: "/path/to/rashedul_islam.jpg", // Replace with actual image path
    },
    {
      name: "ফারহান উদ্দিন",
      title: "প্রধান প্রশিক্ষক, এক্সেল অটোমেশন বিশেষজ্ঞ",
      image: "/path/to/farhan_uddin.jpg", // Replace with actual image path
    },
    {
      name: "তানজিল হক",
      title: "প্রধান প্রশিক্ষক, এক্সেল অটোমেশন বিশেষজ্ঞ",
      image: "/path/to/tanjil_haque.jpg", // Replace with actual image path
    },
    {
      name: "রাশেদুল ইসলাম",
      title: "সিনিয়র প্রশিক্ষক, মাইক্রোসফট ওয়ার্ড বিশেষজ্ঞ",
      image: "/path/to/rashedul_islam.jpg", // Replace with actual image path
    },
    {
      name: "ফারহান উদ্দিন",
      title: "প্রধান প্রশিক্ষক, এক্সেল অটোমেশন বিশেষজ্ঞ",
      image: "/path/to/farhan_uddin.jpg", // Replace with actual image path
    },
    {
      name: "তানজিল হক",
      title: "প্রধান প্রশিক্ষক, এক্সেল অটোমেশন বিশেষজ্ঞ",
      image: "/path/to/tanjil_haque.jpg", // Replace with actual image path
    },
  ];

  const [visibleTrainers, setVisibleTrainers] = useState(3); // State to manage visible trainers

  const handleShowMore = () => {
    // Show all remaining trainers
    setVisibleTrainers(trainers.length);
  };

  return (
    <section className="container mx-auto py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">প্রশিক্ষক</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.slice(0, visibleTrainers).map((trainer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-1">{trainer.name}</h2>
              <p className="text-gray-600 mb-4">{trainer.title}</p>
              <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700">
                বিস্তারিত
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleTrainers < trainers.length && ( // Conditionally render button
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-gray-300"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Trainer;
