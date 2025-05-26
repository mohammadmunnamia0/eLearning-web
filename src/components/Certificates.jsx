const Certificates = () => {
  const cards = [
    {
      title: "কারিগরি শিক্ষা বোর্ড",
      description:
        "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কারিগরি শিক্ষা বোর্ড কর্তৃক অনুমোদিত",
      certificateId: "স্মারক নং: ৫৭০00000",
      imageUrl: "../assets/certificatessectionimg/2.png",
    },
    {
      title: "শিক্ষা মন্ত্রনালয়",
      description:
        "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রনালয় কর্তৃক অনুমোদিত",
      certificateId: "স্মারক নং: ৫৭০00000",
      imageUrl: "../assets/certificatessectionimg/1.png",
    },
    {
      title: "বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)",
      description:
        "বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস) কর্তৃক অনুমোদিত",
      certificateId: "EIIN No: 140126",
      imageUrl: "../assets/certificatessectionimg/1.png",
    },
  ];
  return (
    <section className="mt-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">অনুমোদন সমূহ</h1>
        <p>আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার এর সরকারি অনুমোদন সমূহ</p>
      </section>
      <section className="flex gap-4 justify-center items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow h-full border border-red-500 w-[400px]"
            >
              <div className="flex gap-4">
                <img src={card.imageUrl} alt="" />
                <h3 className="font-bold mb-2">{card.title}</h3>
              </div>
              <h3 className="mb-2">{card.description}</h3>
              <p className="text-gray-700">{card.certificateId}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Certificates;
