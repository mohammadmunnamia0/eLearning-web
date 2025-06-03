// const GoogleReview = () => {
//   return (
//     <div>
//       <script
//         src="https://static.elfsight.com/platform/platform.js"
//         async
//       ></script>
//       <div
//         class="elfsight-app-7d026a02-05a3-4265-9e1c-9c9afc3b052e"
//         data-elfsight-app-lazy
//       ></div>
//     </div>
//   );
// };


import React, { useEffect } from "react";

const GoogleReview = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-use-service-core", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-100 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-14 h-14 bg-white rounded-full shadow-md">
               <img alt="logo" />
          </div>
       
          <div className="flex flex-col">
            <h2 className="text-zinc-900 text-xl font-medium font-['Hind_Siliguri']">
              আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার
            </h2>
            <div className="flex items-center gap-1">
              <span className="text-black text-xl font-medium font-['Hind_Siliguri']">৪.৮</span>
              <div className="flex gap-1">
                {Array(4).fill().map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-amber-500 rounded"></div>
                ))}
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-zinc-600 text-base font-normal font-['Hind_Siliguri'] ml-[4.5rem]">Based on 700+ reviews</p>
        <p className="text-zinc-600 text-base font-normal font-['Hind_Siliguri'] ml-[4.5rem]">
          powered by <span className="text-blue-500 font-semibold">G</span>
          <span className="text-red-500 font-semibold">o</span>
          <span className="text-amber-500 font-semibold">o</span>
          <span className="text-blue-500 font-semibold">g</span>
          <span className="text-emerald-600 font-semibold">l</span>
          <span className="text-red-500 font-semibold">e</span>
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded font-medium flex items-center gap-2">
          review us on
          <img src="https://placehold.co/26x26" className="w-6 h-6 rounded" alt="review icon" />
        </button>
      </div>

      {/* Elfsight Review Widget */}
      <div className="w-full flex justify-center mb-10">
        <div
          className="elfsight-app-7d026a02-05a3-4265-9e1c-9c9afc3b052e w-full"
          data-elfsight-app-lazy
        ></div>
      </div>

    </div>
  );
};

export default GoogleReview;

