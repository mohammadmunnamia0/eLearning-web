import React from "react";

const WhyChooseUS = () => {
  return (
    <section className="mt-20">
      <section className="flex justify-between p-5 gap-5">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">আমাদের কোর্স কেন করবেন?</h2>
          <p className="mb-5 text-gray-700">
            এই ডিজিটাল যুগকে বলা হচ্ছে কম্পিউটারের স্বর্ণযুগ। এই লক্ষ্যে আমরা মা
            কম্পিউটার ট্রেনিং সেন্টার একটি সর্বাধুনিক মানসম্পন্ন শিক্ষা
            প্রতিষ্ঠান গড়ে তুলেছি। শুধুমাত্র ব্যক্তিগত চাহিদা নয় বরং জাতীয় বা
            আন্তর্জাতিক চাহিদানুযায়ী কম্পিউটার প্রযুক্তিতে বিভিন্ন বিষয়ে
            প্রশিক্ষণের মাধ্যমে জনশক্তিকে আত্মবিশ্বাসী ও নির্ভরশীল হিসেবে গড়ে
            তোলা।
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">বিশেষজ্ঞ প্রশিক্ষক</h3>
                <p className="text-sm text-gray-600">
                  আমাদের প্রশিক্ষকরা অভিজ্ঞ এবং শিল্পের সাথে সংযুক্ত।
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">উপযুক্ত পাঠ্যক্রম</h3>
                <p className="text-sm text-gray-600">
                  কোর্সগুলো প্রয়োজনীয় দক্ষতা উন্নয়নে সহায়তা করে।
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">প্রথম শ্রেণীর উপকরণ</h3>
                <p className="text-sm text-gray-600">
                  আধুনিক প্রযুক্তি ও উপকরণ ব্যবহৃত হয়।
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">অনলাইন সাপোর্ট</h3>
                <p className="text-sm text-gray-600">
                  কোর্সের পরবর্তী সময়ে সাহায্যের জন্য অনলাইন সাপোর্ট পাওয়া যাবে।
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">সার্টিফিকেট</h3>
                <p className="text-sm text-gray-600">
                  সফলভাবে কোর্স সম্পন্ন হলে সনদ প্রদান করা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Placeholder for the image */}
        <div className="flex-1 bg-gray-200 min-h-[300px]">
          {/* You can add an img tag here later */}
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUS;
