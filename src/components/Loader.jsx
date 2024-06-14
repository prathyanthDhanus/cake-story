import React from 'react';
import '../styles/loader.css'; 

const Spinner = () => {
    
  return (
    
      <div className="loader">
        <p>Cake Story</p>
        <div className="words">
          <span className="word">Cakes</span>
          <span className="word">Pasteries</span>
          <span className="word">Juices</span>
          <span className="word">Shakes</span>
          <span className="word">Desserts</span>
        </div>
      </div>
   
  );
}

export default Spinner;
