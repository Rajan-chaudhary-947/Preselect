import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CollectionsPage from "./pages/CollectionsPage.jsx";
import PreLoader from "./components/PreLoader.jsx";
import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4800); // adjust timing

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PreLoader />;
  
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
