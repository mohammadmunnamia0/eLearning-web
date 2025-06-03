import React from "react";

const Stats = () => {
  return (
    <section>
      <section className="bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center pt-4">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] mb-3">
              {/* Icon placeholder */}
            </div>
            <div className="text-black text-2xl font-semibold font-['Hind_Siliguri']">
              16
            </div>
            <div className="text-black text-base font-normal font-['Hind_Siliguri']">
              বর্তমান কোর্স
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center  pt-4">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] mb-3">
              {/* Icon placeholder */}
            </div>
            <div className="text-black text-2xl font-semibold font-['Hind_Siliguri']">
              7
            </div>
            <div className="text-black text-base font-normal font-['Hind_Siliguri']">
              ইন্সট্রাক্টর
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center  pt-4">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] mb-3">
              {/* Icon placeholder */}
            </div>
            <div className="text-black text-2xl font-semibold font-['Hind_Siliguri']">
              60
            </div>
            <div className="text-black text-base font-normal font-['Hind_Siliguri']">
              শিক্ষার্থী
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center  pt-4">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] mb-3">
              {/* Icon placeholder */}
            </div>
            <div className="text-black text-2xl font-semibold font-['Hind_Siliguri']">
              277
            </div>
            <div className="text-black text-base font-normal font-['Hind_Siliguri']">
              কোর্স সম্পূর্ণ করেছেন
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Stats;
