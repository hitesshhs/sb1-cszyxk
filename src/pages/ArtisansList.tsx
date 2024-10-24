import React from 'react';
import { MapPin } from 'lucide-react';

const ArtisansList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Artisan Community</h1>
        <p className="text-lg text-gray-600">
          Meet the skilled craftspeople behind our unique products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((artisan) => (
          <div key={artisan} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1604684768394-52a862c2955a"
                alt="Artisan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-emerald-600 font-medium mb-2">Traditional Weaving</p>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>Rajasthan, India</span>
              </div>
              <p className="text-gray-600 mb-4">
                Creating handwoven textiles using age-old techniques passed down through generations.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                View Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisansList;