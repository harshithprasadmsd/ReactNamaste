import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  console.log("body rendered");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setListOfRestaurant(resList);
      setFilteredResto(resList);
    }, 1000);
  }, []);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestoList = listOfRestaurant.filter((res) =>
                res.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredResto(filteredRestoList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("inside filtered rating");
            setListOfRestaurant(
              listOfRestaurant.filter((res) => res.rating > 4)
            );
          }}
        >
          top rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {filteredResto.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
