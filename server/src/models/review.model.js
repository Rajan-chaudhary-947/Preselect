import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      trim: true
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },

    comment: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

// Prevent duplicate reviews by same user on same product
reviewSchema.index({ productId: 1, user: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);
