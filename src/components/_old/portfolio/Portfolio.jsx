import React from "react";
import "./portfolio.scss";

export const Portfolio = () => {
  const portfolioFirem = [
    "Angenieux",
    "Apollon",
    "Bailey Electric",
    "Baro",
    "Baush&Lomb",
    "BBT",
    "Berchtold",
    "BLV",
    "Dr. Fischer Dr. Mach",
    "EYE",
    "General Eletric",
    "Gowlland",
    "Guerra",
    "Hanaulux",
    "Heine",
    "Heraeus",
    "Hitachi",
    "Iwasaki",
    "Keeler",
    "Leuci",
    "Lohuis",
    "Martin",
    "Mc Intosch",
    "Narva",
    "Olympus",
    "Orbitec",
    "ORC",
    "Oshino lamp",
    "Osram",
    "Panasonic",
    "Pentax",
    "PerkinElmer",
    "Philips",
    "Radium",
    "Sidel",
    "Skylux",
    "SLI",
    "Storz",
    "Sylvania",
    "Tesla",
    "Teslamp",
    "Toschiba",
    "Ushio",
    "Venture Lighting",
    "Welch Allyn",
    "Wild",
    "Wolf",
    "Zeiss",
    "a další",
  ];

  return (
    <div className="portfolioWrapper">
      <h3>Značky které dodáváme:</h3>
      <span>
        <ul>
          {portfolioFirem.map((f) => (
            <li>{f}</li>
          ))}
        </ul>
      </span>
    </div>
  );
};
