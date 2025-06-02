import React, { useState } from "react";
import image1 from "../assets/ourWork/1.jpg";
import image2 from "../assets/ourWork/2.jpg";
import image3 from "../assets/ourWork/3.jpg";
import image4 from "../assets/ourWork/4.jpg";

const OurWork = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={`relative ${showAll ? "h-[1600px]" : "h-[815px]"}`}>
      <div className="left-[580px] top-[27px] absolute text-center justify-start text-black text-3xl font-semibold font-['Hind_Siliguri']">
        আমাদের কার্যক্রম সমূহ
      </div>

      <img
        className="w-[452px] h-52 left-[231px] top-[139px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        src={image1}
        alt=""
      />
      <img
        className="w-[452px] h-52 left-[231px] top-[423px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        src={image2}
        alt=""
      />
      <img
        className="w-[452px] h-52 left-[719px] top-[98px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        src={image3}
        alt=""
      />
      <img
        className="w-[452px] h-52 left-[719px] top-[382px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        src={image4}
        alt=""
      />

      {showAll && (
        <>
          <img
            className="w-[452px] h-52 left-[231px] top-[707px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            src={image1}
            alt=""
          />
          <img
            className="w-[452px] h-52 left-[231px] top-[991px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            src={image2}
            alt=""
          />
          <img
            className="w-[452px] h-52 left-[719px] top-[666px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            src={image3}
            alt=""
          />
          <img
            className="w-[452px] h-52 left-[719px] top-[950px] absolute rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            src={image4}
            alt=""
          />
        </>
      )}

      <div
        onClick={() => setShowAll(!showAll)}
        className={`w-80 px-6 py-3 left-[567px] absolute bg-teal-700 rounded inline-flex justify-center items-center gap-2.5 cursor-pointer ${
          showAll ? "top-[1300px]" : "top-[725px]"
        }`}
      >
        <div className="justify-start text-white text-xl font-medium font-['Hind_Siliguri']">
          {showAll ? "কম দেখুন" : "আরও দেখুন"}
        </div>
        <div className="p-2 bg-white rounded-[100px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.14)] flex justify-start items-center gap-2.5">
          <div className="w-4 h-4 relative">
            <div className="w-[4.73px] h-2.5 left-[5.94px] top-[2.72px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-900" />
            <div className="w-4 h-4 left-[16px] top-[16px] absolute origin-top-left -rotate-180 opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
