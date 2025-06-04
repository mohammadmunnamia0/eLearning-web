import React, { useState } from "react";
import image1 from "../assets/ourWork/1.jpg";
import image2 from "../assets/ourWork/2.jpg";
import image3 from "../assets/ourWork/3.jpg";
import image4 from "../assets/ourWork/4.jpg";

const OurWork = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (image, event) => {
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const ImagePopup = ({ image, onClose }) => {
    if (!image) return null;
    return (
      <div className="fixed inset-0 z-50" onClick={onClose}>
        <div
          className="absolute bg-white rounded-xl shadow-2xl p-2 w-[500px] h-[300px] transition-all duration-300 ease-out animate-rise"
          style={{
            left: popupPosition.x,
            top: popupPosition.y,
            transform: "translate(-50%, -50%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md text-gray-600 hover:text-gray-800 transition-transform hover:scale-110"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="grid items-center mt-[100px] px-4 md:px-6">
      <div
        className={`relative ${
          showAll ? "h-[1600px]" : "h-[815px]"
        } max-w-[1200px] mx-auto w-full`}
      >
        <div className="text-center text-black text-2xl md:text-3xl font-semibold   mb-8 md:mb-0 md:absolute md:left-[480px] md:top-[27px]">
          আমাদের কার্যক্রম সমূহ
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:absolute md:left-0 md:right-0">
          <div className="space-y-6 md:space-y-0">
            <img
              className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[131px] md:top-[139px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image1 ? "blur-sm" : ""
              }`}
              src={image1}
              alt=""
              onClick={(e) => handleImageClick(image1, e)}
            />
            <img
              className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[131px] md:top-[423px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image2 ? "blur-sm" : ""
              }`}
              src={image2}
              alt=""
              onClick={(e) => handleImageClick(image2, e)}
            />
            {showAll && (
              <>
                <img
                  className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[131px] md:top-[707px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image1 ? "blur-sm" : ""
                  }`}
                  src={image1}
                  alt=""
                  onClick={(e) => handleImageClick(image1, e)}
                />
                <img
                  className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[131px] md:top-[991px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image2 ? "blur-sm" : ""
                  }`}
                  src={image2}
                  alt=""
                  onClick={(e) => handleImageClick(image2, e)}
                />
              </>
            )}
          </div>

          <div className="space-y-6 md:space-y-0">
            <img
              className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[619px] md:top-[98px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image3 ? "blur-sm" : ""
              }`}
              src={image3}
              alt=""
              onClick={(e) => handleImageClick(image3, e)}
            />
            <img
              className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[619px] md:top-[382px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image4 ? "blur-sm" : ""
              }`}
              src={image4}
              alt=""
              onClick={(e) => handleImageClick(image4, e)}
            />
            {showAll && (
              <>
                <img
                  className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[619px] md:top-[666px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image3 ? "blur-sm" : ""
                  }`}
                  src={image3}
                  alt=""
                  onClick={(e) => handleImageClick(image3, e)}
                />
                <img
                  className={`w-full md:w-[452px] h-52 object-cover md:absolute md:left-[619px] md:top-[950px] rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image4 ? "blur-sm" : ""
                  }`}
                  src={image4}
                  alt=""
                  onClick={(e) => handleImageClick(image4, e)}
                />
              </>
            )}
          </div>
        </div>

        <div
          onClick={() => setShowAll(!showAll)}
          className={`w-full md:w-80 px-6 py-3 mt-6 md:mt-0 md:absolute bg-teal-700 rounded inline-flex justify-center items-center gap-2.5 cursor-pointer ${
            showAll ? "md:top-[1300px]" : "md:top-[725px]"
          } md:left-[467px]`}
        >
          <div className="justify-start text-white text-xl font-medium  ">
            {showAll ? "কম দেখুন" : "আরও দেখুন"}
          </div>
          <div className="p-2 bg-white rounded-[100px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.14)] flex justify-start items-center gap-2.5">
            <div className="w-4 h-4 relative">
              <div className="w-[4.73px] h-2.5 left-[5.94px] top-[2.72px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-900" />
              <div className="w-4 h-4 left-[16px] top-[16px] absolute origin-top-left -rotate-180 opacity-0" />
            </div>
          </div>
        </div>
      </div>
      <ImagePopup image={selectedImage} onClose={handleClosePopup} />
    </section>
  );
};

export default OurWork;
