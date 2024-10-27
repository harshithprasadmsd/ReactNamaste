import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setListOfRestaurant(resList);
      setFilteredResto(resList);
    }, 1000);
  }, []);
  const onlineStaus = useOnlineStatus();
  const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);

  if (onlineStaus === false) return <h1>check your internet connection</h1>;
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex ">
        <div className="">
          <input
            type="text"
            className="border-solid border-5 bg-orange-50"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="bg-yellow-150 px-3"
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
          className="bg-slate-300 "
          onClick={() => {
            console.log("inside filtered rating");
            setListOfRestaurant(
              listOfRestaurant.filter((res) => res.rating > 4)
            );
          }}
        >
          top rated Restaurant
        </button>
      </div>
      <div className="flex">
        {filteredResto.map((restaurant) => (
          <Link key={restaurant.id} to={`/restoMenu/${restaurant.id}`}>
            {restaurant.promoted == true ? (
              <RestaurantCardPromoted restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
