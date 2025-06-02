import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    imageSrc: "powerpoint.png",
    title: "মাইক্রোসফট পাওয়ারপয়েন্ট বেসিক থেকে প্রো",
    validity: "১ মাস",
    rating: 4.8,
    reviewCount: 320,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "মাইক্রোসফট মাস্টার্স",
    price: 1500,
    CourseFee:
      "এই কোর্সে মাইক্রোসফট পাওয়ারপয়েন্টের বেসিক ইন্টারফেস থেকে শুরু করে অ্যাডভান্সড ফিচার, প্রেজেন্টেশন তৈরি এবং স্লাইড ডিজাইনের দক্ষতা শেখানো হবে।",
  },
  {
    id: 2,
    imageSrc: "word.png",
    title: "মাইক্রোসফট ওয়ার্ড বেসিক থেকে প্রো",
    validity: "১ মাস",
    rating: 4.7,
    reviewCount: 450,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "মাইক্রোসফট মাস্টার্স",
    price: 1500,
    CourseFee:
      "এই কোর্সে মাইক্রোসফট ওয়ার্ডের বেসিক ইন্টারফেস থেকে শুরু করে অ্যাডভান্সড ডকুমেন্ট ফরম্যাটিং, টেবিল তৈরি, হেডার-ফুটার, মেইল মার্জ এবং রিসার্চ রিপোর্ট তৈরির দক্ষতা শেখানো হবে।",
  },
  {
    id: 3,
    imageSrc: "excel.png",
    title: "মাইক্রোসফট এক্সেল বেসিক থেকে প্রো",
    validity: "১ মাস",
    rating: 4.9,
    reviewCount: 500,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "মাইক্রোসফট মাস্টার্স",
    price: 1500,
    CourseFee:
      "এই কোর্সে মাইক্রোসফট এক্সেলের বেসিক ইন্টারফেস থেকে শুরু করে অ্যাডভান্সড ডেটা বিশ্লেষণ, ফর্মুলা ব্যবহার, চার্ট তৈরি এবং ডেটা ম্যানেজমেন্টের দক্ষতা শেখানো হবে।",
  },
  {
    id: 4,
    imageSrc: "computer_training.png",
    title: "বেসিক কম্পিউটার ট্রেনিং",
    validity: "২ সপ্তাহ",
    rating: 4.6,
    reviewCount: 250,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1200,
    CourseFee:
      "এই কোর্সে কম্পিউটার হার্ডওয়্যার, সফটওয়্যার, অপারেটিং সিস্টেমের বেসিক ধারণা এবং ইন্টারনেট ও ইমেইল ব্যবহারের নিয়মকানুন শেখানো হবে।",
  },
];

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/course/${course.id}`, { state: { course } });
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
              {course.title}
            </div>
            <div>
              <span className="text-[#96A0B0] text-[16px] font-normal font-[Hind_Siliguri]">
                মেয়াদ:{" "}
              </span>
              <span className="text-[#96A0B0] text-[16px] font-normal font-[Inter]">
                {course.validity}
              </span>
            </div>
          </div>
          <div className="text-black text-[14px] font-medium font-[Hind_Siliguri]">
            {course.CourseFee}
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

const Course = () => {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-center text-black text-[32px] font-[Hind_Siliguri] font-semibold mb-6">
        আমাদের কোর্স সমূহ
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
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

export default Course;
