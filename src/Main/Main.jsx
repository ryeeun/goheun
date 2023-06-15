import React from "react";

import './css/Main.css';
import Header from "../Header/Header";
import TopSlider from "./components/TopSlider";
import banner1 from "./img/banner1.jpg";
import content1 from "./img/content1.jpg";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <TopSlider />
            <img className="main-banner" src={banner1} alt="배너1" />
            <img className="main-content" src={content1} alt="컨텐트1" />
        </div>
    )
};

export default Main;