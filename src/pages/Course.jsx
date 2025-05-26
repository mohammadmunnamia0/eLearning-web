import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    imageSrc: "powerpoint.png", // Replace with actual image paths
    title: "কোর্স ১: মাইক্রোসফট পাওয়ারপয়েন্ট বেসিক থেকে প্রো",
    rating: 4.8,
    reviewCount: 320,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "মাইক্রোসফট মাস্টার্স",
    price: 1500,
    duration: "১ মাস",
    description:
      "এই কোর্সে মাইক্রোসফট পাওয়ারপয়েন্টের বেসিক ইন্টারফেস থেকে শুরু করে অ্যাডভান্সড ফিচার, প্রেজেন্টেশন তৈরি এবং স্লাইড ডিজাইনের দক্ষতা শেখানো হবে।",
    pdfUrl: "#",
    registrationUrl: "#",
  },
  {
    imageSrc: "word.png", // Replace with actual image paths
    title: "কোর্স ২: মাইক্রোসফট ওয়ার্ড বেসিক থেকে প্রো",
    rating: 4.7,
    reviewCount: 450,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "মাইক্রোসফট মাস্টার্স",
    price: 1500,
    duration: "১ মাস",
    description:
      "এই কোর্সে মাইক্রোসফট ওয়ার্ডের বেসিক ইন্টারফেস থেকে শুরু করে অ্যাডভান্সড ডকুমেন্ট ফরম্যাটিং, টেবিল তৈরি, হেডার-ফুটার, মেইল মার্জ এবং রিসার্চ রিপোর্ট তৈরির দক্ষতা শেখানো হবে।",
    pdfUrl: "#",
    registrationUrl: "#",
  },
  {
    imageSrc: "excel.png", // Replace with actual image paths
    title: "কোর্স ৩: মাইক্রোসফট এক্সেল বেসিক থেকে প্রো",
    rating: 4.9,
    reviewCount: 500,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "মাইক্রোসফট মাস্টার্স",
    price: 1500,
    duration: "১ মাস",
    description:
      "এই কোর্সে মাইক্রোসফট এক্সেলের বেসিক ইন্টারফেস থেকে শুরু করে অ্যাডভান্সড ডেটা বিশ্লেষণ, ফর্মুলা ব্যবহার, চার্ট তৈরি এবং ডেটা ম্যানেজমেন্টের দক্ষতা শেখানো হবে।",
    pdfUrl: "#",
    registrationUrl: "#",
  },
  {
    imageSrc: "computer_training.png", // Replace with actual image paths
    title: "কোর্স ৪: বেসিক কম্পিউটার ট্রেনিং",
    rating: 4.6,
    reviewCount: 250,
    instructorName: "রাশেদুল ইসলাম",
    instructorTitle: "প্রশিক্ষক",
    price: 1200,
    duration: "২ সপ্তাহ",
    description:
      "এই কোর্সে কম্পিউটার হার্ডওয়্যার, সফটওয়্যার, অপারেটিং সিস্টেমের বেসিক ধারণা এবং ইন্টারনেট ও ইমেইল ব্যবহারের নিয়মকানুন শেখানো হবে।",
    pdfUrl: "#",
    registrationUrl: "#",
  },
];

const Course = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">আমাদের কোর্সসমূহ</h1>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            imageSrc={course.imageSrc}
            title={course.title}
            rating={course.rating}
            reviewCount={course.reviewCount}
            instructorName={course.instructorName}
            instructorTitle={course.instructorTitle}
            price={course.price}
            duration={course.duration}
            description={course.description}
            pdfUrl={course.pdfUrl}
            registrationUrl={course.registrationUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
