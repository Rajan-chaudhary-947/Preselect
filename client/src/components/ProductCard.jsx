import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-200 h-68 sm:h-72">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Brand */}
        <p className="text-purple-600 text-sm font-semibold mb-1 uppercase tracking-wide">
          {product.brand}
        </p>

        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 transition">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description.slice(0, 60)}...
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <FaStar className="text-yellow-400" />
          <span className="text-gray-700 font-semibold">{product.rating || "4.5"}</span>
          <span className="text-gray-500 text-sm">({product.reviews?.length || 0} reviews)</span>
        </div>

        {/* Footer with Price and Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <span className="text-2xl font-bold text-purple-600">₹{product.price}</span>
          <button 
            onClick={(e) => {e.stopPropagation();}}
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition duration-200 transform hover:scale-110"
          >
            <FaShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
