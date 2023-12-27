import React, { useState } from "react";
import "./categoryDropdown.scss";

const CategoryDropdown = ({
  categories,
  onSelectCategory,
  setCategoryFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(selectedCategory);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onSelectCategory(selectedValue);
    setCategoryFilter(selectedValue);
  };

  const renderCategories = (category) => {
    return (
      <React.Fragment key={category.id}>
        {/* TODO: Níže bylo původně category.id*/}
        <option
          value={category.id}
          className={
            String(category.id).length > 1 ? "subCategory" : "mainCategory"
          }
        >
          {category.name}
        </option>
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
        <option value="All">-- Všechny kategorie --</option>
        {categories.map((category) => renderCategories(category))}
      </select>
    </div>
  );
};

export default CategoryDropdown;