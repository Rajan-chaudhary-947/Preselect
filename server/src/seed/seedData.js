// import { config } from "dotenv";
// import { connectDB } from "../lib/db.js";
// import Product from "../models/product.model.js";

// config();


// const products =
//   [
//     {
//       name: "Midnight Oud Elixir",
//       slug: "midnight-oud-elixir",
//       description: "A deep, luxurious oud fragrance blended with smoky woods and oriental spices for a bold evening presence.",
//       price: 3499,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776502202/AmethystBadeeAlOudbottleangled_owzgqi.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502203/Royal_Orris_Side_u2gbxf.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502204/Oud_Noir_Side_uncoqk.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502204/Vanilla_Oud_Side_qu5qaa.jpg"
//       ],
//       sizes: ["30ml", "50ml", "100ml"],
//       brand: "Preselect",
//       category: "bestseller",
//       rating: 4.7,
//       reviewCount: 124,
//       isFeatured: true,
//       isActive: true
//     },
//     {
//       name: "Velvet Rose Essence",
//       slug: "velvet-rose-essence",
//       description: "Soft floral notes of rose layered with musk and amber, delivering timeless elegance.",
//       price: 2999,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776502564/41zxn-29toL._SY300_SX300_QL70_FMwebp__nflq3o.webp",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502588/61-80NKo9WL._SY355__hy7tga.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502609/61NYub4heVL._SY355__vrl1nq.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502627/61kbn0LKSbL._SY355__xsxrzm.jpg"
//       ],
//       sizes: ["30ml", "50ml", "100ml"],
//       brand: "Preselect",
//       category: "bestseller",
//       rating: 4.5,
//       reviewCount: 98,
//       isFeatured: true,
//       isActive: true
//     },
//     {
//       name: "Royal Amber Intense",
//       slug: "royal-amber-intense",
//       description: "Warm amber with hints of vanilla and spice, perfect for long-lasting richness.",
//       price: 3299,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776502730/51ngDePiY-L._SY355__sxrgdg.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502743/61wDLUp1ytL._SY355__rxsvzb.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502768/81wO78DfzML._SY355__ecgdmi.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502769/41XLsUtQNlL._SY450__wfpfl9.jpg"
//       ],
//       sizes: ["50ml", "100ml"],
//       brand: "Preselect",
//       category: "bestseller",
//       rating: 4.6,
//       reviewCount: 156,
//       isFeatured: true,
//       isActive: true
//     },
//     {
//       name: "Ocean Breeze Fresh",
//       slug: "ocean-breeze-fresh",
//       description: "A refreshing aquatic scent with citrus and marine accords for daily wear.",
//       price: 2499,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776502867/312oSdZZN7L._SY300_SX300_QL70_FMwebp__fu38ii.webp",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502882/51BbAAwbX1L._SY450__zwicnf.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502897/51B6K3WSadL._SX355__jsvliw.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502914/71jy_ysgRYL._SY355__lgdb3y.jpg"
//       ],
//       sizes: ["30ml", "50ml", "100ml"],
//       brand: "Preselect",
//       category: "bestseller",
//       rating: 4.4,
//       reviewCount: 87,
//       isFeatured: false,
//       isActive: true
//     },

//     {
//       name: "Golden Saffron Luxe",
//       slug: "golden-saffron-luxe",
//       description: "Exotic saffron blended with warm woods and leather for a bold signature scent.",
//       price: 3799,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776503045/51W8WqqNQuL._SY355__sc7ymg.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503065/61pRtRnNHPL._SY355__tjnlpw.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503057/71VOqeCHXvL._SY355__gdbitg.jpg"
//       ],
//       sizes: ["50ml", "100ml"],
//       brand: "Preselect",
//       category: "new arrival",
//       rating: 4.8,
//       reviewCount: 12,
//       isFeatured: true,
//       isActive: true
//     },
//     {
//       name: "White Musk Serenity",
//       slug: "white-musk-serenity",
//       description: "Clean and calming white musk fragrance with subtle floral undertones.",
//       price: 2699,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776503171/51thLtt2f3L._SY355__nrsyrz.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503182/51GSHC_qZOL._SY355__tu4mcp.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503196/61wlzjgJpBL._SY355__x8sgow.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503202/71hRneh8OBL._SY355__cjuxzm.jpg"
//       ],
//       sizes: ["30ml", "50ml"],
//       brand: "Preselect",
//       category: "new arrival",
//       rating: 4.3,
//       reviewCount: 9,
//       isFeatured: false,
//       isActive: true
//     },
//     {
//       name: "Citrus Noir Fusion",
//       slug: "citrus-noir-fusion",
//       description: "A modern blend of citrus zest and dark woody notes for a bold contrast.",
//       price: 2899,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776503338/50-citrus-trails-extrait-de-parfum-fusionbyrizwan-men-women-original-imahjzgfd3sjkfkp_q997ya.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503349/50-citrus-trails-extrait-de-parfum-fusionbyrizwan-men-women-original-imahjzgffdak25bt_v2cd13.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503382/50-citrus-trails-extrait-de-parfum-fusionbyrizwan-men-women-original-imahjzgfyhzrcfgt_jwfot8.jpg"
//       ],
//       sizes: ["30ml", "50ml", "100ml"],
//       brand: "Preselect",
//       category: "new arrival",
//       rating: 4.5,
//       reviewCount: 18,
//       isFeatured: false,
//       isActive: true
//     },
//     {
//       name: "Lavender Mist Calm",
//       slug: "lavender-mist-calm",
//       description: "Relaxing lavender fragrance enhanced with soft vanilla and herbal tones.",
//       price: 2599,
//       images: ["https://res.cloudinary.com/duv61nqyl/image/upload/v1776503496/61U1tVkA13L._SY355__iluwq6.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503509/71lMk-BdwOL._SY355__exisxc.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503524/71XTIYgWI6L._SY355__zwoi5p.jpg",
//         "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503533/71W5WVQ7OpL._SY355__jbxxgi.jpg"
//       ],
//       sizes: ["30ml", "50ml"],
//       brand: "Preselect",
//       category: "new arrival",
//       rating: 4.2,
//       reviewCount: 7,
//       isFeatured: false,
//       isActive: true
//     }
//   ];

// const seedData = async () => {
//   try {
//     await connectDB();
//     await Product.insertMany(products);
//     console.log("Data seeded successfully");
//   } catch (error) {
//     console.error("Error seeding data:", error);
//   }
// };

// seedData();



import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import Product from "../models/product.model.js";
import Review from "../models/review.model.js";

config();

const makeSizes = (basePrice, sizesArr) => {
  return sizesArr.map((s, i) => ({
    size: s,
    price: basePrice + i * 500,
    stock: 20
  }));
};

const products = [
  {
    name: "Midnight Oud Elixir",
    slug: "midnight-oud-elixir",
    description: "A deep, luxurious oud fragrance blended with smoky woods and oriental spices for a bold evening presence.",
    price: 3499,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502202/AmethystBadeeAlOudbottleangled_owzgqi.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502203/Royal_Orris_Side_u2gbxf.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502204/Oud_Noir_Side_uncoqk.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502204/Vanilla_Oud_Side_qu5qaa.jpg"
    ],
    sizes: makeSizes(3499, ["30ml", "50ml", "100ml"]),
    brand: "Preselect",
    category: "unisex",
    rating: 4.7,
    reviewCount: 124,
    isBestseller: true,
    featured: true
  },
  {
    name: "Velvet Rose Essence",
    slug: "velvet-rose-essence",
    description: "Soft floral notes of rose layered with musk and amber, delivering timeless elegance.",
    price: 2999,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502564/41zxn-29toL._SY300_SX300_QL70_FMwebp__nflq3o.webp",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502588/61-80NKo9WL._SY355__hy7tga.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502609/61NYub4heVL._SY355__vrl1nq.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502627/61kbn0LKSbL._SY355__xsxrzm.jpg"
    ],
    sizes: makeSizes(2999, ["30ml", "50ml", "100ml"]),
    brand: "Preselect",
    category: "women",
    rating: 4.5,
    reviewCount: 98,
    isBestseller: true,
    featured: true
  },
  {
    name: "Royal Amber Intense",
    slug: "royal-amber-intense",
    description: "Warm amber with hints of vanilla and spice, perfect for long-lasting richness.",
    price: 3299,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502730/51ngDePiY-L._SY355__sxrgdg.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502743/61wDLUp1ytL._SY355__rxsvzb.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502768/81wO78DfzML._SY355__ecgdmi.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502769/41XLsUtQNlL._SY450__wfpfl9.jpg"
    ],
    sizes: makeSizes(3299, ["50ml", "100ml"]),
    brand: "Preselect",
    category: "unisex",
    rating: 4.6,
    reviewCount: 156,
    isBestseller: true,
    featured: true
  },
  {
    name: "Ocean Breeze Fresh",
    slug: "ocean-breeze-fresh",
    description: "A refreshing aquatic scent with citrus and marine accords for daily wear.",
    price: 2499,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502867/312oSdZZN7L._SY300_SX300_QL70_FMwebp__fu38ii.webp",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502882/51BbAAwbX1L._SY450__zwicnf.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502897/51B6K3WSadL._SX355__jsvliw.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776502914/71jy_ysgRYL._SY355__lgdb3y.jpg"
    ],
    sizes: makeSizes(2499, ["30ml", "50ml", "100ml"]),
    brand: "Preselect",
    category: "men",
    rating: 4.4,
    reviewCount: 87,
    isBestseller: true
  },
  {
    name: "Golden Saffron Luxe",
    slug: "golden-saffron-luxe",
    description: "Exotic saffron blended with warm woods and leather for a bold signature scent.",
    price: 3799,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503045/51W8WqqNQuL._SY355__sc7ymg.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503065/61pRtRnNHPL._SY355__tjnlpw.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503057/71VOqeCHXvL._SY355__gdbitg.jpg"
    ],
    sizes: makeSizes(3799, ["50ml", "100ml"]),
    brand: "Preselect",
    category: "unisex",
    rating: 4.8,
    reviewCount: 12,
    isNewArrival: true,
    featured: true
  },
  {
    name: "White Musk Serenity",
    slug: "white-musk-serenity",
    description: "Clean and calming white musk fragrance with subtle floral undertones.",
    price: 2699,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503171/51thLtt2f3L._SY355__nrsyrz.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503182/51GSHC_qZOL._SY355__tu4mcp.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503196/61wlzjgJpBL._SY355__x8sgow.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503202/71hRneh8OBL._SY355__cjuxzm.jpg"
    ],
    sizes: makeSizes(2699, ["30ml", "50ml"]),
    brand: "Preselect",
    category: "women",
    rating: 4.3,
    reviewCount: 9,
    isNewArrival: true
  },
  {
    name: "Citrus Noir Fusion",
    slug: "citrus-noir-fusion",
    description: "A modern blend of citrus zest and dark woody notes for a bold contrast.",
    price: 2899,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503338/50-citrus-trails-extrait-de-parfum-fusionbyrizwan-men-women-original-imahjzgfd3sjkfkp_q997ya.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503349/50-citrus-trails-extrait-de-parfum-fusionbyrizwan-men-women-original-imahjzgffdak25bt_v2cd13.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503382/50-citrus-trails-extrait-de-parfum-fusionbyrizwan-men-women-original-imahjzgfyhzrcfgt_jwfot8.jpg"
    ],
    sizes: makeSizes(2899, ["30ml", "50ml", "100ml"]),
    brand: "Preselect",
    category: "men",
    rating: 4.5,
    reviewCount: 18,
    isNewArrival: true
  },
  {
    name: "Lavender Mist Calm",
    slug: "lavender-mist-calm",
    description: "Relaxing lavender fragrance enhanced with soft vanilla and herbal tones.",
    price: 2599,
    images: [
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503496/61U1tVkA13L._SY355__iluwq6.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503509/71lMk-BdwOL._SY355__exisxc.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503524/71XTIYgWI6L._SY355__zwoi5p.jpg",
      "https://res.cloudinary.com/duv61nqyl/image/upload/v1776503533/71W5WVQ7OpL._SY355__jbxxgi.jpg"
    ],
    sizes: makeSizes(2599, ["30ml", "50ml"]),
    brand: "Preselect",
    category: "unisex",
    rating: 4.2,
    reviewCount: 7,
    isNewArrival: true
  }
];


const seedData = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    await Review.deleteMany();

    const createdProducts = await Product.insertMany(products);

    const reviews = [
      // Midnight Oud Elixir
      { productId: createdProducts[0]._id, user: "Aman", rating: 5, comment: "Outstanding fragrance, lasts all night." },
      { productId: createdProducts[0]._id, user: "Rohit", rating: 4, comment: "Strong oud, premium feel." },
      { productId: createdProducts[0]._id, user: "Faizan", rating: 5, comment: "Perfect for evening occasions." },
      { productId: createdProducts[0]._id, user: "Sahil", rating: 4, comment: "Great projection and depth." },
      { productId: createdProducts[0]._id, user: "Karan", rating: 5, comment: "One of the best oud scents I've used." },

      // Velvet Rose Essence
      { productId: createdProducts[1]._id, user: "Neha", rating: 5, comment: "Elegant and smooth floral scent." },
      { productId: createdProducts[1]._id, user: "Pooja", rating: 4, comment: "Soft and very feminine." },
      { productId: createdProducts[1]._id, user: "Riya", rating: 5, comment: "Perfect daily perfume." },
      { productId: createdProducts[1]._id, user: "Ankita", rating: 3, comment: "Nice but could be stronger." },
      { productId: createdProducts[1]._id, user: "Megha", rating: 4, comment: "Long lasting and pleasant." },

      // Royal Amber Intense
      { productId: createdProducts[2]._id, user: "Vikram", rating: 5, comment: "Warm and luxurious scent." },
      { productId: createdProducts[2]._id, user: "Rahul", rating: 4, comment: "Great winter fragrance." },
      { productId: createdProducts[2]._id, user: "Aditya", rating: 5, comment: "Amber note is amazing." },
      { productId: createdProducts[2]._id, user: "Nitin", rating: 4, comment: "Very rich and smooth." },
      { productId: createdProducts[2]._id, user: "Sumit", rating: 5, comment: "Perfect for special occasions." },

      // Ocean Breeze Fresh
      { productId: createdProducts[3]._id, user: "Vikas", rating: 4, comment: "Fresh and clean fragrance." },
      { productId: createdProducts[3]._id, user: "Arjun", rating: 5, comment: "Best for summer use." },
      { productId: createdProducts[3]._id, user: "Kunal", rating: 4, comment: "Nice citrus opening." },
      { productId: createdProducts[3]._id, user: "Deepak", rating: 3, comment: "Good but fades quickly." },
      { productId: createdProducts[3]._id, user: "Harsh", rating: 4, comment: "Great for daily wear." },

      // Golden Saffron Luxe
      { productId: createdProducts[4]._id, user: "Simran", rating: 5, comment: "Luxury feel, saffron is amazing." },
      { productId: createdProducts[4]._id, user: "Kabir", rating: 4, comment: "Unique and bold fragrance." },
      { productId: createdProducts[4]._id, user: "Ishita", rating: 5, comment: "Smells expensive and classy." },
      { productId: createdProducts[4]._id, user: "Manav", rating: 4, comment: "Perfect for events." },
      { productId: createdProducts[4]._id, user: "Rohan", rating: 5, comment: "Signature scent material." },

      // White Musk Serenity
      { productId: createdProducts[5]._id, user: "Pooja", rating: 4, comment: "Very soft and calming." },
      { productId: createdProducts[5]._id, user: "Sneha", rating: 5, comment: "Clean and elegant fragrance." },
      { productId: createdProducts[5]._id, user: "Ritu", rating: 4, comment: "Perfect for daily use." },
      { productId: createdProducts[5]._id, user: "Anjali", rating: 3, comment: "Nice but subtle." },
      { productId: createdProducts[5]._id, user: "Divya", rating: 4, comment: "Light and refreshing." },

      // Citrus Noir Fusion
      { productId: createdProducts[6]._id, user: "Arjun", rating: 5, comment: "Modern and bold scent." },
      { productId: createdProducts[6]._id, user: "Varun", rating: 4, comment: "Nice mix of citrus and wood." },
      { productId: createdProducts[6]._id, user: "Yash", rating: 5, comment: "Very unique fragrance." },
      { productId: createdProducts[6]._id, user: "Dev", rating: 4, comment: "Great everyday perfume." },
      { productId: createdProducts[6]._id, user: "Aakash", rating: 3, comment: "Good but not long lasting." },

      // Lavender Mist Calm
      { productId: createdProducts[7]._id, user: "Riya", rating: 4, comment: "Very relaxing scent." },
      { productId: createdProducts[7]._id, user: "Kritika", rating: 5, comment: "Perfect for night use." },
      { productId: createdProducts[7]._id, user: "Sanya", rating: 4, comment: "Soothing and calming." },
      { productId: createdProducts[7]._id, user: "Tanya", rating: 3, comment: "Nice but mild." },
      { productId: createdProducts[7]._id, user: "Nisha", rating: 4, comment: "Lovely lavender fragrance." }
    ];


    await Review.insertMany(reviews);

    // Update rating & reviewCount
    for (const product of createdProducts) {
      const productReviews = reviews.filter(
        (r) => r.productId.toString() === product._id.toString()
      );

      if (productReviews.length > 0) {
        const avg =
          productReviews.reduce((acc, r) => acc + r.rating, 0) /
          productReviews.length;

        await Product.findByIdAndUpdate(product._id, {
          rating: avg,
          reviewCount: productReviews.length
        });
      }
    }

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();

