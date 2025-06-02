import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    <div className="w-[1440px] h-[614px] relative overflow-hidden">
      <div className="p-4 left-[85.50px] top-[66px] absolute inline-flex justify-start items-center gap-40">
        <img
          className="w-[543px] h-96 rounded-2xl"
          src="https://placehold.co/543x378"
          alt={course.title}
        />
        <div className="w-[538px] inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="w-[502px] flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-center justify-start">
                    <span className="text-black text-3xl font-semibold font-['Hind_Siliguri']">
                      কোর্স{" "}
                    </span>
                    <span className="text-black text-3xl font-semibold font-['Inter']">
                      {course.id}
                    </span>
                    <span className="text-black text-3xl font-semibold font-['Hind_Siliguri']">
                      : {course.title}
                    </span>
                  </div>
                  <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-8 h-6 text-center justify-start text-black text-xl font-normal font-['Hind_Siliguri'] leading-normal">
                      {course.rating}
                    </div>
                    <div className="w-6 h-6 relative">
                      <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-amber-500" />
                    </div>
                    <div className="text-center justify-start text-black text-xl font-normal font-['Hind_Siliguri'] underline leading-normal">
                      ({course.reviewCount}+ রিভিউ)
                    </div>
                  </div>
                </div>
                <div className="inline-flex justify-start items-center gap-3">
                  <img
                    className="w-14 h-14 rounded-full"
                    src="https://placehold.co/56x56"
                    alt={course.instructorName}
                  />
                  <div className="inline-flex flex-col justify-start items-start gap-0.5">
                    <div className="justify-start text-zinc-900 text-xl font-bold font-['Hind_Siliguri']">
                      ইন্সট্রাক্টর: {course.instructorName}
                    </div>
                    <div className="self-stretch justify-start text-zinc-600 text-base font-normal font-['Hind_Siliguri']">
                      {course.instructorTitle}
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-4">
                <div className="flex justify-start items-center gap-1">
                  <div className="w-6 h-6 relative">
                    <div className="w-4 h-3 left-[3px] top-[8.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                    <div className="w-3 h-1.5 left-[3px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                    <div className="w-px h-px left-[17px] top-[14.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                    <div className="w-2 h-1.5 left-[3px] top-[15.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                  </div>
                  <div className="justify-start">
                    <span className="text-black text-base font-medium font-['Hind_Siliguri']">
                      কোর্স ফি:{" "}
                    </span>
                    <span className="text-black text-base font-medium font-['Inter']">
                      {course.price}
                    </span>
                    <span className="text-black text-base font-normal font-['Hind_Siliguri']">
                      ,
                    </span>
                    <span className="text-black text-base font-medium font-['Hind_Siliguri']">
                      {" "}
                      টাকা
                    </span>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <div className="w-6 h-6 relative">
                    <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                    <div className="w-0.5 h-1.5 left-[12px] top-[8px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900" />
                  </div>
                  <div className="justify-start">
                    <span className="text-black text-base font-medium font-['Hind_Siliguri']">
                      সময়কাল:{" "}
                    </span>
                    <span className="text-black text-base font-medium font-['Hind_Madurai']">
                      {course.validity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start text-black text-base font-normal font-['Hind_Siliguri']">
              {course.CourseFee}
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-8">
            <div className="w-52 px-6 py-3 bg-teal-700 rounded flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-base font-medium font-['Hind_Siliguri']">
                রেজিস্ট্রেশন করুন
              </div>
            </div>
            <div className="w-72 px-6 py-3 bg-white rounded outline outline-1 outline-offset-[-1px] outline-Brand-Color6 flex justify-center items-center gap-2.5">
              <img
                className="w-5 h-6"
                src="https://placehold.co/19x24"
                alt="PDF"
              />
              <div className="justify-start text-black text-base font-semibold font-['Hind_Siliguri']">
                পিডিএফ ডাউনলোড করুন
              </div>
              <div className="w-6 h-6 relative">
                <div className="w-[5px] h-2.5 left-[9.50px] top-[5px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Brand-Color6" />
                <div className="w-3.5 h-0 left-[5px] top-[19px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Brand-Color6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
