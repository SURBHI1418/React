import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const fetchRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  // console.log("Body Render", restaurantData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.918051364750095&lng=77.64502745121717&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      json.data.cards.forEach((element) => {
        if (
          element.card.card["@type"] ===
            // "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
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

const {setUserName, loggedInUser}=useContext(UserContext);
  return restaurantData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex ">
        <div className="search-container m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-input-container border border-gray-700 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-md "
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
        <div className="input m-4 p-4 flex items-center ">
          <label>UserName : </label>
          <input className="border border-black p-2 " 
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}/>
        </div>
      </div>

      <div className="restaurant-container flex flex-wrap">
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
