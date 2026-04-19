import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { useProductStore } from "../store/useProductStore.js";



const HomePage = () => {


  const { products, loading, error, fetchProducts } = useProductStore();


  const [tab, setTab] = useState("bestseller");

  useEffect(() => {
    let query = "";

    if (tab === "bestseller") {
      query = "?bestseller=true";
    } else if (tab === "new") {
      query = "?newArrival=true";
    }

    fetchProducts(query);

  }, [tab]);


  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">

      <Hero />

      {/* TAB MENU */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        <div className="flex justify-center items-center gap-4 md:gap-6">

          {/* BESTSELLERS */}
          <button
            onClick={() => setTab("bestseller")}
            className="group relative"
          >
            <h2
              className={`text-md md:text-2xl tracking-wide transition ${tab === "bestseller"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              BESTSELLERS
            </h2>

            {/* underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${tab === "bestseller" ? "w-0" : "w-0 group-hover:w-full"
                }`}
            />
          </button>

          {/* SEPARATOR */}
          <span className="text-gray-600 text-xl md:text-2xl">|</span>

          {/* NEW ARRIVALS */}
          <button
            onClick={() => setTab("new")}
            className="group relative"
          >
            <h2
              className={`text-md md:text-2xl tracking-wide transition ${tab === "new"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              NEW ARRIVALS
            </h2>

            {/* underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${tab === "new" ? "w-0" : "w-0 group-hover:w-full"
                }`}
            />
          </button>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">

        {loading ? (
          <div className="flex justify-center items-center h-72">
            <FaSpinner className="text-4xl text-white animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : !products || products.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No products found
          </div>
        ) : (
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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

export default HomePage;
