import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaSpinner } from "react-icons/fa";
import { axiosInstance } from "../services/axios";
import { useProductStore } from "../store/useProductStore.js";
import ProductSkeleton from "../components/skeletons/ProductSkeleton.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const {
    product,
    reviews,
    loading,
    error,
    fetchProductById,
    fetchProductReviews,
  } = useProductStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    rating: 5,
    comment: ""
  });

  useEffect(() => {
    fetchProductById(id);
    fetchProductReviews(id);
  }, [id]);

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = product?.name;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      facebook: `https://facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank");
  };

  
  if (loading) return <ProductSkeleton />;

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center h-96">
          <div className="text-red-600 text-xl font-semibold">{error || "Product not found"}</div>
        </div>
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`gallery-${idx}`}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer transition border-2 shrink-0 ${selectedImage === idx
                      ? "border-purple-600"
                      : "border-gray-200"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <p className="text-purple-600 font-semibold uppercase tracking-wide mb-2">{product.brand}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-gray-600">{averageRating} ({reviews.length} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-2">Price</p>
              <p className="text-4xl font-bold text-purple-600">₹{product.price}</p>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-gray-600 font-semibold mb-3">Select Size:</p>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSize(s.size)}
                    className={`px-6 py-2 rounded-lg font-semibold transition border-2 ${selectedSize === s.size
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-purple-600"
                      }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg">
                Add to Cart
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center gap-2"
                >
                  <FaShare /> Share
                </button>
                {showShareMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-3 z-10">
                    <button
                      onClick={() => shareOnSocial("twitter")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition w-full text-left text-blue-400"
                    >
                      <FaTwitter /> Twitter
                    </button>
                    <button
                      onClick={() => shareOnSocial("facebook")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition w-full text-left text-blue-600"
                    >
                      <FaFacebook /> Facebook
                    </button>
                    <button
                      onClick={() => shareOnSocial("linkedin")}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition w-full text-left text-blue-700"
                    >
                      <FaLinkedin /> LinkedIn
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

          {/* Add Review Button: For future use*/}
          <button
            // onClick={() => setShowReviewForm(!showReviewForm)}
            className="mb-8 px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition cursor-not-allowed"
            disabled
          >
            Write a Review
          </button>

          {/* Review Form
          {showReviewForm && (
            <form onSubmit={handleReviewSubmit} className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.user}
                  onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none"
                    >
                      <FaStar
                        size={24}
                        className={formData.rating >= star ? "text-yellow-400" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Your Review</label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 h-24 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Submit Review
              </button>
            </form>
          )} */}

          {/* Reviews List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.length === 0 ? (
              <p className="col-span-full text-gray-500 text-center py-8">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              reviews.map((review) => (
                <div
                  key={review._id}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-gray-900">{review.user}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                            size={14}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700">{review.comment}</p>

                  <p className="text-gray-500 text-sm mt-3">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
