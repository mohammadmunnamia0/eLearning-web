import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("পাঠানো হচ্ছে...");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("ম্যাসেজ সফলভাবে পাঠানো হয়েছে");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Left Column: Message Form */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            আপনার ম্যাসেজ
          </h2>
          <form
            onSubmit={onSubmit}
            className="bg-gray-100 p-4 sm:p-6 rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm sm:text-base text-gray-700 font-medium mb-2"
              >
                আপনার নাম
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-teal-50"
                placeholder="আপনার নাম লিখুন"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base text-gray-700 font-medium mb-2"
              >
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-teal-50"
                placeholder="আপনার ইমেইল লিখুন"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm sm:text-base text-gray-700 font-medium mb-2"
              >
                বিষয়
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-teal-50"
                placeholder="বিষয় লিখুন"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm sm:text-base text-gray-700 font-medium mb-2"
              >
                ম্যাসেজ
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-teal-50"
                placeholder="আপনার ম্যাসেজ লিখুন"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 px-4 text-sm sm:text-base rounded-md hover:bg-teal-800 transition duration-300"
            >
              পাঠিয়ে দিন
            </button>
            {result && (
              <p
                className={`mt-4 text-center text-sm sm:text-base ${
                  result === "ম্যাসেজ সফলভাবে পাঠানো হয়েছে"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>

        {/* Right Column: Contact Info */}
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            যোগাযোগের তথ্য
          </h2>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.045 6.79-3 9.5l1-11zM12 11c0 3.517 1.045 6.79 3 9.5l-1-11zM12 11a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                  ঠিকানা
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  বসুন্ধরা, ঢাকা
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.134l-1.498.999a11.945 11.945 0 01-3.374-3.374l.999-1.498a1 1 0 011.134-.502z"
                />
              </svg>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                  মোবাইল নম্বর
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  01888666619, 01867746587
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 9h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v11a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                  ইমেইল
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  amadershikkha@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          আমাদের অবস্থান
        </h2>
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.893655319245!2d90.38806817468041!3d23.751171388748002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1748255461034!5m2!1sen!2sbd"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
