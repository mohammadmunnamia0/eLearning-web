import React, { useEffect, useState } from "react";
import Button from "./sharedComponents/Button";

const OurCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "১৫+ কোর্স",
      validity: "2 month",
      rating: "***",
      CourseFee: "কম্পিউটার শিক্ষা, দক্ষতা উন্নয়ন ও পেশাগত প্রশিক্ষণ",
    },
    {
      title: "দক্ষ ও অভিজ্ঞ প্রশিক্ষক",
      validity: "2 month",
      rating: "***",
      CourseFee:
        "জ্ঞানী, অভিজ, সহায়ক,উদ্যমী, প্রেরণাদায়ক এবং শিক্ষার্থী-কেন্দ্রিক",
    },
    {
      title: "প্রফেশনাল ক্যারিয়ার",
      validity: "2 month",
      rating: "***",
      CourseFee: "দক্ষতা, অভিজ্ঞতা, জ্ঞান, উন্নতি, সাফল্য, বৃদ্ধি সুযোগ",
    },
    {
      title: "লাইভ ক্লাস",
      validity: "2 month",
      rating: "***",
      CourseFee: "ইন্টারেক্টিভ লাইভ সেশন, প্রশ্ন-উত্তর পর্ব ও রেকর্ডেড ক্লাস",
    },
    {
      title: "সার্টিফিকেট কোর্স",
      validity: "2 month",
      rating: "***",
      CourseFee: "প্রত্যয়নযোগ্য কোর্স সম্পন্ন করে সার্টিফিকেট অর্জন",
    },
    {
      title: "জব রেডিনেস ট্রেইনিং",
      validity: "2 month",
      rating: "***",
      CourseFee: "সফল ক্যারিয়ারের জন্য ইন্ডাস্ট্রি-ফোকাসড প্রশিক্ষণ",
    },
  ];

  const visibleCards = 4;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev + visibleCards >= cards.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.max(cards.length - visibleCards, 0) : prev - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const translateX = `-${(currentIndex * 100) / visibleCards}%`;

  return (
    <section className="mt-24 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">আমাদের কোর্স সমূহ</h1>

      {!showAll ? (
        <div className="relative overflow-hidden w-full max-w-7xl">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${(cards.length * 100) / visibleCards}%`,
              transform: `translateX(${translateX})`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="max-w-[300px] md:w-1/4 flex-shrink-0 p-4"
              >
                <div className="bg-white p-6 rounded-lg shadow h-full">
                  <img src="" alt="" />
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <h3 className="text-xl font-bold mb-2">{card.validity}</h3>
                  <p className="text-gray-700">{card.rating}</p>
                  <h3 className="text-xl font-bold mb-2">{card.rating}</h3>
                  <button className="btn">Purchase</button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-xl hover:bg-gray-400"
            >
              &lt;
            </button>

            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-xl hover:bg-gray-400"
            >
              &gt;
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow h-full">
              <img src="" alt="" />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <h3 className="text-xl font-bold mb-2">{card.validity}</h3>
              <p className="text-gray-700">{card.rating}</p>
              <h3 className="text-xl font-bold mb-2">{card.rating}</h3>
              <button className="btn">Purchase</button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <Button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </section>
  );
};

export default OurCourses;
