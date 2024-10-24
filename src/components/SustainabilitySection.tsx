import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'All our products are made using sustainable and locally sourced materials'
  },
  {
    icon: Recycle,
    title: 'Zero Waste Packaging',
    description: 'We use minimal, recyclable packaging to reduce environmental impact'
  },
  {
    icon: Heart,
    title: 'Fair Trade Practices',
    description: 'Supporting artisans with fair wages and ethical working conditions'
  }
];

const SustainabilitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-emerald-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Sustainability</h2>
          <p className="text-lg text-gray-600">Making a positive impact on our environment and communities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 text-center shadow-lg"
            >
              <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;