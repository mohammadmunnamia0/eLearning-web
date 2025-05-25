import React, { useState } from "react";

const AdmissionForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // *** Remember to replace with your actual access key ***

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        এডমিশন ফর্ম
      </h2>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label htmlFor="course" className="mb-1 font-bold text-gray-700">
            কোর্স
          </label>
          <select
            id="course"
            name="course"
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          >
            <option value="">Select Course</option>
            {/* Add course options here */}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-bold text-gray-700">
            নাম
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="father_husband_name"
            className="mb-1 font-bold text-gray-700"
          >
            বাবার / স্বামীর নাম
          </label>
          <input
            type="text"
            id="father_husband_name"
            name="father_husband_name"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mother_name" className="mb-1 font-bold text-gray-700">
            মায়ের নাম
          </label>
          <input
            type="text"
            id="mother_name"
            name="mother_name"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-1 font-bold text-gray-700">
            লিঙ্গ
          </label>
          <select
            id="gender"
            name="gender"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          >
            <option value="">Select Gender</option>
            <option value="male">পুরুষ</option>
            <option value="female">মহিলা</option>
            <option value="other">অন্যান্য</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="date_of_birth"
            className="mb-1 font-bold text-gray-700"
          >
            জন্ম তারিখ
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="occupation" className="mb-1 font-bold text-gray-700">
            পেশা
          </label>
          <select
            id="occupation"
            name="occupation"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          >
            <option value="">Select Occupation</option>
            {/* Add occupation options here */}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="course_mode" className="mb-1 font-bold text-gray-700">
            কোর্স মোড
          </label>
          <select
            id="course_mode"
            name="course_mode"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          >
            <option value="">Select Course Mode</option>
            <option value="online">অনলাইন</option>
            <option value="offline">অফলাইন</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="education" className="mb-1 font-bold text-gray-700">
            সর্বোচ্চ শিক্ষাগত যোগ্যতা
          </label>
          <input
            type="text"
            id="education"
            name="education"
            placeholder="e.g. HCS with GPA 4.5"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobile" className="mb-1 font-bold text-gray-700">
            মোবাইল
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="guardian_mobile"
            className="mb-1 font-bold text-gray-700"
          >
            অভিভাবকের মোবাইল
          </label>
          <input
            type="text"
            id="guardian_mobile"
            name="guardian_mobile"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-bold text-gray-700">
            ইমেইল
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="current_address"
            className="mb-1 font-bold text-gray-700"
          >
            বর্তমান ঠিকানা
          </label>
          <textarea
            id="current_address"
            name="current_address"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50 min-h-[100px]"
          ></textarea>
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="permanent_address"
            className="mb-1 font-bold text-gray-700"
          >
            স্থায়ী ঠিকানা
          </label>
          <textarea
            id="permanent_address"
            name="permanent_address"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50 min-h-[100px]"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="photo" className="mb-1 font-bold text-gray-700">
            ছবি (Max 50 KB)
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept=".jpg,.jpeg,.png"
            className="p-2 bg-teal-50 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="application_date"
            className="mb-1 font-bold text-gray-700"
          >
            আবেদনের তারিখ
          </label>
          <input
            type="date"
            id="application_date"
            name="application_date"
            required
            className="p-2 border border-gray-300 rounded-md bg-teal-50"
          />
        </div>
        <button
          type="submit"
          className="md:col-span-2 bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-800 mt-4"
        >
          সাবমিট
        </button>
      </form>
      <span className="md:col-span-2 text-center mt-2 font-bold">{result}</span>
    </div>
  );
};

export default AdmissionForm;
