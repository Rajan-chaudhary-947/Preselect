import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import {axiosInstance} from "../services/axios.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SEARCH STATE
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const debounceRef = useRef(null);
  const navigate = useNavigate();

  // DEBOUNCE SEARCH
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await axiosInstance.get(`/api/products/search?q=${query}`);
        setResults(res.data);
        setActiveIndex(-1);
      } catch (err) {
        console.error(err);
      }
    }, 300);

  }, [query]);

  // KEYBOARD NAVIGATION
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      navigate(`/product/${results[activeIndex].slug}`);
      setQuery("");
      setResults([]);
    }
  };

  // HIGHLIGHT TEXT
  const highlightText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="text-purple-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <nav className="relative group sticky top-0 z-50">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-white origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out group-hover:shadow-md"></div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">

        <div className="flex justify-between items-center h-16">

          {/* LOGO + SEARCH */}
          <div className="flex items-center gap-4">

            <Link
              to="/"
              className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-wide text-gray-600 hover:text-gray-700 hover:scale-103 transition duration-300"
            >
              <span className="font-serif">Preselect</span>
            </Link>

            {/* DESKTOP SEARCH */}
            <div className="hidden md:flex relative opacity-0 group-hover:opacity-100 transition duration-300">

              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5">
                <FaSearch className="text-gray-500 mr-2 text-sm" />

                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Search perfumes..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent outline-none text-sm w-40 placeholder-gray-400"
                />
              </div>

              {/* DROPDOWN */}
              {results.length > 0 && (
                <div className="absolute top-full mt-2 w-72 bg-white shadow-xl rounded-xl overflow-hidden z-50">
                  {results.map((item, index) => (
                    <div
                      key={item._id}
                      onClick={() => {
                        navigate(`/product/${item._id}`);
                        setQuery("");
                        setResults([]);
                      }}
                      className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${
                        index === activeIndex
                          ? "bg-purple-100"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <img
                        src={item.images[0]}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <span className="text-sm text-gray-700">
                        {highlightText(item.name, query)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Collections", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative opacity-0 text-sm font-semibold tracking-wide group-hover:opacity-100 group-hover:text-gray-700 hover:scale-102 transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* MOBILE ICONS */}
          <div className="flex items-center gap-3 md:hidden opacity-0 group-hover:opacity-100 transition duration-300">

            {!showMobileSearch && (
              <>
                <button
                  onClick={() => setShowMobileSearch(true)}
                  className="text-gray-600"
                >
                  <FaSearch size={18} />
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600"
                >
                  {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
              </>
            )}

          </div>

        </div>

        {/* MOBILE SEARCH OVERLAY */}
        {showMobileSearch && (
          <div className="md:hidden absolute top-0 left-0 w-full h-16 bg-white flex items-center px-4 z-50 shadow-md">

            <button
              onClick={() => {
                setShowMobileSearch(false);
                setQuery("");
                setResults([]);
              }}
              className="mr-3 text-gray-600"
            >
              <FaTimes size={20} />
            </button>

            <div className="flex items-center w-full bg-gray-100 rounded-full px-3 py-2">
              <FaSearch className="text-gray-500 mr-2" />

              <input
                autoFocus
                type="text"
                placeholder="Search perfumes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            {/* DROPDOWN */}
            {results.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg">
                {results.map((item, index) => (
                  <div
                    key={item._id}
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                      setShowMobileSearch(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 border-b ${
                      index === activeIndex
                        ? "bg-purple-100"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <img
                      src={item.images[0]}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="text-sm">
                      {highlightText(item.name, query)}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute right-0 top-full w-[calc(100%-10rem)] transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md shadow-xl mx-4 mt-2 rounded-2xl py-4 flex flex-col items-center gap-2">
            {["Home", "Collections", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 text-gray-700 hover:text-purple-600 rounded-lg font-medium transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
