import React from "react";

import '../css/Menulist.css';

const Menulist = () => {
    return(
        <div className="menulist">
            <ul className="menulist-first">
                <li>BEST</li>
                <li>FACE</li>
                <li>BODY</li>
                <li>HAIR</li>
                <li>LIFT</li>
                <li>GIFT</li>
            </ul>
            <ul className="menulist-second">
                <li>아카이브</li>
                <li>공지사항</li>
                <li>맞춤구독 리뷰</li>
                <li>일반제품 리뷰</li>
                <li>자주 묻는 질문</li>
            </ul>
            <ul className="menulist-third">
                <li>서비스체험</li>
                <li>맞춤구독</li>
            </ul>
        </div>
    )
};

export default Menulist;