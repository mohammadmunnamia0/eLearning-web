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
    <section className="container mx-auto py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8">প্রশিক্ষক</h1>
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
              <button
                onClick={() => openModal(trainer)}
                className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
              >
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
      {/* Modal for trainer details */}
      <dialog id="trainer_modal" className="modal">
        <div>
          {selectedTrainer && (
            <div className="w-[1022px] h-[553px] relative bg-white rounded-2xl overflow-hidden">
              <h1 className="text-3xl ml-14 font-bold mt-8">আপনি যার কাছ থেকে শিখবেন</h1>
              {/* Header + Content */}
              <div className="w-[910px] left-[54px] top-[117px] absolute inline-flex flex-col justify-start items-start gap-12">
                {/* Trainer Info Box */}
                <div className="self-stretch p-6 rounded-xl outline outline-1 outline-offset-[-1px] outline-CTAColor inline-flex justify-start items-center gap-12">
                  {/* Trainer Image */}
                  <img
                    className="w-52 h-80 rounded-2xl object-cover"
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                  />

                  {/* Trainer Details */}
                  <div className="w-[605px] h-48 inline-flex flex-col justify-start items-start gap-8">
                    <div className="flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-zinc-900 text-xl font-bold font-['Hind_Siliguri']">
                        ইন্সট্রাক্টর: {selectedTrainer.name}
                      </div>
                      <div className="self-stretch justify-start text-zinc-600 text-base font-normal font-['Hind_Siliguri']">
                        {selectedTrainer.title}
                      </div>
                    </div>
                    <div className="self-stretch flex-1 justify-start text-black text-base font-normal font-['Hind_Siliguri']">
                      {/*  {selectedTrainer.description} */}
                      রাশেদুল ইসলাম ১০ বছরেরও বেশি সময় ধরে আইটি ট্রেনিং খাতে কাজ
                      করছেন। তিনি মাইক্রোসফট ওয়ার্ড বিষয়ে বিশেষজ্ঞ এবং অসংখ্য
                      ছাত্র-ছাত্রীকে কর্পোরেট লেভেলের ডকুমেন্টেশন, মেইল মার্জ,
                      এবং রিপোর্ট রাইটিং শেখানোর অভিজ্ঞতা রেখেছেন। এছাড়া, তিনি
                      বিভিন্ন শিক্ষা প্রতিষ্ঠানে গেস্ট ট্রেইনার হিসেবেও দায়িত্ব
                      পালন করেছেন।
                    </div>
                  </div>
                  
                </div>
                
              </div>

              {/* Close Button */}
              <div className=" p-1 left-[954px] absolute bg-teal-700 rounded inline-flex justify-start items-center gap-2.5 cursor-pointer">
                <form method="dialog">
                  <button className="w-6 h-6 relative">
                    <div className="w-3.5 h-3.5 left-[5px] top-[5px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-white" />
                  </button>
                </form>
              </div>
            </div>
            
          )}

          {/* <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div> */}
        </div>
      </dialog>
    </section>
  );
};

export default Trainer;
