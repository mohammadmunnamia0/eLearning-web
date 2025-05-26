const Footer = () => {
  return (
    <div>
      <footer className="footer bg-teal-700 text-white rounded-t-3xl text-base-content p-10 flex justify-between mt-20">
        <nav>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎓</span>
            <span className="font-bold text-lg">Amader Shikkha</span>
          </div>
          <div className="text-sm mb-4">
            সবধরনের প্রযুক্তি নির্ভর, ক্যারিয়ার ও বুদ্ধিমূলক শিক্ষা
          </div>
        </nav>
        <nav>
          <div>
            <div className="font-semibold mb-2">আমাদের সম্পর্কে</div>
            <ul className="space-y-1 text-sm">
              <li>আমাদের কথা</li>
              <li>সাহায্য</li>
              <li>প্রশ্ন</li>
              <li>যোগাযোগ</li>
            </ul>
          </div>
        </nav>
        <nav>
          <div>
            <div className="font-semibold mb-2">গুরুত্বপূর্ণ লিংক</div>
            <ul className="space-y-1 text-sm">
              <li>শিক্ষা বোর্ডের ফলাফল</li>
              <li>এতদ্ব্যতীত আবেদন নিয়মাবলী</li>
              <li>বাংলাদেশ ই-পাসপোর্ট পোর্টাল</li>
              <li>ফলাফল প্রকাশের নিয়মাবলী (শিক্ষা বোর্ড)</li>
              <li>বাংলাদেশ কারিগরি শিক্ষা বোর্ড</li>
            </ul>
          </div>
        </nav>
        <nav>
          <div>
            <div className="font-semibold mb-2">গুরুত্বপূর্ণ মেনু</div>
            <ul className="space-y-1 text-sm mb-4">
              <li>কোর্স</li>
              <li>নিউজ</li>
              <li>এডমিশন</li>
              <li>ভেরিফিকেশন</li>
            </ul>
          </div>
        </nav>
        <nav>
          <div className="font-semibold mb-2">যোগাযোগ</div>
          <div className="text-sm mb-1">মোবাইল: 01888666619, 01864776487</div>
          <div className="text-sm mb-1">ইমেইল: amadershikka@gmail.com</div>
          <div className="text-sm mb-2">ঠিকানা: Bashundhara, Dhaka</div>
          <div className="flex gap-2">
            {" "}
            ফলো করুন :
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-pink-500 hover:underline">
                Instagram
              </a>
              <a href="#" className="text-blue-700 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <div className="footer footer-center p-4 bg-base-200 text-base-content">
        <p>
          © 2025 amadershikkha. সর্বস্বত্ব সংরক্ষিত.{" "}
          <a href="" className="link link-hover">
            প্রযুক্তিক সহায়তায়: GenzSoft.Cloud
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
