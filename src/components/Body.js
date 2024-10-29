import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import data from "../utils/swiggyData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const temp =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    console.log(data);
    setListOfRestaurant(temp);
    // setTimeout(() => {
    //   setListOfRestaurant(resList);
    //   setFilteredResto(resList);
    // }, 1000);
  }, []);
  const onlineStaus = useOnlineStatus();
  const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);

  if (onlineStaus === false) return <h1>check your internet connection</h1>;
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex ">
        <div className="">
          <input
            type="text"
            className="border border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-0.5 ml-3 mr-1 rounded-lg"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="bg-black px-3 rounded text-stone-400 mr-4"
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
          className="rounded bg-orange-400 text-indigo-600"
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
      <div className="flex flex-wrap gap-4 flex-row w-full p-5 justify-start pl-32">
        {listOfRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
