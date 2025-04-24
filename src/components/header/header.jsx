// bibliotek
import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { scroller } from 'react-scroll';


import MagneticSocial from "../magneticSocial/MagneticSocial.js";

// style
import './header.scss';
// images
import homeHeader from "../../assets/header/home.svg";
import telega from "../../assets/icon/telegram.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";

function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };
    return (
      <>
      <HeaderNav shown={isShown} setshown={setIsShown}/>
      <header className="header">
        <Link onClick={scrollToTop} to="/"><h2 className="logo">Q2<span>Studio</span></h2></Link>
        <button className="burger" onClick={handleClick}>
          {isShown && <HeaderNav />}
          <span className='burger__item_1'></span>
          <span className='burger__item_2'></span>
          <span className='burger__item_3'></span>
        </button>
        <div className="header__social">
          <MagneticSocial>
            <a href="https://t.me/Galchik" rel="noreferrer" target="_blank"><img  src={telega} alt="Команда профессиональных дизайнеров интерьера, влюбленных в минимализм, создающие современные и элегантные пространства. Более 7 лет опыта работы" /></a>
          </MagneticSocial>
          <MagneticSocial>
          <a href="https://wa.me/79163131255" rel="noreferrer" target="_blank"><img  src={whatsapp} alt="студия дизайна интерьера в Москве, специализирующаяся на создании уникальных дизайн-проектов для жилых и коммерческих помещений." /></a>
          </MagneticSocial>
        </div>
      </header>
      </>
    );
  }
  
  export default Header;

  function HeaderNav({shown}){
    
    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

    return(
      <nav className={shown ? "nav__wrapper active" : "nav__wrapper"}>
          <ul >
            <li onClick={scrollToTop}><Link className='nav_item' to="/"><img src={homeHeader} alt="" /><h5>Home</h5></Link></li>
            <li onClick={scrollToTop}><Link to='/picture'>Gallery</Link></li>
            <li><Link
              to="/"
              onClick={() =>
              scroller.scrollTo('services', {
              smooth: true,
              offset: 0,
              })}
            >
              Services
            </Link></li>

            <li><Link 
              to="/#"
              onClick={() =>
              scroller.scrollTo('team', {
              smooth: true,
              offset: 0,
              })}
            >
              Team
            </Link></li>
            <li><Link
              to="/#"
              onClick={() =>
              scroller.scrollTo('contact', {
              smooth: true,
              offset: 0,
              })}
            >
              Contact
            </Link></li>
          </ul>
      </nav>
    )
  }