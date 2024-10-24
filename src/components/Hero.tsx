import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Authentic Indian Craftsmanship
          </h1>
          <p className="text-xl text-white mb-8">
            Supporting local artisans while bringing sustainable luxury to your doorstep
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors transform hover:scale-105">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Hero);