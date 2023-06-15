import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainSlide1 from '../img/main-slide1.jpg';
import mainSlide2 from '../img/main-slide2.jpg';
import '../css/TopSlider.css';

const TopSlider = () => {
    const settings = {
        dots: true,
        speed: 600,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        customPaging: i => (
            <div
                className="top-slider-dots"
            />
          )
    };
    return (
        <Slider {...settings}>
            <img className="top-slider-img" src={mainSlide1} alt="메인슬라이드1" />
            <img className="top-slider-img" src={mainSlide2} alt="메인슬라이드2" />
        </Slider>
    )
};

export default TopSlider;