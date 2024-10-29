import styleCard from "../utils/styleCard";
const RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;
  const imgLink = info.cloudinaryImageId;
  const imgCheck =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    imgLink;
  // const { name, cuisine, image, rating } = restaurant;
  return (
    <div className="p-5  m-1 rounded w-1/6 object-cover">
      <img src={imgCheck} alt="img not loading" className="object-cover" />
      <h3>{info.name}</h3>
      <h4 className="truncate">{info.cuisines}</h4>
      <h4>{info.avgRating} </h4>
    </div>
  );
};
export const PromotedRestaurantCard = (RestaurantCard) => {
  return ({ restaurant }) => {
    return (
      <div>
        {console.log("entering ", RestaurantCard)}
        <label className="absolute text-yellow-300 bg-black rounded-lg px-4">
          promoted
        </label>
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };
};

export default RestaurantCard;
