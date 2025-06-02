import React from "react";

const Stats = () => {
  return (
    <section className="bg-emerald-50 w-full">
      <section className=" h-80 overflow-hidden flex items-center justify-center mt-[151px]">
        <div className="inline-flex justify-start items-center gap-16">
          {/* Stat 1 */}
          <div className="flex justify-start items-start gap-2">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] flex justify-start items-center gap-3.5">
              <div className="w-8 h-8 relative">
                <div className="w-0 h-5 absolute left-[16.80px] top-[8.40px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-7 h-6 absolute left-[2.80px] top-[4.20px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-base font-semibold font-['Hind_Siliguri']">
                16
              </div>
              <div className="text-black text-base font-normal font-['Hind_Siliguri']">
                বর্তমান কোর্স
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex justify-start items-start gap-2">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] flex justify-start items-center gap-3.5">
              <div className="w-8 h-8 relative">
                <div className="w-3 h-1.5 absolute left-[19.60px] top-[23.80px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-1.5 h-1.5 absolute left-[22.40px] top-[14.70px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-3 h-1 absolute left-[14px] top-[4.20px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-3.5 h-2.5 absolute left-[2.80px] top-[13.30px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-1.5 h-1.5 absolute left-[3.50px] top-[4.20px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-base font-semibold font-['Hind_Siliguri']">
                7
              </div>
              <div className="text-black text-base font-normal font-['Hind_Siliguri']">
                ইন্সট্রাক্টর
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex justify-start items-start gap-2">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] flex justify-start items-center gap-3.5">
              <div className="w-8 h-8 relative">
                <div className="w-7 h-3.5 absolute left-[2.80px] top-[4.20px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-4 h-3 absolute left-[8.39px] top-[15.40px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-1 h-4 absolute left-[26.52px] top-[13.30px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-base font-semibold font-['Hind_Siliguri']">
                60
              </div>
              <div className="text-black text-base font-normal font-['Hind_Siliguri']">
                শিক্ষার্থী
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex justify-start items-start gap-2">
            <div className="p-3 bg-white rounded-sm shadow-[0px_5.6px_5.6px_0px_rgba(0,0,0,0.25)] flex justify-start items-center gap-3.5">
              <div className="w-8 h-8 relative">
                <div className="w-5 h-2.5 absolute left-[7px] top-[2.80px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-2.5 h-1.5 absolute left-[11.90px] top-[11.90px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
                <div className="w-5 h-2.5 absolute left-[7px] top-[21.70px] outline outline-2 outline-offset-[-1.05px] outline-slate-900" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-black text-base font-semibold font-['Hind_Siliguri']">
                277
              </div>
              <div className="text-black text-base font-normal font-['Hind_Siliguri']">
                কোর্স সম্পূর্ণ করেছেন
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Stats;
