import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

export const About = () => {
  return (
      <div className="aboutWrapper">
        <div className="left">
          <img
            src={require(`../../media/zarovkaAbout.jpg`)}
            alt=""
            srcset=""
            className="galleryItem"
          />
        </div>
        <div className="right">
          <h1>Kdo jsme?</h1>
          <span>
            Jsme firma s 25ti letou historií, která dodává žárovky do několika
            firem. Naše portfolio obsahuje žárovky vláknové, doutnavky, pro
            letectvo a lodě, dodáváme halogenové a nehaogenové světelné zdroje,
            naše světelné zdroje mají přesah i do medicíny, či veterinárních
            služeb. V neposlendí řadě dodávme UV světelné zdroje. <br></br>
            <br></br>
            <b>
              Pokud potřebujete jakoukoliv žárovku, tak nás kontaktujte (záložka
              kontakt) a my Vám rádi poradíme a Vy si ušetříte čas hledáním
              žárovky.
            </b>
          </span>
          <span>
            <br></br>
            <button> POTŘEBUJI PORADIT </button>
          </span>
        </div>
      </div>

  );
};
