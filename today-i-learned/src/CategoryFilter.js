import ColorMap from "./ColorMap";
import CategoryButton from "./CategoryButton";

function CategoryFilter() {
  return (
    <aside>
      <ul className="category-buttons">
        <li>
          <button
            className="btn btn-sidemenu-generic"
            style={{ marginBottom: 30 + "px" }}
          >
            All
          </button>
        </li>
        {Array.from(ColorMap.keys()).map((category) => (
          <CategoryButton key={category} categoryType={category} />
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
