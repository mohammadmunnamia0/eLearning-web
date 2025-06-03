const Certificates = () => {
  const cards = [
    {
      title: "কারিগরি শিক্ষা বোর্ড",
      description:
        "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কারিগরি শিক্ষা বোর্ড কর্তৃক অনুমোদিত",
      certificateId: "স্মারক নং: ৫৭০০০০০০",
      imageUrl: "https://placehold.co/21x22",
      imageClass: "w-5 h-5",
    },
    {
      title: "শিক্ষা মন্ত্রনালয়",
      description:
        "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রনালয় কর্তৃক অনুমোদিত",
      certificateId: "স্মারক নং: ৫৭০০০০০০",
      imageUrl: "https://placehold.co/25x24",
      imageClass: "w-6 h-6",
    },
    {
      title: "বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)",
      description:
        "বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস) কর্তৃক অনুমোদিত",
      certificateId: "EIIN No: 140126",
      imageUrl: "https://placehold.co/25x24",
      imageClass: "w-6 h-6",
    },
  ];

  return (
    <section className="mt-[140px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="text-center text-black text-2xl sm:text-3xl font-semibold font-['Hind_Siliguri']">
            অনুমোদন সমূহ
          </div>
          <div className="text-center text-black text-base sm:text-lg font-normal font-['Hind_Siliguri'] mt-2">
            আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার এর সরকারি অনুমোদন সমূহ
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="inline-flex flex-col justify-center items-start gap-0.5 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex justify-start items-center gap-2">
                <img
                  className={card.imageClass}
                  src={card.imageUrl}
                  alt={card.title}
                />
                <div className="justify-start text-black text-base font-semibold font-['Hind_Siliguri']">
                  {card.title}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-1 mt-2">
                <div className="justify-start text-black text-sm font-medium font-['Hind_Siliguri']">
                  {card.description}
                </div>
                <div className="justify-start text-black text-sm font-medium font-['Hind_Siliguri']">
                  {card.certificateId}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
