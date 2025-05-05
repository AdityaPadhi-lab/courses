import React from 'react';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import CategoryList from '../components/CategoryList';
import BundleOffers from '../components/BundleOffers';
import Testimonials from '../components/Testimonials';
import PromoSection from '../components/PromoSection';
import TelegramCTA from '../components/TelegramCTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <CategoryList />
      <PromoSection />
      <BundleOffers />
      <Testimonials />
      <TelegramCTA />
    </div>
  );
};

export default HomePage;