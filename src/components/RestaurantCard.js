import { CDN_URL } from "../utils/constants";

const printCuisines = (cuisines) => {
  const str = cuisines.join(", ");
  if (str.length > 30) {
    return str.substr(0, 30) + "...";
  } else {
    return str;
  }
};

export const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo } = props.resData;

  return (
    <div className="main-restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="image" />

      <div>
        <h3>{name}</h3>
        <p>{avgRating} ⭐️</p>
        <p>{printCuisines(cuisines)}</p>
        <p>{costForTwo}</p>

      </div>
    </div>
  );
};

export default RestaurantCard;

// Higer Order Function

export const RestaurantCardWithOffers = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData;
    return (
      <>
        <label>
          {aggregatedDiscountInfoV3?.header &&
            aggregatedDiscountInfoV3?.header + " "}
          {aggregatedDiscountInfoV3?.subHeader &&
            aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

