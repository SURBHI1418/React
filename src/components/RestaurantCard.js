import { CDN_URL } from "../utils/constants";
import Body from "./Body";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantData?.info;
  const { deliveryTime } = restaurantData?.info?.sla;
  return (
    <div className="restaurant-card-container">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
