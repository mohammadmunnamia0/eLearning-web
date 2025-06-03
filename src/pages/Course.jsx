import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/course/${course.id}`, { state: { course } });
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
              {course.title}
            </div>
            <div>
              <span className="text-[#96A0B0] text-[14px] sm:text-[16px] font-normal">
                মেয়াদ:{" "}
              </span>
              <span className="text-[#96A0B0] text-[14px] sm:text-[16px] font-normal font-[Inter]">
                {course.validity}
              </span>
            </div>
          </div>
          <div className="text-black text-[13px] sm:text-[14px] font-medium line-clamp-2">
            {course.CourseFee}
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

const Course = () => {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-center text-black text-[32px] font-semibold mb-6">
        আমাদের কোর্স সমূহ
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className="flex justify-center mt-[98px]">
        <div className="w-[306px] px-6 py-3 bg-[#186D6D] rounded flex items-center justify-center gap-2 inline-flex">
          <div className="text-white text-[20px] font-medium">আরও দেখুন</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
