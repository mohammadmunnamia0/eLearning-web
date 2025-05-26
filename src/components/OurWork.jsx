import React, { useState } from "react";
import image1 from "../assets/ourWork/1.jpg";
import image2 from "../assets/ourWork/2.jpg";
import image3 from "../assets/ourWork/3.jpg";
import image4 from "../assets/ourWork/4.jpg";
import Button from "./sharedComponents/Button";

const OurWork = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="mt-20">
      <h1 className="text-4xl font-bold text-center">আমাদের কার্যক্রম সমূহ</h1>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          <img className="w-[452px] h-[206px]" src={image1} alt="" />
          <img className="w-[452px] h-[206px]" src={image2} alt="" />
          <img className="w-[452px] h-[206px]" src={image3} alt="" />
          <img className="w-[452px] h-[206px]" src={image4} alt="" />
          {showAll && (
            <>
              <img className="w-[452px] h-[206px]" src={image3} alt="" />
              <img className="w-[452px] h-[206px]" src={image4} alt="" />
            </>
          )}
        </div>
      </div>
      <div className="text-center mt-8">
       
        <Button
        onClick={() => setShowAll(!showAll)}
          className="px-6 py-2  text-white rounded-lg transition-colors"
        >
           {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </section>
  );
};

export default OurWork;
