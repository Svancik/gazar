import React from "react";
import WbIncandescentTwoToneIcon from "@mui/icons-material/WbIncandescentTwoTone";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="topbarWrap">
      <header>
        <span>O nás</span>
        <span>Náš sortiment</span>
        <span>Obchodní podmínky</span>
        <span>Jak nakupovat</span>
        <span>Kontakt</span>
      </header>
    </div>
  );
};
