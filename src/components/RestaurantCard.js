import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo } =
    props.resData;

  return (
    <div className="main-restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="image" />

      <div>
        <h3>{name}</h3>
        <p>{avgRating} ⭐️</p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
