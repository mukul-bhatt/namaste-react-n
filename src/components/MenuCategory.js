import { CDN_URL_CATEGORIES } from "../utils/constants";

const MenuCategory = ({ data, isVisible, setShowIndex, setShowNull }) => {
  const { title, itemCards } = data;
  return (
    <div className="menu-category">
      <div className="menu-category-header">
        <h2 className="menu-category-title">{title}</h2>
        <button
          className="btn-menu-category"
          onClick={() => {
            isVisible ? setShowNull() : setShowIndex();
          }}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible &&
        itemCards.map((element) => {
          const id = element.card.info.id;
          return <SubMenuCategory data={element.card.info} key={id} />;
        })}
    </div>
  );
};

const SubMenuCategory = ({ data }) => {
  const { name, imageId, description } = data;

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
    </div>
  );
};
export default MenuCategory;
