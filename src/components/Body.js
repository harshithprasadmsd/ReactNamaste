import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setListOfRestaurant(resList);
    }, 1000);
  }, []);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurant.filter((res) => res.rating > 4)
            );
          }}
        >
          top rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
