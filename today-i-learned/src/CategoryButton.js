import ColorMap from "./ColorMap";

function CategoryButton({ categoryType }) {
  const color = ColorMap.get(categoryType);
  console.log(color);
  return (
    <button
      className="btn btn-sidemenu-specific"
      style={{ backgroundColor: color }}
    >
      {categoryType}
    </button>
  );
}

export default CategoryButton;
