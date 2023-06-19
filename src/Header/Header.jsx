import React, { useState } from "react";

import './css/Header.css';
import cart from './img/cart.png';
import heart from './img/heart.png';
import search from './img/search.png';
import Menulist from './components/Menulist';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return(
        <div className="header">
            <button className="header-logo">TOUN 28</button>
            <ul className="header-menu" onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <Menulist isOpen={isOpen}/>
                <li className="header-menu-item">STORE</li>
                <li className="header-menu-item">ARCHIVE</li>
                <li className="header-menu-item">맞춤구독</li>
                <li className="header-menu-item">톤28미션</li>
                <li className="header-menu-item">B2B 문의</li>
                <li className="header-menu-item">내 피부진단/구독 정보</li>
                <li className="header-menu-item">마이케어</li>
                <li className="header-menu-item">로그인</li>
                <li>
                    <img className="header-icon" src={search} alt="" />
                </li>
                <li>
                    <img className="header-icon" src={heart} alt="" />
                </li>
                <li>
                    <img className="header-icon" src={cart} alt="" />
                </li>
            </ul>
        </div>
    )
};

export default Header;