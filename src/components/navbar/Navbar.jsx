import React, { useState } from "react";
import WbIncandescentTwoToneIcon from "@mui/icons-material/WbIncandescentTwoTone";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbarWrapper">
      {" "}
      <div className="dropdown-menu-container">
        <div className="titleWrap">
          <h1>GAZAR</h1>
          <h2>GROUP</h2>
        </div>
        <div className="buttonWrap">
          <button className="toggle-button" onClick={toggleMenu}>
            <ListIcon
              className="toggle-button-icon"
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="dropdown-menu">
            {/* Your dropdown menu items go here */}
            <div className="headerItem">
              <Link to="/">
                <span>O nás</span>
              </Link>
            </div>
            <div className="headerItem">
              <Link to="/products">
                <span>Náš sortiment</span>
              </Link>
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
          </div>
        )}
      </div>
      {
        //HIDE ON PHONE
      }
      <div className="topbarWrap hide-on-phone">
        <header>
          <div className="headerItem">
            <Link className="link" to="/">
              <span>O nás</span>
            </Link>
          </div>
          <div className="headerItem">
            <Link className="link" to="/products">
              <span>Náš sortiment</span>
            </Link>
          </div>
          <div className="headerItem">
            <Link className="link" to="/termsandconditions">
              <span>Obchodní podmínky</span>
            </Link>
          </div>
          <div className="headerItem">
            <span>Jak nakupovat</span>
          </div>
          <div className="headerItem">
            <span>Kontakt</span>
          </div>
        </header>
      </div>
    </div>
  );
};
