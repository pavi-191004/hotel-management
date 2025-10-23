import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (

    <div className="hero-section"> 
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="badge">Fresh, Fast, Memorable</span>
        <h1>Delicious food delivered from our kitchen to your table</h1>
        <p>
          Explore chef-crafted dishes, seasonal specials, and crowd favorites. 
          Simple ordering, real-time status, and delightful flavors just a click away.
        </p>
        <div className="button-group">
          
          
          <Link to="/Kitchen" className="btn btn-secondary">
            View Menu
          </Link>
        </div>
      </div>

      <div className="hero-footer">
        <span>⭐ 4.8 average rating</span>
        <span>•</span>
        <span>Fast delivery under 30 minutes</span>
        <span>•</span>
        <span>Local ingredients, daily</span>
      </div>
    </div>
  );
}

export default Home;