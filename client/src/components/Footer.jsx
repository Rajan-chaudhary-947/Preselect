import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="bg-black border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <h3 className="text-xl font-semibold tracking-wide mb-4">Preselect</h3>
              <p className="text-gray-400 text-sm">
                Crafted luxury fragrances designed to define your identity.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-300">
                Explore
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/collections" className="hover:text-white transition">Collections</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-300">
                Support
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition">Shipping</Link></li>
                <li><Link to="/returns" className="hover:text-white transition">Returns</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-300">
                Contact
              </h4>
              <p className="text-gray-400 text-sm">info@preselect.com</p>
              <p className="text-gray-400 text-sm">+91 0000000000</p>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
            © 2026 Preselect. All rights reserved.
          </div>

        </footer>
    );
}

export default Footer;