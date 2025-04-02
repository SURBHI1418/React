import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenuData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
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
  // console.log(
  //   restaurantMenuData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards
  // );

  const categories =
    restaurantMenuData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        //Controlled Components
        <RestaurantCategories
          key={category?.card?.card.title}
          data={category?.card?.card || {}}
          showItem={index === showIndex}
          setShowIndex={setShowIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
