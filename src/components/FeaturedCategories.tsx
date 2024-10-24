import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: 1,
    name: 'Traditional Crafts',
    image: 'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80',
    description: 'Exquisite handcrafted pieces with cultural significance'
  },
  {
    id: 2,
    name: 'Sustainable Fashion',
    image: 'https://images.unsplash.com/photo-1569385210018-127685230669?auto=format&fit=crop&q=80',
    description: 'Eco-friendly clothing and accessories'
  },
  {
    id: 3,
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    description: 'Artisanal pieces for your living space'
  }
];

const FeaturedCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Categories</h2>
          <p className="text-lg text-gray-600">Discover our curated collection of authentic Indian craftsmanship</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;