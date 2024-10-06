import styleCard from "../utils/styleCard";
const RestaurantCard = ({ restaurant }) => {
  const { name, cuisine, image, rating } = restaurant;
  return (
    <div className="res-card" style={styleCard}>
      <img alt="res-image" className="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} </h4>
    </div>
  );
};

export default RestaurantCard;
