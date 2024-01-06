import React from "react";
import "./products.scss";
import { Navbar } from "../../components/navbar/Navbar";
import ProductList from "../../components/productsList/ProductsList";
import { ContactForm } from "./../../components/contactForm/ContactForm";
import { AutoSlider } from "../../components/autoSlider/AutoSlider";

export const Products = () => {
  return (
    <div className="productsWrap">
      <div className="productsWrap2">
        <Navbar />
        <AutoSlider />
        <ProductList />
        <ContactForm isPopUp={true} />
      </div>
    </div>
  );
};
