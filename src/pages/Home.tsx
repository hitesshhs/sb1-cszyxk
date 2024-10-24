import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import ArtisanStories from '../components/ArtisanStories';
import SustainabilitySection from '../components/SustainabilitySection';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <ArtisanStories />
      <SustainabilitySection />
    </div>
  );
};

export default Home;