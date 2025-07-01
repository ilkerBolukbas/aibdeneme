import React from "react";
import Slider from "react-slick";
import img1 from "../images/banner1.jpg";
import img2 from "../images/banner2.jpg";
import img3 from "../images/banner3.jpg";
import "./BannerSlider.css";

const sliderData = [
  {
    title: "Tasarımın gücünü keşfet!",
    subtitle: "aibdesign ile dijitali yeniden inşa et.",
    button: "Projelerimiz",
    buttonUrl: "#projeler",
    img: img1,
  },
  {
    title: "Markanı dijitale taşı!",
    subtitle: "Modern, işlevsel ve özgün web tasarımları.",
    button: "Hizmetlerimiz",
    buttonUrl: "#hizmetler",
    img: img2,
  },
  {
    title: "Hayal et, biz tasarlayalım.",
    subtitle: "İlham veren arayüzler, güçlü deneyimler.",
    button: "İletişime Geç",
    buttonUrl: "#iletisim",
    img: img3,
  },
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {sliderData.map((item, idx) => (
          <div className="slide" key={idx}>
            <div
              className="slide-bg"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div className="slide-overlay" />
              <div className="slide-content">
                <h1>{item.title}</h1>
                <h4>{item.subtitle}</h4>
                <a className="slide-btn" href={item.buttonUrl}>
                  {item.button}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
