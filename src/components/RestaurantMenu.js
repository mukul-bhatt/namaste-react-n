
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const menu = resData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const name = resData.data.cards[0].card.card.info.name;

  return (
    <>
      <div>
        <h1>Name: {name}</h1>
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
