import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/useProductStore";
import { motion } from "framer-motion";
import CollectionSkeleton from "../components/skeletons/CollectionSkeleton.jsx";

const CollectionsPage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts(); // no query = all products
  }, []);

  if (loading) return <CollectionSkeleton />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Our Collection
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore all premium fragrances crafted for every personality.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        {products.length === 0 ? (
          <p className="text-center text-gray-400">No products found</p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </motion.div>
        )}
      </section>

    </main>
  );
};

export default CollectionsPage;
