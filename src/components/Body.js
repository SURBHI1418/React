import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [stateData, setStateData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
        setStateData(
          element?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilterData(
          element?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
  };

  const [searchText, setSearchText] = useState("");

  return stateData.length == 0 ? (
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
              const filterData = stateData.filter((res) =>
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
            const filteredData = stateData.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setStateData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filterData.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info?.id}
              restaurantData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
