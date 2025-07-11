import React from 'react';

const RestaurantCard = ({ resData }) => {
  const {
    title,
    images,
    brand,
    price,
    rating,
  } = resData;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
        padding: '15px',
        borderRadius: '8px',
        margin: '10px',
        width: '250px',
      }}
    >
      <img
        className="res-logo"
        src={images[0]} // images is an array
        alt={title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>₹{price}</p>
      <p>⭐ {rating}</p>
    </div>
  );
};

export default RestaurantCard;
