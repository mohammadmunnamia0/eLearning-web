import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firabase.config";

const GoogleReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const provider = new GoogleAuthProvider();

  const handleReviewButton = async () => {
    try {
      setError("");
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Google Sign In Error:", error);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  const handleSubmitReview = () => {
    if (!rating || !comment) return;

    const review = {
      id: Date.now(),
      user: {
        name: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      },
      rating,
      comment,
      timestamp: new Date().toISOString(),
    };

    setReviews((prev) => [...prev, review]);
    setIsModalOpen(false);
    setRating(0);
    setComment("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRating(0);
    setComment("");
    setError("");
  };

  return (
    <div className="p-4 md:p-8">
      <button
        className="w-full md:w-auto px-6 py-3 bg-[#186D6D] text-white rounded-lg hover:bg-[#145757] font-['Hind_Siliguri']"
        onClick={handleReviewButton}
      >
        Review us on Google
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Review Modal */}
      {isModalOpen && user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold font-['Hind_Siliguri']">
                Write a Review
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14" />
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-14 h-14 md:w-16 md:h-16"
              />
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-zinc-900 text-lg md:text-xl font-semibold font-['Hind_Siliguri']">
                  {user.displayName}
                </div>
                <div className="text-zinc-600 text-sm md:text-base font-normal font-['Hind_Siliguri']">
                  {user.email}
                </div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4 md:mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="w-6 h-6 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? "#F59E0B" : "#E5E7EB"}
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Review Text */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              className="w-full p-3 md:p-4 border rounded-lg mb-4 md:mb-6 h-32 text-base md:text-lg font-normal font-['Hind_Siliguri'] text-zinc-900"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmitReview}
              disabled={rating === 0 || !comment.trim()}
              className={`w-full py-3 rounded-lg font-['Hind_Siliguri'] text-base md:text-lg ${
                rating === 0 || !comment.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#186D6D] hover:bg-[#145757] text-white"
              }`}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}

      {/* Display Reviews */}
      <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="self-stretch inline-flex flex-col justify-start items-start gap-4 md:gap-6"
          >
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
              {/* User Info and Rating */}
              <div className="flex justify-start items-center gap-2 md:gap-3">
                <div className="w-12 h-12 md:w-14 md:h-14" />
                <img
                  src={review.user.photoURL}
                  alt={review.user.name}
                  className="w-14 h-14 md:w-16 md:h-16"
                />
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="text-zinc-900 text-lg md:text-xl font-semibold font-['Hind_Siliguri']">
                    {review.user.name}
                  </div>
                  <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-8 h-6 text-center text-black text-lg md:text-xl font-medium font-['Hind_Siliguri'] leading-normal">
                      {review.rating.toFixed(1)}
                    </div>
                    <div className="flex justify-start items-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 md:w-6 md:h-6 relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < review.rating ? "#F59E0B" : "#E5E7EB"}
                            className="w-5 h-5 md:w-6 md:h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Posted Time */}
              <div className="text-zinc-600 text-sm md:text-base font-normal font-['Hind_Siliguri']">
                Posted {new Date(review.timestamp).toLocaleDateString()}
              </div>
            </div>
            {/* Review Comment */}
            <div className="w-full md:w-[1169px] md:ml-20 text-zinc-900 text-base md:text-lg font-normal font-['Hind_Siliguri']">
              {review.comment}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReview;
