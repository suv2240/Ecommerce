import React, { useState, useEffect } from 'react';
import RestaurantCard from './ResturentCard';
import ShimmerUi from './ShimmerUi';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText]=useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const api = await fetch('https://dummyjson.com/products');
        const data = await api.json();
        console.log(data);

        setListOfRestaurants(data.products);
        setFilteredRestaurant(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);
 
  return listOfRestaurants.length === 0 ? (
    <ShimmerUi/>
  ) : (<div>
    <div>
      <div>
    <button onClick={() => setFilteredRestaurant(listOfRestaurants)} className='btn' >All</button>
    {["beauty", "fragrances", "furniture", "groceries"].map((cat) => (
      <button key={cat} 
      className='btn' 
      onClick={()=>{const filtered=listOfRestaurants.filter((item)=>
      (
        item.category===cat
      )
    );
     setFilteredRestaurant(filtered)
  }}
      >{cat}</button>
    ))}
    </div>
    <div className="search-bar">
  <input
    type="text"
    placeholder="Search by name..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    
  />
  <button
    onClick={() => {
      const filtered = listOfRestaurants.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    }}
    className="btn"
  >
    Search
  </button>
</div>
</div>
    <div className="res-container">
      {filteredRestaurant.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  </div>
  );
};

export default Body;
