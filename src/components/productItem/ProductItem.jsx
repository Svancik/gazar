import React from "react";
import "./productItem.scss";

export const ProductItem = ({ product, categories }) => {
  return (
    <div
      className="product-cell"
      key={product.id}
    >
      <div className="product-img">
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <div className="product-info">
        <div className="info-row product-name">{product.name}</div>
        <div className="info-row product-category">
          {
            categories.find((category) => category.id === product.categoryID)
              .name
          }
        </div>
      </div>
    </div>
  );
};
