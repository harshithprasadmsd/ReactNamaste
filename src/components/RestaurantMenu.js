import resDetails from "../utils/menuData";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resID } = useParams();
  //   console.log(resDetails);
  console.log(resID);
  resDetails.map((resto) => {
    console.log(resto.id);
  });
  const restaurant = resDetails.find((resto) => resto.id == resID);
  console.log(restaurant);
  const menu = restaurant.menu;
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h2>cuisine {restaurant.cuisine}</h2>
      <h3>rating {restaurant.rating}</h3>
      <ul>
        {menu.map((item) => (
          <li>{item.dishName}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
