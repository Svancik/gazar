import React, { useState } from "react";
import CategoryDropdown from "../categoryDropdown/CategoryDropdown";
import "./productsList.scss";

import { categories } from "../../dummyData";
import { products } from "../../dummyData";

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectCategory = (selectedCategory) => {
    console.log(`Selected category:  ${selectedCategory}`);
    //    categories.find((category) => category.id === selectedCategory)?.id
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatches =
      categoryFilter === "All" ||
      product.categoryID == categoryFilter ||
      String(product.categoryID).charAt(0) == categoryFilter;
    const searchTermMatches = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatches && searchTermMatches;
  });

  return (
    <div className="product-list-container">
      {/* Filter */}
      <div className="filter-section">
        <CategoryDropdown
          categories={categories}
          onSelectCategory={handleSelectCategory}
          setCategoryFilter={setCategoryFilter}
        />

        {/* Text Search */}
        <input
          type="text"
          placeholder="Vyhledejte produkt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product List  - dát níže ProductItem*/}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-cell" key={product.id}>
            <img src={product.thumbnail} alt={product.name} />

            <div className="product-info">
              <div className="info-row">{product.name}</div>
              <div className="info-row">
                {
                  categories.find(
                    (category) => category.id === product.categoryID
                  ).name
                }
              </div>
              <div className="info-row">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
