import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);



  if (resData === null) return <Shimmer />;

  const menuData =
    resData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const { name: nameOfRestaurant, cloudinaryImageId } =
    resData.data.cards[0].card.card.info;
  const allCategories = menuData.filter(
    (ele) =>
      ele?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu-component">
      <h1 className="menu">Menu</h1>

      <div className="menu-header">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="image"
          className="Restaurant-image"
        />
        <h2 className="Restaurant-name">{nameOfRestaurant}</h2>
      </div>
      <div className="menu-container">
        {allCategories.map((item, index) => (
          <MenuCategory
            key={item.card.card.title}
            data={item.card.card}
            isVisible={index === showIndex && true}
            setShowIndex={()=>setShowIndex(index)}
            setShowNull={()=>setShowIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

/* {menuData.map((card) => {
          return (
            <div key={card.card.card.title || card.card.card["@type"]}>
              <h2>{card.card.card?.itemCards && card.card.card?.title}</h2>
              {card.card.card?.itemCards &&
                card.card.card?.itemCards.map((ele) => {
                  return <p key={ele.card.info.name}>{ele.card.info.name}</p>;
                })}
            </div>
            <div>

            </div>

        );
})} */
