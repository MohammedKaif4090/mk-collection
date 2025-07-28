import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">M.K.Clothes</h2>
          <p className="text-sm text-gray-400">Quality fashion for every occasion.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/returns" className="hover:text-white">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-300">Email: <a href="mailto:support@mkclothes.com" className="hover:text-white">support@mkclothes.com</a></p>
          <p className="text-sm text-gray-300 mt-1">Phone: +91 98765 XXXXX</p>
          <p className="text-sm text-gray-300 mt-1">Address: Fatehpur Shekhawati, Rajasthan</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} M.K.Clothes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
