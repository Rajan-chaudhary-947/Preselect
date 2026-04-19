import express from "express";
import { getProducts, getProductById, searchProducts} from "../controllers/product.controller.js";
import { getReviewsByProduct} from "../controllers/review.controller.js";


const router = express.Router();


// Product routes
router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/:id", getProductById);


// Review routes
router.get("/:id/reviews", getReviewsByProduct);

export default router;
