import React from "react";
import "./productDetail.scss";
import { Navbar } from "./../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { products } from "../../dummyData";
import { ProductItemDetails } from "../../components/productItemDetails/ProductItemDetails";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ProductDetail = () => {
  //načtení id z URL
  const productId = useLocation().pathname.split("/")[2];
  //nalezení produktu na základě id
  const product = products.filter(
    (manga) => manga.id.toString() === productId.toString()
  )[0];

  return (
    <div className="productDetailWrapper">
      <Navbar />
      <ProductItemDetails product={product} />
      <ContactForm isPopUp={true} />
    </div>
  );
};
