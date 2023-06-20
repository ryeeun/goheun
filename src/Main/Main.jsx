import React from "react";

import './css/Main.css';
import Header from "../Header/Header";
import TopSlider from "./components/TopSlider";
import banner1 from "./img/banner1.jpg";
import content1 from "./img/content1.jpg";
import content2 from "./img/content2.jpg";
import content3 from "./img/content3.jpg";
import content4 from "./img/content4.jpg";
import banner2 from "./img/banner2.jpg";
import footer from "./img/footer.jpg";
import BestSeller from "./components/BestSeller";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <TopSlider />
            <img className="main-banner" src={banner1} alt="배너1" />
            <img className="main-content" src={content1} alt="컨텐트1" />
            <BestSeller />
            <img className="main-content" src={content2} alt="컨텐트2" />
            <img className="main-content" src={content4} alt="컨텐트3" />
            <img className="main-content" src={content3} alt="컨텐트3" />
            <img className="main-banner" src={banner2} alt="배너2" />
            <img className="main-footer" src={footer} alt="푸터" />
        </div>
    )
};

export default Main;