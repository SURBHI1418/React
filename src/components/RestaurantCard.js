import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restaurantData;

  const { deliveryTime } = restaurantData?.sla;
  console.log(restaurantData);

  return (
    <div className="restaurant-card-container m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300 ">
      <img
        className="restaurant-logo rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="restaurant-detail-container">
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
