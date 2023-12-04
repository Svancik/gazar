import React from "react";
import WbIncandescentTwoToneIcon from "@mui/icons-material/WbIncandescentTwoTone";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    <div className="topbarWrap" data-aos="fade-down" data-aos-duration="1200">
      <header>
        <div className="headerItem">
          <span>O nás</span>
        </div>
        <div className="headerItem">
          <span>Náš sortiment</span>
        </div>
        <div className="headerItem">
          <span>Obchodní podmínky</span>
        </div>
        <div className="headerItem">
          <span>Jak nakupovat</span>
        </div>
        <div className="headerItem">
          <span>Kontakt</span>
        </div>
      </header>
    </div>
  );
};
