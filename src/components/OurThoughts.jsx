import { FaArrowsAlt, FaBullseye, FaHeart, FaTrophy } from "react-icons/fa";

const OurThoughts = () => {
  return (
    <section className="our-thoughts-section mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="our-thoughts-left lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">আমাদের কথা</h2>
          <p className="mb-6">
            কোথায় না ব্যবহার হচ্ছে। কৃষি থেকে রকট এই ডিজিটাল যুগে বদলে যাচ্ছে
            জীবন জীবিকা। এই ডিজিটাল যুগকে বলা হচ্ছে কম্পিউটারের স্বর্ণযুগ। এই
            লক্ষ্যে আমরা কোম্পানীগঞ্জ উপজেলার প্রাণকেন্দ্র উপজেলা পরিষদের সামনে
            ও কোম্পানীগঞ্জ থানার মাত্র ৪০ গজ দক্ষিনে মামুন টাওয়ার এর ৪র্থ তলায়
            কারিগরি শিক্ষা বোর্ড অনুমোদিত কোম্পানীগঞ্জের সর্ববৃহৎ প্রযুক্তি
            নির্ভর, কারিগরি ও বৃত্তিমূলক শিক্ষা প্রসার করার জন্য মা কম্পিউটার
            ট্রেনিং সেন্টার একটি সর্বাধুনিক মানসম্পন্ন শিক্ষা প্রতিষ্ঠান গড়ে
            তুলেছি। শুধুমাত্র ব্যক্তিগত চাহিদা নয় বরং জাতীয় বা আন্তর্জাতিক
            চাহিদানুযায়ী কম্পিউটার প্রযুক্তিতে বিভিন্ন বিষয়ে প্রশিক্ষণের
            মাধ্যমে জনশক্তিকে আত্মবিশ্বাসী ও নির্ভরশীল হিসেবে গড়ে তোলা * মা
            কম্পিউটার ট্রেনিং সেন্টার এর মূল উদ্দেশ্যে।
          </p>
          <button className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700">
            বিস্তারিত
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="our-thoughts-right lg:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="card  p-6 rounded-lg flex flex-col items-center text-center">
            <div className="icon-container mb-4 text-4xl text-red-600">
              <FaBullseye />
            </div>{" "}
            {/* Icon for Mission and Vision */}
            <h3 className="text-xl font-semibold mb-2">মিশন ও ভিশন</h3>
            <button className="border py-2 px-6 rounded hover:bg-gray-100">
              বিস্তারিত
            </button>
          </div>

          {/* Card 2 */}
          <div className="card  p-6 rounded-lg flex flex-col items-center text-center">
            <div className="icon-container mb-4 text-4xl text-blue-600">
              <FaArrowsAlt />
            </div>{" "}
            {/* Icon for Our Strategy */}
            <h3 className="text-xl font-semibold mb-2">আমাদের স্ট্রাটেজি</h3>
            <button className="border py-2 px-6 rounded hover:bg-gray-100">
              বিস্তারিত
            </button>
          </div>

          {/* Card 3 */}
          <div className="card  p-6 rounded-lg flex flex-col items-center text-center">
            <div className="icon-container mb-4 text-4xl text-green-600">
              <FaTrophy />
            </div>{" "}
            {/* Icon for Success Stories */}
            <h3 className="text-xl font-semibold mb-2">সফলতার গল্প</h3>
            <button className="border py-2 px-6 rounded hover:bg-gray-100">
              বিস্তারিত
            </button>
          </div>

          {/* Card 4 */}
          <div className="card  p-6 rounded-lg flex flex-col items-center text-center">
            <div className="icon-container mb-4 text-4xl text-purple-600">
              <FaHeart />
            </div>{" "}
            {/* Icon for Opportunities and Benefits */}
            <h3 className="text-xl font-semibold mb-2">সুযোগ-সুবিধা সমূহ</h3>
            <button className="border py-2 px-6 rounded hover:bg-gray-100">
              বিস্তারিত
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurThoughts;
