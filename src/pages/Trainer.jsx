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

  const [visibleTrainers, setVisibleTrainers] = useState(6); // State to manage visible trainers
  const [selectedTrainer, setSelectedTrainer] = useState(null); //for modal

  const handleShowMore = () => {
    // Show all remaining trainers
    setVisibleTrainers(trainers.length);
  };

  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
    document.getElementById("trainer_modal").showModal();
  };

  return (
    <section className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">প্রশিক্ষক</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {trainers.slice(0, visibleTrainers).map((trainer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold mb-1">
                {trainer.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {trainer.title}
              </p>
              <button
                onClick={() => openModal(trainer)}
                className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors duration-300"
              >
                বিস্তারিত
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleTrainers < trainers.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-gray-300 transition-colors duration-300"
          >
            Show More
          </button>
        </div>
      )}
      {/* Modal for trainer details */}
      <dialog id="trainer_modal" className="modal">
        <div className="modal-box w-[95%] max-w-[1022px] p-0 max-h-[90vh] overflow-hidden">
          {selectedTrainer && (
            <div className="w-full h-full overflow-y-auto">
              <div className="sticky top-0 right-0 p-4 bg-white z-10 flex justify-end">
                <form method="dialog">
                  <button className="p-2 bg-teal-700 rounded-full hover:bg-teal-800 transition-colors duration-300">
                    <div className="w-6 h-6 relative">
                      <div className="w-3.5 h-3.5 left-[5px] top-[5px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-white" />
                    </div>
                  </button>
                </form>
              </div>

              <div className="p-6">
                <h1 className="text-xl md:text-3xl font-bold mb-8">
                  আপনি যার কাছ থেকে শিখবেন
                </h1>
                {/* Header + Content */}
                <div className="w-full mx-auto">
                  {/* Trainer Info Box */}
                  <div className="self-stretch p-4 md:p-6 rounded-xl outline outline-1 outline-offset-[-1px] outline-CTAColor inline-flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
                    {/* Trainer Image */}
                    <img
                      className="w-full md:w-52 h-48 md:h-80 rounded-2xl object-cover"
                      src={selectedTrainer.image}
                      alt={selectedTrainer.name}
                    />

                    {/* Trainer Details */}
                    <div className="w-full md:w-[605px] inline-flex flex-col justify-start items-start gap-4 md:gap-8">
                      <div className="flex flex-col justify-start items-start gap-0.5">
                        <div className="justify-start text-zinc-900 text-lg md:text-xl font-bold  ">
                          ইন্সট্রাক্টর: {selectedTrainer.name}
                        </div>
                        <div className="self-stretch justify-start text-zinc-600 text-sm md:text-base font-normal  ">
                          {selectedTrainer.title}
                        </div>
                      </div>
                      <div className="self-stretch flex-1 justify-start text-black text-sm md:text-base font-normal  ">
                        রাশেদুল ইসলাম ১০ বছরেরও বেশি সময় ধরে আইটি ট্রেনিং খাতে
                        কাজ করছেন। তিনি মাইক্রোসফট ওয়ার্ড বিষয়ে বিশেষজ্ঞ এবং
                        অসংখ্য ছাত্র-ছাত্রীকে কর্পোরেট লেভেলের ডকুমেন্টেশন, মেইল
                        মার্জ, এবং রিপোর্ট রাইটিং শেখানোর অভিজ্ঞতা রেখেছেন।
                        এছাড়া, তিনি বিভিন্ন শিক্ষা প্রতিষ্ঠানে গেস্ট ট্রেইনার
                        হিসেবেও দায়িত্ব পালন করেছেন।
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Trainer;
