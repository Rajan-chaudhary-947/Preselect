import Review from "../models/review.model.js";
import Product from "../models/product.model.js";


// GET REVIEWS
export const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({
      productId: req.params.id
    });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



