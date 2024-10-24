import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center py-4 border-b last:border-b-0">
                <img
                  src="https://images.unsplash.com/photo-1606744888344-493238951221"
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Traditional Handwoven Textile</h3>
                  <p className="text-gray-600">Color: Blue</p>
                  <div className="flex items-center mt-2">
                    <button className="p-1 text-gray-600 hover:text-emerald-600">
                      <Minus size={16} />
                    </button>
                    <span className="mx-2 w-8 text-center">1</span>
                    <button className="p-1 text-gray-600 hover:text-emerald-600">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">₹4,999</p>
                  <button className="text-gray-400 hover:text-red-600 mt-2">
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹9,998</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>₹1,200</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-medium text-gray-900">
                <span>Total</span>
                <span>₹11,198</span>
              </div>
            </div>
            <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors mt-6">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;