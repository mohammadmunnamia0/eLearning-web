const containerClass =
  "w-full px-4 md:px-20 pt-10 pb-6 bg-teal-700 rounded-tl-3xl rounded-tr-3xl inline-flex flex-col justify-start items-start gap-6";
const mainFlexClass =
  "self-stretch inline-flex justify-start items-start gap-28";
const sectionTitleClass =
  "justify-start text-white text-base font-semibold font-['Hind_Siliguri']";
const sectionItemClass =
  "justify-start text-white text-base font-normal font-['Hind_Siliguri']";
const contactTitleClass =
  "self-stretch justify-start text-white text-lg font-semibold font-['Hind_Siliguri'] leading-relaxed";
const contactItemClass =
  "self-stretch justify-start text-white text-lg font-medium font-['Hind_Siliguri'] leading-relaxed";
const followTitleClass =
  "justify-start text-white text-lg font-bold font-['Hind_Siliguri'] leading-relaxed";
const hrClass =
  "self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-400";
const footerTextClass = "text-white text-lg font-normal";

export default function Footer() {
  return (
    <div className={containerClass}>
      <div className={mainFlexClass}>
        {/* Logo & Description */}
        <div className="w-72 inline-flex flex-col justify-start items-start gap-3">
          <div className="inline-flex justify-start items-center gap-1.5">
            <img
              className="w-11 h-7"
              src="https://placehold.co/43x30"
              alt="Logo"
            />
            <div className="justify-start text-white text-xl font-semibold font-['Poppins']">
              Amader Shikkha
            </div>
          </div>
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Hind_Siliguri']">
            সর্ববৃহৎ প্রযুক্তি নির্ভর, কারিগরি ও বৃত্তিমূলক শিক্ষা
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-start items-start gap-12">
          <div className="inline-flex flex-col justify-start items-start gap-3">
            <div className={sectionTitleClass}>আমাদের সম্পর্কে</div>
            <div className={sectionItemClass}>আমাদের কথা</div>
            <div className={sectionItemClass}>সাহায্য</div>
            <div className={sectionItemClass}>প্রশ্ন</div>
            <div className={sectionItemClass}>যোগাযোগ</div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-3">
            <div className={sectionTitleClass}>গুরত্বপূর্ণ লিংক</div>
            <div className={sectionItemClass}>শিক্ষা বোর্ডের ফলাফল</div>
            <div className={sectionItemClass}>এনআইডি আবেদন সিস্টেম</div>
            <div className={sectionItemClass}>বাংলাদেশ ই-পাসপোর্ট পোর্টাল</div>
            <div className={sectionItemClass}>
              ফলাফল প্রকাশের সিস্টেম (শিক্ষা বোর্ড)
            </div>
            <div className={sectionItemClass}>
              বাংলাদেশ কারিগরি শিক্ষা বোর্ড
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-3">
            <div className={sectionTitleClass}>গুরত্বপূর্ণ মেনু</div>
            <div className={sectionItemClass}>কোর্স</div>
            <div className={sectionItemClass}>নিউজ</div>
            <div className={sectionItemClass}>এডমিশন</div>
            <div className={sectionItemClass}>ভেরিফিকেশন</div>
          </div>
        </div>

        {/* Contact Info & Follow */}
        <div className="inline-flex flex-col justify-start items-end gap-6">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className={contactTitleClass}>যোগাযোগ</div>
            <div className={contactItemClass}>
              মোবাইল: 01888666619, 01864776487
            </div>
            <div className={contactItemClass}>
              ইমেইল: amadershikka@gmail.com
            </div>
            <div className={contactItemClass}>ঠিকানা: Bashundhara, Dhaka</div>
          </div>
          <div className="flex flex-col justify-start items-center gap-3">
            <div className={followTitleClass}>ফলো করুন</div>
            <div className="w-40 inline-flex justify-start items-start gap-8 flex-wrap content-start">
              {/* Social icons placeholders */}
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-blue-600 rounded-[50px]" />
                <div className="w-4 h-4 left-[8px] top-[8px] absolute bg-white" />
              </div>
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-sky-500 rounded-[50px]" />
                <div className="w-4 h-3 left-[8px] top-[9.50px] absolute bg-white" />
              </div>
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-[50px]" />
                <div className="w-4 h-4 left-[8px] top-[8px] absolute bg-white" />
              </div>
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-red-600 rounded-[50px]" />
                <div className="w-4 h-3 left-[8px] top-[10.40px] absolute bg-white" />
              </div>
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-pink-600 rounded-[50px]" />
                <div className="w-4 h-4 left-[7.70px] top-[7.70px] absolute bg-white" />
              </div>
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-black" />
                <div className="w-1.5 h-2 left-[9px] top-[13.63px] absolute bg-cyan-400" />
                <div className="w-1.5 h-3.5 left-[12.82px] top-[8px] absolute bg-cyan-400" />
                <div className="w-0.5 h-[1.18px] left-[20.36px] top-[11.07px] absolute bg-cyan-400" />
                <div className="w-[1.60px] h-[2.40px] left-[18.76px] top-[8.67px] absolute bg-rose-500" />
                <div className="w-1 h-1.5 left-[11.64px] top-[14.30px] absolute bg-rose-500" />
                <div className="w-3 h-3 left-[11.07px] top-[12.25px] absolute bg-rose-500" />
                <div className="w-3 h-3.5 left-[9.77px] top-[8.67px] absolute bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className={hrClass}></div>
        <div className="self-stretch px-96 flex flex-col justify-start items-start">
          <div className="w-[514.27px] text-center justify-start">
            <span className={`${footerTextClass} font-['Poppins']`}>
              © 2025 amadershikka.{" "}
            </span>
            <span className={`${footerTextClass} font-['Hind_Siliguri']`}>
              স্বর্বসত্ব সংরক্ষিত
            </span>
            <span className={`${footerTextClass} font-['Poppins']`}>.</span>
          </div>
          <div
            className={`w-[514.27px] text-center justify-start ${footerTextClass} font-['Hind_Siliguri']`}
          >
            প্রযুক্তিক সহযোগিতায়: GenzSoft.Cloud
          </div>
        </div>
      </div>
    </div>
  );
}
