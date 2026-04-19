import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Container */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh]">

        {/* LEFT TEXT */}
        <div className="w-1/2 z-10 pl-5 sm:pl-8 lg:pl-18 pr-2 sm:pr-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-1xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-5"
          >
            Luxury That Speaks <br /> Without Words
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="text-gray-300 text-xs sm:text-sm md:text-lg mb-4 sm:mb-8 max-w-xs sm:max-w-md"
          >
            Discover signature fragrances crafted for timeless elegance.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium"
            onClick={() => navigate("/collections")}
          >
            Explore
          </motion.button>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative w-1/2 flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-[150px] sm:w-[220px] md:w-[300px] h-[150px] sm:h-[220px] md:h-[300px] bg-purple-500/20 blur-3xl rounded-full"></div>

          {/* SMOKE */}
          <motion.div
            className="absolute top-[10%] w-[350px] sm:w-[450px] md:w-[600px] h-[120px] sm:h-[160px] md:h-[200px] bg-gradient-to-r from-white/50 via-white/20 to-transparent blur-3xl rounded-full"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: -350, opacity: [0, 1, 0] }}
            transition={{ delay: 1, duration: 1.8 }}
          />

          {/* PERFUME */}
          <motion.img
            src="/luxury.png"
            alt="Luxury perfume bottle"
            className="w-[110px] sm:w-[140px] md:w-[220px] lg:w-[260px] relative pl-4 z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            initial={{ y: 200, opacity: 0, rotate: -8 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2 }}
          />

        </div>

      </div>

      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"></div>

    </section>
  );
}

export default Hero;
