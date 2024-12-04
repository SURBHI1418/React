import { useState } from "react";
import { mockData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  let [stateData, setStateData] = useState(mockData);
  return (
    <div className="body-container">
      <div className="search-container" key="search">
        Search
      </div>
      <div className="fliter">
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
        {stateData.map((info) => {
          return <RestaurantCard key={info.info.id} restaurantData={info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
