import React from 'react';

const Stats = () => {
    return (
        <section className="bg-blue-50 py-12 mt-20">
            <div className=" mx-auto flex justify-center items-center gap-20 flex-wrap">
                {/* Stat 1: Current Courses */}
                <div className="flex flex-col items-center">
                    {/* Placeholder Icon */}
                    <div className="text-4xl mb-2">📖</div>
                    <div className="text-2xl font-bold">16</div>
                    <div className="text-md">বর্তমান কোর্স</div>
                </div>

                {/* Stat 2: Instructors */}
                <div className="flex flex-col items-center">
                    {/* Placeholder Icon */}
                    <div className="text-4xl mb-2">📊</div> {/* Using a list/chart icon as a placeholder */}
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-md">ইন্সট্রাক্টর</div>
                </div>

                {/* Stat 3: Students */}
                <div className="flex flex-col items-center">
                    {/* Placeholder Icon */}
                    <div className="text-4xl mb-2">🎓</div>
                    <div className="text-2xl font-bold">60</div>
                    <div className="text-md">শিক্ষার্থী</div>
                </div>

                {/* Stat 4: Courses Completed */}
                <div className="flex flex-col items-center">
                    {/* Placeholder Icon */}
                    <div className="text-4xl mb-2">👨‍🎓</div> {/* Using a student icon as a placeholder */}
                    <div className="text-2xl font-bold">277</div>
                    <div className="text-md">কোর্স সম্পূর্ণ করেছেন</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;