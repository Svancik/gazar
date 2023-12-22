import React, { useState } from "react";
import "./productsList.scss"; // Import the SCSS file
import CategoryDropdown from "../categoryDropdown/CategoryDropdown";

const ProductList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },
    {
      id: 1,
      name: "DENTÁLNÍ LAMPA OSRAM 64613 12V 75W G5,3",
      price: "726",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1753-2240-large/dentalni-lampa-osram-64613-12v-75w-g53.jpg",
    },
    {
      id: 2,
      name: "DENTÁLNÍ LAMPA H192465 24V 65W PK22S 11,5X42MM      ",
      price: "116",
      category: "Zdravotnictví",
      thumbnail:
        "http://www.jarovky.eu/1362-1826-large/dentalni-lampa-h192465-24v-65w-pk22s-115x42mm.jpg",
    },

    // Add more products as needed
  ];

  const categories = [
    {
      id: 1,
      name: "Zdravotnictví",
      subcategories: [
        { id: 11, name: "--- Dentální žárovky" },
        { id: 12, name: "--- Laryngoskopy" },
        { id: 13, name: "--- Svítidla pro operační sály" },
        { id: 14, name: "--- Germicidní zářivky" },
        { id: 15, name: "--- Zářivky UVA - UVB" },
        { id: 16, name: "--- Žárovky NARVA" },
        { id: 17, name: "--- Výbojky" },
      ],
    },
    {
      id: 2,
      name: "Optika",
      subcategories: [
        { id: 21, name: "--- Optické halogenové žárovky" },
        { id: 22, name: "--- Projekční žárovky" },
      ],
    },
    {
      id: 3,
      name: "Průmysl",
      subcategories: [
        { id: 31, name: "--- Signální žárovky, kontrolky" },
        { id: 32, name: "--- Projekční žárovky" },
        { id: 33, name: "--- Vysokotlaké výbojky" },
        { id: 34, name: "--- Zářivky UV BLB" },
      ],
    },
  ];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const renderCategories = (category) => {
    if (!category.children || category.children.length === 0) {
      return (
        <li key={category.id}>
          <a href="#">{category.name}</a>
        </li>
      );
    }
    return (
      <li key={category.id} className="has-children">
        <a href="#">{category.name}</a>
        <ul className="sub-menu">
          {category.children.map((child) => renderCategories(child))}
        </ul>
      </li>
    );
  };

  const handleSelectCategory = (selectedCategory) => {
    console.log(`Selected category:  ${selectedCategory}`);
    //    categories.find((category) => category.id === selectedCategory)?.id
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatches =
      categoryFilter === "All" || product.category === categoryFilter;
    const searchTermMatches = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatches && searchTermMatches;
  });

  return (
    <div className="product-list-container">
      <div className="filter-section">
        {/* Category Select */}
        {/* <ul className="category-menu">
          {categories.map((category) => renderCategories(category))}
        </ul> */}
        <CategoryDropdown
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />

        {/* Text Search */}
        <input
          type="text"
          placeholder="Vyhledejte produkt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product List */}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-cell" key={product.id}>
            <img src={product.thumbnail} alt={product.name} />

            <div className="product-info">
              <div className="info-row">{product.name}</div>
              <div className="info-row">{product.category}</div>
              <div className="info-row">{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductList;
