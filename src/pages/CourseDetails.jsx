import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleReview from "../components/GoogleReview";

const CourseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Course not found</h2>
        <button
          onClick={() => navigate("/course")}
          className="px-4 py-2 bg-[#186D6D] text-white rounded hover:bg-[#145757]"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <section className="w-full px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[1440px] mx-auto py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-40">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto rounded-2xl"
              src="https://placehold.co/543x378"
              alt={course.title}
            />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div>
                      <span className="text-black text-2xl md:text-3xl font-semibold">
                        কোর্স{" "}
                      </span>
                      <span className="text-black text-2xl md:text-3xl font-semibold font-['Inter']">
                        {course.id}
                      </span>
                      <span className="text-black text-2xl md:text-3xl font-semibold">
                        : {course.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-black text-lg md:text-xl font-normal">
                        {course.rating}
                      </div>
                      <div className="w-6 h-6 relative">
                        <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-amber-500" />
                      </div>
                      <div className="text-black text-lg md:text-xl font-normal underline">
                        ({course.reviewCount}+ রিভিউ)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                      src="https://placehold.co/56x56"
                      alt={course.instructorName}
                    />
                    <div className="flex flex-col gap-0.5">
                      <div className="text-zinc-900 text-lg md:text-xl font-bold">
                        ইন্সট্রাক্টর: {course.instructorName}
                      </div>
                      <div className="text-zinc-600 text-sm md:text-base font-normal">
                        {course.instructorTitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 relative">
                      <div className="w-4 h-3 left-[3px] top-[8.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                      <div className="w-3 h-1.5 left-[3px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                      <div className="w-px h-px left-[17px] top-[14.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                      <div className="w-2 h-1.5 left-[3px] top-[15.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                    </div>
                    <div>
                      <span className="text-black text-sm md:text-base font-medium">
                        কোর্স ফি:{" "}
                      </span>
                      <span className="text-black text-sm md:text-base font-medium font-['Inter']">
                        {course.price}
                      </span>
                      <span className="text-black text-sm md:text-base font-normal">
                        , টাকা
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 relative">
                      <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                      <div className="w-0.5 h-1.5 left-[12px] top-[8px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                    </div>
                    <div>
                      <span className="text-black text-sm md:text-base font-medium">
                        সময়কাল:{" "}
                      </span>
                      <span className="text-black text-sm md:text-base font-medium font-['Hind_Madurai']">
                        {course.validity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-black text-sm md:text-base font-normal">
                {course.CourseFee}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="w-full sm:w-52 px-6 py-3 bg-teal-700 rounded flex justify-center items-center gap-2.5">
                <div className="text-white text-base font-medium">
                  রেজিস্ট্রেশন করুন
                </div>
              </button>
              <button className="w-full sm:w-72 px-6 py-3 bg-white rounded outline outline-1 outline-offset-[-1px] outline-Brand-Color6 flex justify-center items-center gap-2.5">
                <img
                  className="w-5 h-6"
                  src="https://placehold.co/19x24"
                  alt="PDF"
                />
                <div className="text-black text-base font-semibold">
                  পিডিএফ ডাউনলোড করুন
                </div>
                <div className="w-6 h-6 relative">
                  <div className="w-[5px] h-2.5 left-[9.50px] top-[5px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Brand-Color6" />
                  <div className="w-3.5 h-0 left-[5px] top-[19px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Brand-Color6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <GoogleReview />
      </div>
    </section>
  );
};

export default CourseDetails;
