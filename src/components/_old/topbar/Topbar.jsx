import React from "react";
import { Link } from "react-router-dom";
import WbIncandescentTwoToneIcon from "@mui/icons-material/WbIncandescentTwoTone";
import "./topbar.scss";

//https://coolors.co/palette/fffcf2-ccc5b9-403d39-252422-eb5e28

export const Topbar = () => {
  return (
    <div className="topbarWrapper">
      <header>
        <div className="headerLeft">
          {
            <WbIncandescentTwoToneIcon
              sx={{ width: "40px", height: "50px", color: "gold" }}
            />
          }
          <h2>GAZAR-plus </h2>
        </div>
        <div className="headerRight">
          <span>Úvod</span>
          <span>Seznam produktů</span>
          <span>Katalogy</span>
          <span>Kontakt</span>
          <span>Teorie</span>
        </div>
      </header>
    </div>
  );
};
