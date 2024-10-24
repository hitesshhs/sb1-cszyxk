import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">BOOM</h1>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/artisans" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Artisans
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Categories
            </Link>
            <Link to="/sustainability" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Sustainability
            </Link>
            <Link to="/stories" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Stories
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-gray-600 hover:text-emerald-600"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/artisans"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Artisans
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Categories
            </Link>
            <Link
              to="/sustainability"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Sustainability
            </Link>
            <Link
              to="/stories"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              Stories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;