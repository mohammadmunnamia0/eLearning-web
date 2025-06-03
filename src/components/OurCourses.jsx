import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const CourseCard = ({ card }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/course/${card.id}`, { state: { course: card } });
  };

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[303px] mx-2 bg-white rounded-[16px] shadow-[1px_2px_12px_rgba(0,0,0,0.12)] flex flex-col">
      <div className="h-[200px] sm:h-[231px] w-full bg-[#DADBDE] rounded-t-[16px] flex items-center justify-center text-gray-500 text-lg sm:text-xl font-semibold">
        Image
      </div>
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 p-3 sm:p-4 w-full flex-grow">
        <div className="flex flex-col items-start justify-start gap-2 sm:gap-3 w-full">
          <div className="flex flex-col items-start justify-start gap-1 sm:gap-2 w-full">
            <div className="text-black text-[18px] sm:text-[20px] leading-6 font-semibold">
              {card.title}
            </div>
            <div>
              <span className="text-[#96A0B0] text-[14px] sm:text-[16px] font-normal">
                মেয়াদ:{" "}
              </span>
              <span className="text-[#96A0B0] text-[14px] sm:text-[16px] font-normal font-[Inter]">
                {card.validity}
              </span>
            </div>
          </div>
          <div className="text-black text-[13px] sm:text-[14px] font-medium line-clamp-2">
            {card.CourseFee}
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4 pt-0 sm:pt-0 w-full">
        <button
          onClick={handleDetailsClick}
          className="inline-flex items-center justify-center gap-[10px] bg-[#186D6D] rounded px-[18px] sm:px-[22px] py-[6px] sm:py-[8px] w-full"
        >
          <div className="text-white text-[14px] sm:text-[16px] font-medium leading-[24px]">
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
      prev + visibleCards >= courses.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.max(courses.length - visibleCards, 0) : prev - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const translateX = `-${(currentIndex * 100) / visibleCards}%`;

  return (
    <div className="w-full px-4 py-8 mt-[222px]">
      <h2 className="text-center text-black text-[32px] font-semibold mb-6">
        আমাদের কোর্স সমূহ
      </h2>
      <div className="relative w-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 lg:px-16 z-20">
          <button
            onClick={handlePrev}
            className="bg-[#186D6D] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#145757] transition-colors shadow-lg -ml-2 lg:-ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-[#186D6D] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#145757] transition-colors shadow-lg -mr-2 lg:-mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-hidden relative z-10">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${translateX})` }}
          >
            {courses.map((card, index) => (
              <CourseCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[98px]">
        <div className="w-[306px] px-6 py-3 bg-[#186D6D] rounded flex items-center justify-center gap-2 inline-flex">
          <div className="text-white text-[20px] font-medium">
            <Link to="/course">আরও দেখুন</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
