import React from "react";
import "./productItemDetails.scss";
import { categories, products } from "../../dummyData";
import { Link } from "react-router-dom";
import { ProductItem } from "../productItem/ProductItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ProductItemDetails = ({ product }) => {
  const familiarProducts = products.filter(
    (familiar) =>
      familiar.categoryID === product.categoryID &&
      familiar.id.toString() !== product.id.toString()
  );

  const productCategory = categories.find(
    (category) => category.id === product.categoryID
  ).name;

  return (
    <div className="productItemDetailsWrapper">
      <Link to="/products">
        <div className="backButton">
          <ArrowBackIcon className="backIcon" /> <span>Zpět</span>
        </div>
      </Link>
      <div className="left">
        <img className="productImage" src={product.thumbnail} alt="" />
      </div>
      <div className="right">
        <div className="productDetail">
          <div className="productTitle">
            {" "}
            <h2>{product.name}</h2>
          </div>
          <div className="productDecsription">
            <h4>{productCategory}</h4>

            <span>
              <b>Orientační cena: </b>
              {product.price} Kč
            </span>
            <span>
              <b>Dostupnost:</b> ihned
            </span>

            <button className="productItemDetailsButton">
              {" "}
              Odeslat poptávku{" "}
            </button>

            {product.datasheet && (
              <div className="table-container">
                <table className="custom-table">
                  <tbody>
                    {Object.entries(product.datasheet).map(([field, value]) => (
                      <tr key={field}>
                        <td className="firstCol">{field}</td>
                        <td className="secondCol">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        {familiarProducts.length > 0 && (
          <div className="similiarProducts">
            <h3>
              Žárovky ve stejné kategorii <span>{productCategory}</span>:
            </h3>
            <div className="similiarProducts-grid">
              {familiarProducts.map((product) => (
                <Link className="link" to={`/product/${product.id}`}>
                  <ProductItem product={product} categories={categories} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
