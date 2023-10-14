
import NestedMenu from "./NestedMenu";
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
          return <NestedMenu data={element.card.info} key={id} />;
        })}
    </div>
  );
};


export default MenuCategory;
