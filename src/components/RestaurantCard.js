import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo } =
    props.resData;

   
  const printCuisines = (cuisines) =>{
    const str = cuisines.join(", ");
    if(str.length > 30){
      return str.substr(0, 30) + "..."
    }else{
      return str;
    }
  }

  return (
    <div className="main-restaurant-card" onClick={()=>{
      
    }}>
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
