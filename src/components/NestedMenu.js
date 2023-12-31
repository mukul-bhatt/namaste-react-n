import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import CartContext from "../utils/CartContext";
import { addItem } from "../utils/cartSlice";
import { CDN_URL_CATEGORIES } from "../utils/constants";

const NestedMenu = ({ data }) => {
  const { name, imageId, description } = data;
  const [cartValue, setCartValue] = useState(0);
  const [contextCartValue, setContextCartValue] = useContext(CartContext);

  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(addItem(data));
  }

  return (
    <div className="sub-menu-category">
      <div className="item-image-container">
        <img
          src={CDN_URL_CATEGORIES + imageId}
          alt="image"
          className="item-image"
        />
      </div>
      <div className="item-info">
        <p className="item-info-name">{name}</p>
        <p className="item-info-description">{description}</p>
      </div>
      <div
        className="plus-button"
        onClick={() => {
          setCartValue(cartValue + 1);
          setContextCartValue(contextCartValue + 1);
          handleClick(data);
        }}
      >
        ➕
      </div>
      <div className="count-items">{cartValue}</div>
      <div
        className="minus-button"
        onClick={() => {
          setCartValue(cartValue - 1);
          setContextCartValue(contextCartValue - 1);
        }}
      >
        ➖
      </div>
    </div>
  );
};

export default NestedMenu;
