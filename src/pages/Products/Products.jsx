import React from "react";
import "./products.scss";
import { Navbar } from "../../components/navbar/Navbar";
import ProductList from "../../components/productsList/ProductsList";
import { ContactForm } from "./../../components/contactForm/ContactForm";

export const Products = () => {
  return (
    <div className="productsWrap">
      <Navbar />
      <ProductList />
      <ContactForm isPopUp={true} />
    </div>
  );
};
