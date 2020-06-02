import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';

function HomePage() {
    return (
      <div>
      <Navigation />
      <div className="container">
      <Slider />
      <ProductsGrid />
      </div>
      <Footer />
      </div>
    );
  }
  
  export default HomePage;