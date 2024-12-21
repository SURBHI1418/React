import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenuData = useRestaurantMenu(resId);

  // if (restaurantMenuData === null || restaurantMenuData.length === 0) {
  //   return <Shimmer />;
  // }
  if (!restaurantMenuData) {
    return <Shimmer />; // Show shimmer when no data is available or loading
  }
  const { name, costForTwoMessage, cuisines } =
    restaurantMenuData?.cards[2]?.card?.card?.info;
  const { deliveryTime } = restaurantMenuData?.cards[2]?.card?.card?.info?.sla;
  const { itemCards } =
    restaurantMenuData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]
      ?.card?.card;
  console.log(itemCards);

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>Delivery Time : {deliveryTime}</p>

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
