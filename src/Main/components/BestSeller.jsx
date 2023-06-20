import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/BestSeller.css';
import item1 from '../img/item1.png';
import item2 from '../img/item2.png';
import item3 from '../img/item3.png';
import item4 from '../img/item4.png';

const BestSeller = () => {
    const settings = {
        className: "center",
        infinite: false,
        slidesToShow: 4,
        centerPadding: "60px",
        swipeToSlide: true,
    };
    return (
        <div className="best-seller">
            <Slider {...settings}>
                <div className="best-seller-text">
                    <span className="best-seller-text__bg">베스트 셀러</span>
                    <span className="best-seller-text__md">의식있는 아름다움</span>
                    <span className="best-seller-text__md">소중한 내 몸을 위한 바디케어</span>
                    <span className="best-seller-text__sm">{`베스트 제품들을 지금 바로 만나보세요 ->`}</span>
                </div>
                <div className="best-seller-item">
                    <img className="best-seller-item__img" src={item1} alt="best seller item" />
                    <span className="best-seller-item-text__bg">바디스크럽 워시 회상 300g</span>
                    <span className="best-seller-item-text__sm">{`<아로마틱 바디케어> 그린튤립 & 녹차, 바디워시`}</span>
                </div>
                <div className="best-seller-item">
                    <img className="best-seller-item__img" src={item2} alt="best seller item" />
                    <span className="best-seller-item-text__bg">마인드풀 헤어 퍼퓸 미스트 100ml</span>
                    <span className="best-seller-item-text__sm">군집된 생화의 생기로운 내음, 회상 헤어 퍼퓸 미스트</span>
                </div>
                <div className="best-seller-item">
                    <img className="best-seller-item__img" src={item3} alt="best seller item" />
                    <span className="best-seller-item-text__bg">{`<3+1> 샴푸바 (두피장벽강화) S21 검은콩...`}</span>
                    <span className="best-seller-item-text__sm">모발 탈락 수 59.48% 개선 검은콩 샴푸바</span>
                </div>
                <div className="best-seller-item">
                    <img className="best-seller-item__img" src={item4} alt="best seller item" />
                    <span className="best-seller-item-text__bg">{`<3+1> 샴푸바 (두피장벽강화) S21 검은콩...`}</span>
                    <span className="best-seller-item-text__sm">모발 탈락 수 59.48% 개선 검은콩 샴푸바</span>
                </div>
            </Slider>
        </div>
    );
};

export default BestSeller;