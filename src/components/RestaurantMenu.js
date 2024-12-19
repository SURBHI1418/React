import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API_URL + resId);

        if (response.ok) {
          const data = await response.json(); // Assuming the data is in JSON format
          setRestaurantMenuData(data.data); // Update the state with the fetched data
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  // useEffect(() => {
  //   console.log("🚀 ~ useEffect ~ restaurantMenuData:", restaurantMenuData);
  // }, [restaurantMenuData]);
  if (restaurantMenuData.length === 0) {
    return <Shimmer />;
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
        {itemCards.map((item) => (
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
