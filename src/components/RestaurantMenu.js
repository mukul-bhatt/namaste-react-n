import { MENU_API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const [name, setName] = useState("");

  const { resId } = useParams();

  async function fetchMenu() {
    const response = await fetch(MENU_API_URL + resId);
    const data = await response.json();
    setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setName(data.data.cards[0].card.card.info.name);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return menu === null ? (
    <Shimmer />
  ) : (
    <>
      <div>
      <h1>{name}</h1>

      </div>
      <h2>Menu</h2>

      <div className="menu-container">
        {menu.map((card) => {
          return (
            <div key={card.card.card.title || card.card.card["@type"]}>
              <h2>{card.card.card?.itemCards && card.card.card?.title}</h2>
              {card.card.card?.itemCards &&
                card.card.card?.itemCards.map((ele) => {
                  return <p key={ele.card.info.name}>{ele.card.info.name}</p>;
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
