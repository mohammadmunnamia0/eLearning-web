import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cardsDetails = [
  {
    id: 1,
    title: "১৫+ কোর্স",
    validity: "2 month",
    rating: "***",
    CourseFee: "কম্পিউটার শিক্ষা, দক্ষতা উন্নয়ন ও পেশাগত প্রশিক্ষণ",
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1500,
    reviewCount: 320,
  },
  {
    id: 2,
    title: "দক্ষ ও অভিজ্ঞ প্রশিক্ষক",
    validity: "2 month",
    rating: "***",
    CourseFee:
      "জ্ঞানী, অভিজ, সহায়ক,উদ্যমী, প্রেরণাদায়ক এবং শিক্ষার্থী-কেন্দ্রিক",
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1500,
    reviewCount: 450,
  },
  {
    id: 3,
    title: "প্রফেশনাল ক্যারিয়ার",
    validity: "2 month",
    rating: "***",
    CourseFee: "দক্ষতা, অভিজ্ঞতা, জ্ঞান, উন্নতি, সাফল্য, বৃদ্ধি সুযোগ",
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1500,
    reviewCount: 500,
  },
  {
    id: 4,
    title: "লাইভ ক্লাস",
    validity: "2 month",
    rating: "***",
    CourseFee: "ইন্টারেক্টিভ লাইভ সেশন, প্রশ্ন-উত্তর পর্ব ও রেকর্ডেড ক্লাস",
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1500,
    reviewCount: 250,
  },
  {
    id: 5,
    title: "সার্টিফিকেট কোর্স",
    validity: "2 month",
    rating: "***",
    CourseFee: "প্রত্যয়নযোগ্য কোর্স সম্পন্ন করে সার্টিফিকেট অর্জন",
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1500,
    reviewCount: 320,
  },
  {
    id: 6,
    title: "জব রেডিনেস ট্রেইনিং",
    validity: "2 month",
    rating: "***",
    CourseFee: "সফল ক্যারিয়ারের জন্য ইন্ডাস্ট্রি-ফোকাসড প্রশিক্ষণ",
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1500,
    reviewCount: 450,
  },
];

const CourseCard = ({ card }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/course/${card.id}`, { state: { course: card } });
  };

  return (
    <div className="flex-shrink-0 w-[303px] mx-2 bg-white rounded-[16px] shadow-[1px_2px_12px_rgba(0,0,0,0.12)]">
      <div className="h-[231px] w-full bg-[#DADBDE] rounded-t-[16px] flex items-center justify-center text-gray-500 text-xl font-semibold">
        Image
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 w-full">
        <div className="flex flex-col items-start justify-start gap-3 w-full">
          <div className="flex flex-col items-start justify-start gap-2 w-full">
            <div className="text-black text-[20px] leading-6 font-semibold font-[Hind_Siliguri]">
              {card.title}
            </div>
            <div>
              <span className="text-[#96A0B0] text-[16px] font-normal font-[Hind_Siliguri]">
                মেয়াদ:{" "}
              </span>
              <span className="text-[#96A0B0] text-[16px] font-normal font-[Inter]">
                {card.validity}
              </span>
            </div>
          </div>
          <div className="text-black text-[14px] font-medium font-[Hind_Siliguri]">
            {card.CourseFee}
          </div>
        </div>
        <button
          onClick={handleDetailsClick}
          className="inline-flex items-center justify-center gap-[10px] bg-[#186D6D] rounded px-[22px] py-[8px] w-[205px]"
        >
          <div className="text-white text-[16px] font-medium font-[Hind_Siliguri] leading-[24px]">
            বিস্তারিত
          </div>
        </button>
      </div>
    </div>
  );
};

const OurCourses = () => {
  const visibleCards = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev + visibleCards >= cardsDetails.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.max(cardsDetails.length - visibleCards, 0) : prev - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const translateX = `-${(currentIndex * 100) / visibleCards}%`;

  return (
    <div className="w-full px-4 py-8 mt-[222px]">
      <h2 className="text-center text-black text-[32px] font-[Hind_Siliguri] font-semibold mb-6">
        আমাদের কোর্স সমূহ
      </h2>
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrev}
          className="bg-[#186D6D] text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-[#186D6D] text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {cardsDetails.map((card, index) => (
            <CourseCard key={index} card={card} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[98px]">
        <div className="w-[306px] px-6 py-3 bg-[#186D6D] rounded flex items-center justify-center gap-2 inline-flex">
          <div className="text-white text-[20px] font-[Hind_Siliguri] font-medium">
            আরও দেখুন
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
