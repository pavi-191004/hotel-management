import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="page-container about-us-container">
      <h1>Our Story</h1>
      
      <div className="about-content">
        <p className="about-intro">
          Welcome to FoodHub Hotel, born from a simple idea: that food shouldn't just be eaten, it should be experienced. Our journey began with a passion for bringing chef-crafted dishes, seasonal specials, and crowd-pleasing favorites directly from our kitchen to your table.
        </p>
        
        <h2>Fresh, Crafted, and Memorable</h2>
        
        <p>
          This is our promise. We are committed to using only the finest <strong>local ingredients</strong>, sourced daily to ensure every dish is at its peak flavor. Our culinary team is dedicated to exploring new tastes while perfecting timeless classics. We believe in crafting memorable moments, whether you're joining us for a family dinner, a business lunch, or ordering a delicious meal to enjoy at home.
        </p>
        
        <h2>More Than Just a Meal</h2>
        
        <p>
          We're more than just a kitchen; we're a part of the community. We strive to create a welcoming atmosphere where every guest feels like part of our family. Thank you for letting us share our passion with you.
        </p>
        
        <div className="about-cta-group">
          <p>We invite you to explore our creations.</p>
          
          
          <Link to="/Kitchen" className="btn btn-secondary">
            View Our Menu
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;