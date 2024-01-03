import React from "react";
import "./termsAndConditions.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { TermsAndConditionsInfo } from "../../components/termsAndConditionsInfo/TermsAndConditionsInfo";

export const TermsAndConditions = () => {
  return (
    <div className="termsAndConditionsWrapper" >
      <Navbar />
      <TermsAndConditionsInfo />
    </div>
  );
};
