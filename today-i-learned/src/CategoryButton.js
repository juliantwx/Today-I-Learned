import ColorMap from "./ColorMap";

function CategoryButton({ categoryType, setCurrentCategory }) {
  // Grab color based on this button's category type
  const color = ColorMap.get(categoryType);

  return (
    <button
      className="btn btn-sidemenu-specific"
      style={{ backgroundColor: color }}
      onClick={() => setCurrentCategory(categoryType)}
    >
      {categoryType}
    </button>
  );
}

export default CategoryButton;
