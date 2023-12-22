import React, { useState } from "react";
import "./categoryDropdown.scss";

const CategoryDropdown = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onSelectCategory(selectedValue);
  };

  const renderCategories = (category) => {
    return (
      <React.Fragment key={category.id}>
        <option value={category.id}>{category.name}</option>
        {category.subcategories &&
          category.subcategories.length > 0 &&
          category.subcategories.map((subCategory) =>
            renderCategories(subCategory)
          )}
      </React.Fragment>
    );
  };

  return (
    <div className="categoryDropdownWrap">
      <label htmlFor="category">Zvolte kategorii svítidel:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">-- Všechny kategorie --</option>
        {categories.map((category) => renderCategories(category))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
