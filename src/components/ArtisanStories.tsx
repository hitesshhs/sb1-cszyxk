import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stories = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    craft: 'Traditional Weaving',
    image: 'https://images.unsplash.com/photo-1604684768394-52a862c2955a?auto=format&fit=crop&q=80',
    story: 'Creating handwoven textiles using age-old techniques passed down through generations.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    craft: 'Pottery',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
    story: 'Bringing contemporary designs to traditional pottery making.'
  }
];

const ArtisanStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Artisans</h2>
          <p className="text-lg text-gray-600">Discover the stories behind our handcrafted products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:h-full md:w-48 object-cover"
                    src={story.image}
                    alt={story.name}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-emerald-600 font-semibold">
                    {story.craft}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{story.name}</h3>
                  <p className="mt-3 text-gray-600">{story.story}</p>
                  <button className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium">
                    Read full story →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisanStories;