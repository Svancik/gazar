import React, { useState } from "react";
import "./categoryDropdown.scss";

const CategoryDropdown = ({
  categories,
  setCategoryFilter,
  setCurrentPage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setCategoryFilter(selectedValue);
    setCurrentPage(1);
  };

  const renderCategories = (category) => {
    return (
      <React.Fragment key={category.id}>
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
    <div className="categoryDropdownWrap linear-background-select">
      {/* <label htmlFor="category">Zvolte kategorii svítidel:</label> */}
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="linear-background-select"
      >
        <option value="All">-- Vyberte kategorii žárovek --</option>
        {categories.map((category) => renderCategories(category))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
