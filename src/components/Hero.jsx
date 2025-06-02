import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <section className=" max-w-[1284px] mx-auto bg-[#186D6D] rounded-[16px]">
        <section className="text-white p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-6">
          <div className="font-nav lg:pl-9">
            <div className="w-full lg:w-[642px]">
              <h1 className="w-full lg:w-[618px] text-white text-[32px] md:text-[40px] lg:text-[50px] font-semibold font-[Hind_Siliguri] break-words">
                আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টারে আপনাকে স্বাগতম
              </h1>

              <p className="w-full lg:w-[642px] text-white text-[16px] md:text-[18px] font-normal font-[Hind_Siliguri] break-words mt-4">
                আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার শিক্ষার্থীদের জন্য একটি
                উন্নত প্রশিক্ষণ কেন্দ্র, যেখানে কম্পিউটার প্রযুক্তি শিক্ষা ও
                পেশাগত উন্নয়নের সুযোগ প্রদান করে। এটি সফল ভবিষ্যতের জন্য
                গঠনমূলক ভিত্তি তার করে।
              </p>
            </div>
            <div className="navbar-start mt-4 flex flex-wrap gap-2">
              <NavLink to="/course" className="w-full sm:w-auto">
                <div className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-[#FF9900] rounded shadow-[0px_4px_7px_rgba(255,153,0,0.71)] overflow-hidden">
                  <div className="text-white text-base font-semibold font-[Hind_Siliguri] break-words">
                    কোর্সে সমূহ
                  </div>
                </div>
              </NavLink>
             
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src="https://i.ibb.co/3y0x5bH/hero-image.png"
              alt="Hero"
              className="w-full h-auto mt-6 rounded-lg shadow-lg max-w-[500px] mx-auto"
            />
          </div>
        </section>
        <section className="relative top-10">
          <div className="flex gap-4  px-4 md:px-6 lg:px-9 pb-6">
            <div className="w-full md:w-auto inline-flex items-center justify-start gap-2 p-3 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="relative w-[60px] h-[60px] shrink-0">
                <div className="absolute left-[7.5px] top-[7.5px] w-[42.5px] h-[45px] outline outline-[1.5px] outline-[#186D6D] -outline-offset-[0.75px]" />
                <div className="absolute left-[17.5px] top-[10px] w-[35px] h-[25px] outline outline-[1.5px] outline-[#186D6D] -outline-offset-[0.75px]" />
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch">
                  <span className="text-black text-base font-semibold font-['Noto_Sans_Bengali']">
                    ১৫
                  </span>
                  <span className="text-black text-base font-semibold font-['Hind_Siliguri']">
                    + কোর্স
                  </span>
                </div>
                <div className="w-full md:w-[190px] text-black text-sm font-medium font-['Hind_Siliguri'] break-words">
                  কম্পিউটার শিক্ষা, দক্ষতা উন্নয়ন ও পেশাগত প্রশিক্ষণ
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto inline-flex items-center justify-start gap-2 p-3 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="relative w-[60px] h-[60px] shrink-0">
                <div className="absolute left-[7.5px] top-[7.5px] w-[42.5px] h-[45px] outline outline-[1.5px] outline-[#186D6D] -outline-offset-[0.75px]" />
                <div className="absolute left-[17.5px] top-[10px] w-[35px] h-[25px] outline outline-[1.5px] outline-[#186D6D] -outline-offset-[0.75px]" />
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch">
                  <span className="text-black text-base font-semibold font-['Noto_Sans_Bengali']">
                    প্রফেশনাল ক্যারিয়ার
                  </span>
                </div>
                <div className="w-full md:w-[190px] text-black text-sm font-medium font-['Hind_Siliguri'] break-words">
                  দক্ষতা, অভিজ্ঞতা, জ্ঞান, উন্নতি, সাফল্য, বৃদ্ধি সুযোগ
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto inline-flex items-center justify-start gap-2 p-3 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="relative w-[60px] h-[60px] shrink-0">
                <div className="absolute left-[7.5px] top-[7.5px] w-[42.5px] h-[45px] outline outline-[1.5px] outline-[#186D6D] -outline-offset-[0.75px]" />
                <div className="absolute left-[17.5px] top-[10px] w-[35px] h-[25px] outline outline-[1.5px] outline-[#186D6D] -outline-offset-[0.75px]" />
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch">
                  <span className="text-black text-base font-semibold font-['Noto_Sans_Bengali']">
                    দক্ষ ও অভিজ্ঞ প্রশিক্ষক
                  </span>
                </div>
                <div className="w-full md:w-[190px] text-black text-sm font-medium font-['Hind_Siliguri'] break-words">
                  জ্ঞানী, অভিজ, সহায়ক,উদ্যমী, প্রেরণাদায়ক এবং
                  শিক্ষার্থী-কেন্দ্রিক
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
