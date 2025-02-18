import ColorMap from "./ColorMap";
import CategoryButton from "./CategoryButton";

function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul className="category-buttons">
        <li>
          <button
            className="btn btn-sidemenu-generic"
            style={{ marginBottom: 30 + "px" }}
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {Array.from(ColorMap.keys()).map((category) => (
          <CategoryButton
            key={category}
            categoryType={category}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
