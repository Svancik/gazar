import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./autoSlider.scss";

export const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Your slides go here */}
        <div className="slide">
          <img
            src="https://www.gorex.cz/img/Mat%C4%9Bj/Loga%20Eshop%20Produkty/1200px-Osram_Logo.svg.png"
            alt="Slide 1"
          />
        </div>
        <div className="slide">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/2560px-Panasonic_logo_%28Blue%29.svg.png"
            alt="Slide 2"
          />
        </div>
        <div className="slide">
          <img
            src="https://www.bailey.nl/media/over%20ons/Bailey%202.jpg"
            alt="Slide 3"
          />
        </div>
        <div className="slide">
          <img
            src="https://www.legallais.com/media_fr/brands/orbitec.svg"
            alt="Slide 4"
          />
        </div>
      </Slider>
    </div>
  );
};
