import RestaurantCard from "./RestaurantCard";
import { obj } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(obj);

  return (
    <div className="body">
      <div className="main-fitler-button">
        <button
          className="button-85"
          role="button"
          onClick={() => {
            const filteredList = obj.filter((ele) => ele.info.avgRating > 4);
            setListOfRestaurant(filteredList);
          }}
        >
          <span className="text">Top Rated Restaurants</span>
        </button>
      </div>
      <div className="main-restaurant-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
