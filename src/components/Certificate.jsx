import React from "react";

const certificate = () => {
  return (
    <section className="mt-20 mb-20">
      <section className="text-center p-5">
        <h2 className="text-4xl font-bold mb-8">অনুমোদন সমূহ</h2>
        <p className="text-xl text-gray-600 mb-12">
          আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার এর সরকারি অনুমোদন সমূহ
        </p>
      </section>
      <section>
        <div className="flex ml-20 flex-wrap">
          <div className=" border border-red-400 m-2.5 p-5  rounded-lg w-72">
            <div className="flex  gap-12 ">
              <img
                src=""
                alt=" Board Icon"
                className="w-[50px] h-[50px] mb-2.5 rounded-full"
              />
              <h3 className="text-lg mb-1">কারিগরি শিক্ষা বোর্ড</h3>
            </div>
            <p className="text-sm text-gray-700  mb-2.5">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কারিগরি শিক্ষা বোর্ড কর্তৃক
              অনুমোদিত
            </p>
            <p className="text-sm text-gray-500">স্মারক নং: ৫৭০০০০০০</p>
          </div>
          <div className="border border-red-400 m-2.5 p-5  rounded-lg w-72">
            <div className="flex gap-12">
              <img
                src=""
                alt="Montronaloy Icon"
                className="w-[50px] h-[50px] mb-2.5 rounded-full"
              />
              <h3 className="text-lg mb-1">শিক্ষা মন্ত্রনালয়</h3>
            </div>
            <p className="text-sm text-gray-700  mb-2.5">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রনালয় কর্তৃক অনুমোদিত
            </p>
            <p className="text-sm text-gray-500">স্মারক নং: ৫৭০০০০০০</p>
          </div>
          <div className="border border-red-400 m-2.5 p-5  rounded-lg h-[170px]">
            <div className="flex  gap-12">
              <img
                src=""
                alt="BANBEIS Icon"
                className="w-[50px] h-[50px] mb-2.5 rounded-full"
              />
              <h3 className="text-lg mb-1">
                বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)
              </h3>
            </div>
            <p className="text-sm text-gray-700  mb-2.5">
              বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস) কর্তৃক
              অনুমোদিত
            </p>
            <p className="text-sm text-gray-500">EIIN No: 140126</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default certificate;
