import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button className="flex items-center text-gray-600 hover:text-emerald-600 mb-8">
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606744888344-493238951221"
              alt="Product"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606744888344-493238951221"
                  alt={`Product view ${i}`}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Traditional Handwoven Textile</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">(24 reviews)</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-6">₹4,999</p>
          
          <div className="prose prose-sm text-gray-600 mb-6">
            <p>
              Handcrafted by skilled artisans using traditional techniques passed down through generations.
              Each piece is unique and tells a story of cultural heritage and sustainable craftsmanship.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Truck size={20} className="mr-2" />
              <span>Free shipping on orders above ₹2,999</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Shield size={20} className="mr-2" />
              <span>Quality assured by expert artisans</span>
            </div>
          </div>

          <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors mb-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;