import Product from "../models/product.model.js";

// GET ALL PRODUCTS 
export const getProducts = async (req, res) => {
  try {
    const { bestseller, newArrival } = req.query;

    let filter = {};

    if (bestseller === "true") {
      filter.isBestseller = true;
    }

    if (newArrival === "true") {
      filter.isNewArrival = true;
    }

    const products = await Product.find(filter);

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const searchProducts = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) return res.json([]);

    const products = await Product.find({
      $or: [
    { name: { $regex: query, $options: "i" } },
    { brand: { $regex: query, $options: "i" } }
  ]
    })
      .select("name slug images price")
      .limit(5);

    res.json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const {id}= req.params;
    const product = await Product.findById(id);
    if(!product){
      return res.status(404).json({message: "Product not found!"});
    }
    res.status(200).json(product);
    
  } catch (e){
    res.status(500).json({message: e.message});
  }
};

