import useFindData from "../utils/useFindData";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resto = useFindData(resID);
  const { id, name, cuisine, rating, menu } = resto;

  return (
    <div>
      <h1>{name}</h1>
      <h2>cuisine {cuisine}</h2>
      <h3>rating {rating}</h3>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item.dishName}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
