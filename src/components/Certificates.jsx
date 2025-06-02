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
    <section className="mt-[140px]">
      <div className="w-[1440px] h-80 relative overflow-hidden">
  <div className="left-[491px] top-[21px] absolute inline-flex flex-col justify-center items-center gap-0.5">
    <div className="text-center justify-start text-black text-3xl font-semibold font-['Hind_Siliguri']">অনুমোদন সমূহ</div>
    <div className="text-center justify-start text-black text-lg font-normal font-['Hind_Siliguri']">আমাদের শিক্ষা কম্পিউটার ট্রেনিং সেন্টার এর সরকারি অনুমোদন সমূহ</div>
  </div>
  <div className="left-[135px] top-[181px] absolute inline-flex justify-start items-center gap-8">
    <div className="inline-flex flex-col justify-center items-start gap-0.5">
      <div className="inline-flex justify-start items-center gap-2">
        <img className="w-5 h-5" src="https://placehold.co/21x22" />
        <div className="justify-start text-black text-base font-semibold font-['Hind_Siliguri']">কারিগরি শিক্ষা বোর্ড</div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <div className="justify-start text-black text-sm font-medium font-['Hind_Siliguri']">গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কারিগরি শিক্ষা বোর্ড কর্তৃক অনুমোদিত</div>
        <div className="self-stretch justify-start text-black text-sm font-medium font-['Hind_Siliguri']">স্মারক নং: ৫৭০00000</div>
      </div>
    </div>
    <div className="w-96 inline-flex flex-col justify-center items-start gap-0.5">
      <div className="inline-flex justify-start items-center gap-2">
        <img className="w-6 h-6" src="https://placehold.co/25x24" />
        <div className="justify-start text-black text-base font-semibold font-['Hind_Siliguri']">শিক্ষা মন্ত্রনালয়</div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <div className="self-stretch justify-start text-black text-sm font-medium font-['Hind_Siliguri']">গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রনালয় কর্তৃক অনুমোদিত</div>
        <div className="self-stretch justify-start text-black text-sm font-medium font-['Hind_Siliguri']">স্মারক নং: ৫৭০00000</div>
      </div>
    </div>
    <div className="inline-flex flex-col justify-center items-start gap-0.5">
      <div className="inline-flex justify-start items-center gap-2">
        <img className="w-6 h-6" src="https://placehold.co/25x24" />
        <div className="justify-start text-black text-base font-semibold font-['Hind_Siliguri']">বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস)</div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <div className="justify-start text-black text-sm font-medium font-['Hind_Siliguri']">বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (ব্যানবেইস) কর্তৃক অনুমোদিত</div>
        <div className="justify-start text-black text-sm font-medium font-['Hind_Siliguri']">EIIN No: 140126</div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Certificates;
