import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { 
    name,
    cuisines, 
    avgRating, 
    costForTwo, 
    cloudinaryImageId } =
    restaurantData;

  const { deliveryTime } = restaurantData?.sla;
  
  return (
    <div className="restaurant-card-container">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="restaurant-detail-container">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
