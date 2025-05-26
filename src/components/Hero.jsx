import { NavLink } from "react-router-dom";
import Button from "./sharedComponents/Button";

const Hero = () => {
  return (
    <section>
      <section className="bg-teal-700 rounded-lg">
        <section className=" text-white p-8 flex justify-between">
          <div className="max-w-[600px] ">
            <h1 className="text-4xl font-bold mb-4">
              আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টারে আপনাকে স্বাগতমa
            </h1>
            <p className="text-lg mb-6">
              আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার শিক্ষার্থীদের জন্য একটি
              উন্নত প্রশিক্ষণ কেন্দ্র, যেখানে কম্পিউটার প্রযুক্তি শিক্ষা ও
              পেশাগত উন্নয়নের সুযোগ প্রদান করে। এটি সফল ভবিষ্যতের জন্য গঠনমূলক
              ভিত্তি তার করে।
            </p>
            <div className="navbar-start">
              <NavLink to="/course" className="mr-2">
                <Button className="bg-orange-500">কোর্সে সমূহ</Button>
              </NavLink>
              <NavLink to="/admission">
                <Button className="bg-orange-500">Admission</Button>
              </NavLink>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/3y0x5bH/hero-image.png"
              alt="Hero"
              className="w-full h-auto mt-6 rounded-lg shadow-lg"
            />
          </div>
        </section>
        <section className="relative top-16">
          <div className="rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 p-8">
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-0"> */}
              <div className="bg-white p-4 rounded-lg shadow max-w-[300px] ">
                <h3 className="text-xl font-bold mb-2">১৫+ কোর্স</h3>
                <p>কম্পিউটার শিক্ষা, দক্ষতা উন্নয়ন ও পেশাগত প্রশিক্ষণ</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow max-w-[300px] ">
                <h3 className="text-xl font-bold mb-2">
                  {" "}
                  দক্ষ ও অভিজ্ঞ প্রশিক্ষক
                </h3>
                <p>
                  {" "}
                  জ্ঞানী, অভিজ, সহায়ক,উদ্যমী, প্রেরণাদায়ক এবং
                  শিক্ষার্থী-কেন্দ্রিক
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow max-w-[300px]">
                <h3 className="text-xl font-bold mb-2">প্রফেশনাল ক্যারিয়ার</h3>
                <p>দক্ষতা, অভিজ্ঞতা, জ্ঞান, উন্নতি, সাফল্য, বৃদ্ধি সুযোগ</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
