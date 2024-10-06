import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="resto-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
