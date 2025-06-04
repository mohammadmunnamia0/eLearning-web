import React, { useState } from "react";
// import image1 from "../assets/ourWork/1.jpg";
import image1 from "../../assets/ourWork/1.jpg";
import image2 from "../../assets/ourWork/2.jpg";
import image3 from "../../assets/ourWork/3.jpg";
import image4 from "../../assets/ourWork/4.jpg";

const PhotoGallery2 = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [image1, image2, image3, image4];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = allImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = allImages.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex]);
  };

  const ImagePopup = ({ image, onClose }) => {
    if (!image) return null;
    return (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-75"
        onClick={onClose}
      >
        <button
          className="absolute left-[calc(50%-500px)] top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md text-gray-600 hover:text-gray-800 transition-transform hover:scale-110 z-50"
          onClick={(e) => {
            e.stopPropagation();
            handlePrevImage();
          }}
        >
          ←
        </button>
        <button
          className="absolute right-[calc(50%-500px)] top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md text-gray-600 hover:text-gray-800 transition-transform hover:scale-110 z-50"
          onClick={(e) => {
            e.stopPropagation();
            handleNextImage();
          }}
        >
          →
        </button>
        <div
          className="absolute bg-white rounded-xl shadow-2xl p-2 w-[90vw] max-w-[800px] h-[80vh] max-h-[600px] transition-all duration-300 ease-out animate-rise"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <img
              src={image}
              alt=""
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-600 hover:text-gray-800 transition-transform hover:scale-110"
              onClick={onClose}
            >
              ×
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="flex justify-center items-center mt-[80px] px-4 md:px-6">
      <div className=" w-full">
        <div className="text-center text-black text-2xl md:text-3xl font-semibold mb-8">
          আমাদের কার্যক্রম সমূহ
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <div className="space-y-6">
            <img
              className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image1 ? "blur-sm" : ""
              }`}
              src={image1}
              alt=""
              onClick={() => handleImageClick(image1)}
            />
            <img
              className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image2 ? "blur-sm" : ""
              }`}
              src={image2}
              alt=""
              onClick={() => handleImageClick(image2)}
            />
            {showAll && (
              <>
                <img
                  className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image1 ? "blur-sm" : ""
                  }`}
                  src={image1}
                  alt=""
                  onClick={() => handleImageClick(image1)}
                />
                <img
                  className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image2 ? "blur-sm" : ""
                  }`}
                  src={image2}
                  alt=""
                  onClick={() => handleImageClick(image2)}
                />
              </>
            )}
          </div>

          <div className="space-y-6">
            <img
              className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image3 ? "blur-sm" : ""
              }`}
              src={image3}
              alt=""
              onClick={() => handleImageClick(image3)}
            />
            <img
              className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                selectedImage && selectedImage !== image4 ? "blur-sm" : ""
              }`}
              src={image4}
              alt=""
              onClick={() => handleImageClick(image4)}
            />
            {showAll && (
              <>
                <img
                  className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image3 ? "blur-sm" : ""
                  }`}
                  src={image3}
                  alt=""
                  onClick={() => handleImageClick(image3)}
                />
                <img
                  className={`w-full h-52 object-cover rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ${
                    selectedImage && selectedImage !== image4 ? "blur-sm" : ""
                  }`}
                  src={image4}
                  alt=""
                  onClick={() => handleImageClick(image4)}
                />
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center m-8">
          <div
            onClick={() => setShowAll(!showAll)}
            className="w-full md:w-80 px-6 py-3 bg-teal-700 rounded inline-flex justify-center items-center gap-2.5 cursor-pointer"
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
      </div>
      <ImagePopup image={selectedImage} onClose={handleClosePopup} />
    </section>
  );
};

export default PhotoGallery2;
