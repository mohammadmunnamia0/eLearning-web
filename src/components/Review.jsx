import React from "react";

const Review = () => {
  return (
    <section className="text-center py-5 mt-20">
      <h2 className="mb-10 text-4xl font-bold">শিক্ষার্থীদের মন্তব্য</h2>
      <div className="flex justify-center gap-[54px] flex-wrap">
        {/* Testimonial 1 */}
        <div className="w-72 p-6 rounded-xl outline outline-1 outline-offset-[-0.5px] outline-gray-700 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="flex flex-col justify-start items-start gap-4 w-full">
            {/* Stars */}
            <div className="flex justify-start items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-amber-500 rounded-full" />
              ))}
            </div>
            {/* Text */}
            <p className="text-zinc-900 text-sm font-normal   leading-snug">
              আমার জন্য এটি একটি অসাধারণ অভিজ্ঞতা ছিল৷ পাঠ্যক্রম খুবই উপযোগী এবং
              হাতে-কলমে প্রশিক্ষণের সুযোগ পেয়েছি।
            </p>
            {/* User */}
            <div className="flex justify-start items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                স
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <p className="text-zinc-900 text-sm font-bold  ">শেখ সাদি</p>
                <p className="text-zinc-600 text-xs font-normal  ">
                  ৫ম ব্যাচের শিক্ষার্থী
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-72 p-6 rounded-xl outline outline-1 outline-offset-[-0.5px] outline-gray-700 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="flex flex-col justify-start items-start gap-4 w-full">
            {/* Stars */}
            <div className="flex justify-start items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-amber-500 rounded-full" />
              ))}
            </div>
            {/* Text */}
            <p className="text-zinc-900 text-sm font-normal   leading-snug">
              প্রশিক্ষণের সামগ্রিক মান অত্যন্ত ভালো। প্রযুক্তি এবং উপকরণ ব্যবহার
              করে শেখানো হয়েছ যা আমাদের কাজে লাগে।
            </p>
            {/* User */}
            <div className="flex justify-start items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                ফ
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <p className="text-zinc-900 text-sm font-bold  ">
                  মোহাম্মদ ফারুক
                </p>
                <p className="text-zinc-600 text-xs font-normal  ">
                  ১ম ব্যাচের শিক্ষার্থী
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="w-72 p-6 rounded-xl outline outline-1 outline-offset-[-0.5px] outline-gray-700 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="flex flex-col justify-start items-start gap-4 w-full">
            {/* Stars (3 amber + 2 neutral) */}
            <div className="flex justify-start items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-amber-500 rounded-full" />
              ))}
              {[...Array(2)].map((_, i) => (
                <div
                  key={i + 3}
                  className="w-3 h-3 bg-neutral-400 rounded-full"
                />
              ))}
            </div>
            {/* Text */}
            <p className="text-zinc-900 text-sm font-normal   leading-snug">
              আমি প্রশিক্ষণের মাধ্যমে আমার আত্মবিশ্বাস বাড়াতে সক্ষম হয়েছি।
              ক্যারিয়ার গঠনে এই প্রশিক্ষণ অত্যন্ত সহায়ক ছিল।
            </p>
            {/* User */}
            <div className="flex justify-start items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                আ
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <p className="text-zinc-900 text-sm font-bold  ">
                  আব্দুর রহমান
                </p>
                <p className="text-zinc-600 text-xs font-normal  ">
                  ২য় ব্যাচের শিক্ষার্থী
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
