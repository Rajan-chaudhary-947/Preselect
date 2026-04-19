import express from "express";
import { getProducts, getProductById, searchProducts} from "../controllers/product.controller.js";
import { getReviewsByProduct} from "../controllers/review.controller.js";


const router = express.Router();


// Product routes
router.get("/", getProducts);
router.get("/search", searchProducts);



// Review routes
router.get("/:id/reviews", getReviewsByProduct);

router.get("/:id", getProductById);

export default router;
