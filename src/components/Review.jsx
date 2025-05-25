import React from "react";

const Review = () => {
  return (
    <section className="text-center py-5 mt-20">
      <h2 className="mb-10 text-4xl   font-bold">শিক্ষার্থীদের মন্তব্য</h2>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="border border-gray-300 rounded-lg p-5 max-w-sm text-left flex flex-col justify-between">
          <p className="text-yellow-500 mb-2">★★★★★</p>
          <p className="mb-4">
            আমার জন্য এটি একটি অসাধারণ অভিজ্ঞতা ছিল। পাঠ্যক্রম খুবই উপযোগী এবং
            হাতে-কলমে প্রশিক্ষণের সুযোগ পেয়েছি।
          </p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mr-3">
              Avatar
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">শেখ সাদি</p>
              <p className="text-sm text-gray-600">৫ম ব্যাচের শিক্ষার্থী</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-5 max-w-sm text-left flex flex-col justify-between">
          <p className="text-yellow-500 mb-2">★★★★★</p>
          <p className="mb-4">
            প্রশিক্ষণের সামগ্রিক মান অত্যন্ত ভালো। প্রযুক্তি এবং উপকরণ ব্যবহার
            করে শেখানো হয়েছ যা আমাদের কাজে লাগে।
          </p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mr-3">
              Avatar
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">মোহাম্মদ ফারুক</p>
              <p className="text-sm text-gray-600">১ম ব্যাচের শিক্ষার্থী</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-5 max-w-sm text-left flex flex-col justify-between">
          <p className="text-yellow-500 mb-2">★★★☆☆</p>
          <p className="mb-4">
            আমি প্রশিক্ষণের মাধ্যমে আমার আত্মবিশ্বাস বাড়াতে সক্ষম হয়েছি।
            ক্যারিয়ার গঠনে এই প্রশিক্ষণ অত্যন্ত সহায়ক ছিল।
          </p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mr-3">
              Avatar
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-1">আব্দুর রহমান</p>
              <p className="text-sm text-gray-600">২য় ব্যাচের শিক্ষার্থী</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
