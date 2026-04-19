import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema(
  {
    size: { type: String, required: true }, // e.g. "50ml"
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    description: {
      type: String,
      required: true
    },

    shortDescription: {
      type: String,
      maxlength: 120
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    originalPrice: {
      type: Number
    },

    images: {
      type: [String],
      required: true
    },

    sizes: [sizeSchema],

    brand: {
      type: String,
      default: "Preselect"
    },

    category: {
      type: String,
      enum: ["men", "women", "unisex"]
    },

    isBestseller: {
      type: Boolean,
      default: false,
      index: true
    },

    isNewArrival: {
      type: Boolean,
      default: false,
      index: true
    },

    tags: [String],

    rating: {
      type: Number,
      default: 0
    },

    reviewCount: {
      type: Number,
      default: 0
    },

    stock: {
      type: Number,
      default: 0
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
