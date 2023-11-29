import React from "react";
import "./home.scss";
import { Hero } from "../../components/hero/Hero";
import { Navbar } from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="homeWrap">
      <Navbar />
      <Hero />
    </div>
  );
}
