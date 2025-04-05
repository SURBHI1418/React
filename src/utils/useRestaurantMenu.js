import { MENU_API_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    if (!!resId) {
      fetchData();
    }
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API_URL + resId);

      if (!response || !response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setRestaurantInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return restaurantInfo;
};
export default useRestaurantMenu;
