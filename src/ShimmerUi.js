// ShimmerUi.js
import React from 'react';


const ShimmerUi = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default ShimmerUi;
