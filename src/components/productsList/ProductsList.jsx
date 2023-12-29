import React, { useState, useEffect } from "react";
import CategoryDropdown from "../categoryDropdown/CategoryDropdown";
import "./productsList.scss";

import { categories } from "../../dummyData";
import { products } from "../../dummyData";

import { ProductItem } from "../productItem/ProductItem";
import { Pagination } from "../pagination/Pagination";

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  //konstanty slouží pro pagination
  let postsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  //Níže je filtrace produktů podle kategorie nebo textu
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
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="product-list-container">
      {/* Filter */}
      <div className="filter-section">
        <CategoryDropdown
          categories={categories}
          setCategoryFilter={setCategoryFilter}
        />

        <h1 className="categoryFilterTitle">
          {categoryFilter === "All"
            ? "Všechny kategorie žárovek"
            : categories.find((category) => category.id == categoryFilter).name}
        </h1>
        {/* Text Search */}
        <input
          type="text"
          placeholder="Vyhledejte produkt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid / List with ProductItems*/}

      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductItem product={product} categories={categories} />
        ))}
      </div>

      <div className="pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={
            filteredProducts.length !== 0
              ? filteredProducts.length
              : products.length
          }
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProductList;
