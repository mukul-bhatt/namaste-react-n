import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchData() {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    console.log("fucntion called",data);
    setListOfRestaurant(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );
    setFilteredRestaurant(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* button and search component */}
      <div className="main-first-section">
        {/* button component */}
        <div className="main-fitler-button">
          <button
            className="button-85"
            role="button"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (ele) => ele.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            <span className="text">Top Rated Restaurants</span>
          </button>
        </div>

        {/* Search component */}
        <div className="main-search-bar">
          {/* input  */}
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            value={searchQuery}
          />

          {/* search button */}
          <button
            className="button-85"
            role="button"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((ele) => {
                const name = ele.info.name.toLowerCase();
                const searchString = searchQuery.toLowerCase();
                return name.includes(searchString);
              });
              setFilteredRestaurant(filteredList);
            }}
          >
            <span className="text">Search</span>
          </button>

          {filteredRestaurant.length < 20 && (
            <button
              className="button-85"
              onClick={() => {
                setFilteredRestaurant(listOfRestaurants);
              }}
            >
              <span className="text">Home</span>
            </button>
          )}
        </div>
      </div>

      {/* Restaurants component */}
      <div className="main-restaurant-container">
        {filteredRestaurant.map((res) => (
          <Link to={"menu/"+res.info.id} key={res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
