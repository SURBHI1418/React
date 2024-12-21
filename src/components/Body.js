import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const fetchRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.918051364750095&lng=77.64502745121717&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      json.data.cards.forEach((element) => {
        if (
          element.card.card["@type"] ===
            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
          element.card.card.id === "top_brands_for_you"
        ) {
          setRestaurantData(
            element?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        }
      });
    };

    fetchData();
  }, []);

  return restaurantData;
};

const Body = () => {
  const restaurantData = fetchRestaurantData();
  const [filterData, setFilterData] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilterData(restaurantData);
  }, [restaurantData]);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>Looks like you're offine check your internet connnection. </h1>;

  return restaurantData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="fliter">
        <div className="search-container">
          <input
            type="text"
            className="search-input-container"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant
              // search Text
              console.log(searchText);
              const filterData = restaurantData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterData(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="fliter-btn"
          onClick={() => {
            const filteredData = restaurantData.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilterData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filterData.map((restaurant) => {
          return (
            <Link
              key={restaurant.info?.id}
              to={"/restaurants/" + restaurant.info?.id}
            >
              <RestaurantCard restaurantData={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
