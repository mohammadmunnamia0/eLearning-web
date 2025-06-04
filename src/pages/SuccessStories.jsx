import React from "react";

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: "শেখ সাদি",
      batch: "৫ম ব্যাচের শিক্ষার্থী",
      image: "/path/to/sadi.jpg", // Replace with actual image path
      testimonial:
        "আমার জন্য এটি একটি অসাধারণ অভিজ্ঞতা ছিল৷ পাঠ্যক্রম খুবই উপযোগী এবং হাতে-কলমে প্রশিক্ষণের সুযোগ পেয়েছি। প্রশিক্ষকদের সহায়তা এবং আধুনিক প্রযুক্তির ব্যবহার আমাকে অনেক কিছু শিখতে সাহায্য করেছে।",
    },
    {
      id: 2,
      name: "মোহাম্মদ ফারুক",
      batch: "৩য় ব্যাচের শিক্ষার্থী",
      image: "/path/to/faruk.jpg", // Replace with actual image path
      testimonial:
        "প্রশিক্ষণের সামগ্রিক মান অত্যন্ত ভালো। প্রযুক্তি এবং উপকরণ ব্যবহার করে শেখানো হয়েছ যা আমাদের কাজে লাগে। এখন আমি একটি ভালো চাকরি পেয়েছি।",
    },
    {
      id: 3,
      name: "আব্দুর রহমান",
      batch: "২য় ব্যাচের শিক্ষার্থী",
      image: "/path/to/rahman.jpg", // Replace with actual image path
      testimonial:
        "এই প্রতিষ্ঠান থেকে প্রশিক্ষণ নেওয়ার পর আমি অনেক আত্মবিশ্বাসী হয়ে উঠেছি। বর্তমানে আমি একটি মাল্টিন্যাশনাল কোম্পানিতে কাজ করছি।",
    },
  ];

  return (
    <section className="mt-[80px] md:mt-[120px] lg:mt-[147px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-hind-siliguri font-semibold text-center mb-12">
          সফলতার গল্প
        </h1>

        <div className="space-y-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl p-6 shadow-md"
            >
              {/* Student Image */}
              <div className="w-full md:w-[300px] h-[300px] rounded-xl overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-[#186D6D] rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-hind-siliguri">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 font-hind-siliguri">
                      {testimonial.batch}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-amber-500 rounded"></div>
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed font-hind-siliguri">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
