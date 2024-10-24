import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About BOOM</h3>
            <p className="text-sm">
              Supporting local artisans and promoting sustainable craftsmanship across India.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-white">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Traditional Crafts</a></li>
              <li><a href="#" className="text-sm hover:text-white">Sustainable Fashion</a></li>
              <li><a href="#" className="text-sm hover:text-white">Home Decor</a></li>
              <li><a href="#" className="text-sm hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 BOOM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;