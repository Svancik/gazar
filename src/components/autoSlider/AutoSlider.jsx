import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./autoSlider.scss";

export const AutoSlider = () => {
  const autoslideData = [
    {
      id: 1,
      fileName: "categoryDentist.mp4",
      text: "Zubních ordinací a nemocnic",
      href: "zdravotnictvi",
    },
    {
      id: 2,
      fileName: "categoryMicroscope.mp4",
      text: "Mikroskopů a laryngoskopů",
      href: "mikroskop",
    },
    {
      id: 3,
      fileName: "categoryHotel.mp4",
      text: "Hotelů, kin a kulturních domů",
      href: "hotel",
    },
    {
      id: 4,
      fileName: "categoryIndustry.mp4",
      text: "Průmyslu, skladů a halových prostorů",
      href: "průmysl",
    },
    {
      id: 5,
      fileName: "categoryUV.mp4",
      text: "Sterilizátorů a veterinářství",
      href: "UV",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % autoslideData.length);
    }, 6000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-slider">
      {autoslideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <video autoPlay loop muted className="background-video">
            <source
              src={require(`../../media/videos/${slide.fileName}`)}
              type="video/mp4"
            />
          </video>
          <div className="content">
            <div className="contentText">
              <h1>Dodáváme již přes 25 let světelné zdroje do:</h1>{" "}
              <h2>{slide.text}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
