import React from "react";
import Gallery from "../../../../components/Slider/Gallery";
import H2 from "../../../../components/H2/H2";
import sliderImage from "./data";

export default function S4GalleryAbout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000, // задержка между скролами
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      // для мобилки 768
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="about-s4about">
      <div className="container">
        <H2
          subTitle={"Наши врачи"}
          h2Title={
            <>
              В нашем центре собраны <span>лучшие доктора</span>
              со всей страны
            </>
          }
          text={""}
          subTitleStyles={"h6__smallTitle"}
          h2TitleStyles={"h6__title"}
          textStyles={""}
        />

        <div className="carousel-main">
          <div className="slider-row">
            <Gallery sliderImage={sliderImage} settings={settings} />
          </div>
        </div>
     
      </div>
    </section>
  );
}
