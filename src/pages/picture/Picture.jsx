
import React, { useState} from "react";
import { Helmet } from "react-helmet";

// componets
import Marquee from "react-fast-marquee";
import PopupContent from "../../components/pop-up/PopUp.jsx";
import ImageWithScrollTriggerAnimation from "../../hooks/MobilBg.jsx";


// style
import "./picture.scss";
import closePopUp from "../../assets/pictures/close.svg";
// swiper
import item4_1 from "../../assets/pictures/swiper/1.webp";
import item4_2 from "../../assets/pictures/swiper/2.webp";  
import item4_3 from "../../assets/pictures/swiper/3.webp";
import item4_4 from "../../assets/pictures/swiper/4.webp";
import item4_5 from "../../assets/pictures/swiper/5.webp";
import item4_6 from "../../assets/pictures/swiper/6.webp";
import item4_7 from "../../assets/pictures/swiper/7.webp";
import item4_8 from "../../assets/pictures/swiper/8.webp";
import item4_9 from "../../assets/pictures/swiper/9.webp";

// img
import flagsBh_1 from "../../assets/pictures/flag1.png";
import flagsBh_2 from "../../assets/pictures/flag2.png";
import iconBh from "../../assets/icon/behance.svg";
//nagrady
import contentImg_2 from "../../assets/pictures/nagrady/2.svg";
import contentImg_3 from "../../assets/pictures/nagrady/3.svg";
import contentImg_4 from "../../assets/pictures/nagrady/7.svg";
import contentImg_5 from "../../assets/pictures/nagrady/8.svg";
import contentImg_6 from "../../assets/pictures/nagrady/4.svg";
import contentImg_7 from "../../assets/pictures/nagrady/10.svg";
import contentImg_8 from "../../assets/pictures/nagrady/9.svg";
import contentImg_9 from "../../assets/pictures/nagrady/11.svg";
import contentImg_10 from "../../assets/pictures/nagrady/12.svg";
//images
import bob_1 from "../../assets/pictures/bob/item_1.webp"; 
import bob_2 from "../../assets/pictures/bob/item_2.webp"; 
import bob_3 from "../../assets/pictures/bob/item_3.webp"; 
import kubana_1 from "../../assets/pictures/kubana/item_1.webp"; 
import kubana_2 from "../../assets/pictures/kubana/item_2.webp"; 
import kubana_3 from "../../assets/pictures/kubana/item_3.webp";
import houses_1 from "../../assets/pictures/houses/item_1.webp";
import houses_2 from "../../assets/pictures/houses/item_2.webp";
import houses_3 from "../../assets/pictures/houses/item_3.webp";
import funBox_1 from "../../assets/pictures/fun box/item_1.webp";
import funBox_2 from "../../assets/pictures/fun box/item_2.webp";
import funBox_3 from "../../assets/pictures/fun box/item_3.webp";
import bloger_1 from "../../assets/pictures/bloger/item_1.webp";
import bloger_2 from "../../assets/pictures/bloger/item_2.webp";
import bloger_3 from "../../assets/pictures/bloger/item_3.webp";

import KASHIRSKIY_1 from "../../assets/pictures/KASHIRSKIY/item_1.webp";
import KASHIRSKIY_2 from "../../assets/pictures/KASHIRSKIY/item_2.webp";
import KASHIRSKIY_3 from "../../assets/pictures/KASHIRSKIY/item_3.webp";
import prism_1 from "../../assets/pictures/prism/item_1.webp";
import prism_2 from "../../assets/pictures/prism/item_2.webp";
import prism_3 from "../../assets/pictures/prism/item_3.webp";
import city_1 from "../../assets/pictures/city/item_1.webp";
import city_2 from "../../assets/pictures/city/item_1.webp";
import city_3 from "../../assets/pictures/city/item_1.webp";
import future_1 from "../../assets/pictures/future/item_1.webp";
import future_2 from "../../assets/pictures/future/item_2.webp";
import future_3 from "../../assets/pictures/future/item_3.webp";
import smalHome_1 from "../../assets/pictures/smalHome/item_1.webp";
import smalHome_2 from "../../assets/pictures/smalHome/item_2.webp";
import smalHome_3 from "../../assets/pictures/smalHome/item_3.webp";

import поднебесная_1 from "../../assets/pictures/podnebesnaya/item_1.webp";
import поднебесная_2 from "../../assets/pictures/podnebesnaya/item_2.webp";
import поднебесная_3 from "../../assets/pictures/podnebesnaya/item_3.webp";
import yunnan_1 from "../../assets/pictures/yunnan/item_1.webp";
import yunnan_2 from "../../assets/pictures/yunnan/item_2.webp";
import yunnan_3 from "../../assets/pictures/yunnan/item_3.webp";
import blue_1 from "../../assets/pictures/blue/item_1.webp";
import blue_2 from "../../assets/pictures/blue/item_2.webp";
import blue_3 from "../../assets/pictures/blue/item_3.webp";
import воркбокс_1 from "../../assets/pictures/workbox/item_1.webp";
import воркбокс_2 from "../../assets/pictures/workbox/item_2.webp";
import воркбокс_3 from "../../assets/pictures/workbox/item_3.webp";
import neva_1 from "../../assets/pictures/neva/item_1.webp";
import neva_2 from "../../assets/pictures/neva/item_2.webp";
import neva_3 from "../../assets/pictures/neva/item_3.webp";

function Picture() {
    
    const [selectedCard, setSelectedCard] = useState(null); // состояние для хранения выбранной карточки

    const handleCardClick = (cardId) => {
      setSelectedCard(cardId); // устанавливаем выбранную карточку при клике
    };

    const handleClosePopup = () => {
      setSelectedCard(null); // закрываем pop-up окно
    };


    return(
        <section className="picture__wrapper">
            <Helmet>
            <title>Q2studio - Уникальный дизайн интерьера</title>
            <meta
                name="description"
                content="Q2studio предлагает инновационные решения в дизайне интерьера с использованием 3D-визуализации. Создаём уникальные и стильные интерьеры для вашего дома или офиса, доступные по всему Краснодару и за его пределами. 📞 +79163131255"
            />
            <meta name="keywords" content="дизайн интерьера, уникальный интерьер, студия дизайна, Краснодар, 3D-визуализация, стильные интерьеры" />
            <meta name="author" content="Q2studio" />
            </Helmet>
            <section className="picture__container">
            <section className="picture__container picture__container__cards_1 item_3">

                <div  className='picture__container__hover' id="item-0" onClick={() => handleCardClick(1)}>
                    <ImageWithScrollTriggerAnimation/>
                    <img className='picture__item_1' src={bob_1} alt="" />
                    <img className='picture__item_2' src={bob_2} alt="" />
                    <img className='picture__item_3' src={bob_3} alt="" />
                    <div className="picture__contentent picture__contentent__bob">
                        <div className="picture__contentent__bottom picture__contentent__bob__dopsvoystvo"><div className="picture__contentent__bottom__title" ><h3>Площадь:<br />Адрес:</h3><h4>450 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img" style={{width:"60%"}}><img src={contentImg_3} alt="" /></div></div>
                        <div className="picture__contentent__top"><h3 >BOB</h3><p>проект офиса</p></div>
                    </div>
                </div>

                    <div className='picture__container__hover' id="item-1" onClick={() => handleCardClick(2)}>
                     <ImageWithScrollTriggerAnimation/>
                    <img className='picture__item_1' src={kubana_1} alt="" />
                    <img className='picture__item_2 picture__delay_2' src={kubana_2} alt="" />
                    <img className='picture__item_3 picture__delay_2' src={kubana_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__flags"><i className='img__flags'><img src={flagsBh_2} alt="" /></i><i className='img__social'><img src={iconBh} alt="" /></i></div>
                        <div className="picture__contentent__top"><h3>kubana</h3><p>проект инсталляций для рок-фестиваля</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Адрес:</h3><h4>г.Краснодар</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>

                    <div className='picture__container__hover' id="item-2" onClick={() => handleCardClick(3)}>
                    <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={houses_1} alt="" />
                    <img className='picture__item_2 picture__delay_3' src={houses_2} alt="" />
                    <img className='picture__item_3 picture__delay_3' src={houses_3} alt="" />  
                    <div className="picture__contentent">
                        <div className="picture__contentent__flags"><i className='img__flags'><img src={flagsBh_1} alt="" /></i><i className='img__social'><img src={iconBh} alt="" /></i></div>
                        <div className="picture__contentent__top"><h3>houses</h3><p>дизайн-проект офиса</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>100 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img" style={{width:"25%"}}><img src={contentImg_4} alt="" /></div></div>
                    </div>
                </div>

                    <div className='picture__container__hover' id="item-3" onClick={() => handleCardClick(4)}>
                       <ImageWithScrollTriggerAnimation/>  
                    <img className='picture__item_1' src={funBox_1} alt="" />
                    <img className='picture__item_2 picture__delay_4' src={funBox_2} alt="" />
                    <img className='picture__item_3 picture__delay_4' src={funBox_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>Fun box</h3><p>дизайн-проект апартаментов</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>150 м.кв<br />г.Сочи</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>

                    <div className='picture__container__hover' id="item-4" onClick={() => handleCardClick(5)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={bloger_1} alt="" />
                    <img className='picture__item_2 picture__delay_5' src={bloger_2} alt="" />
                    <img className='picture__item_3 picture__delay_5' src={bloger_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>BLOGER HOUSE</h3><p>дизайн-проект апартаментов</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>180 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>

            </section>
            <section className='picture__marquee_1 item_2'>
            <Marquee speed={110}><h4 className="picture__title">·Creativeinterior·Creativeinterior·Creativeinterior</h4></Marquee>
            <Marquee speed={80} gradient={false}>
                <img className="picture__images" src={item4_2} alt="" />
                <img className="picture__images" src={item4_3} alt="" />
                <img className="picture__images" src={item4_1} alt="" />
                <img className="picture__images" src={item4_4} alt="" />
                <img className="picture__images" src={item4_5} alt="" />
            </Marquee>
            <Marquee speed={150}><h4 className="picture__title">·gallery·design studio·gallery·design studio·gallery·design studio</h4></Marquee>
            </section>
            <section className="picture__container picture__container__cards_2 item_5">
                
                    <div className='picture__container__hover' id="item-0" onClick={() => handleCardClick(6)}>
                      <ImageWithScrollTriggerAnimation/>   
                    <img className='picture__item_1' src={prism_1} alt="" />
                    <img className='picture__item_2 picture__delay_2' src={prism_2} alt="" />
                    <img className='picture__item_3 picture__delay_2' src={prism_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>prism</h3><p>дизайн-проект кафе-бара</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>100 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"><img src={contentImg_5} alt="" /></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-1" onClick={() => handleCardClick(7)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={city_1} alt="" />
                    <img className='picture__item_2' src={city_2} alt="" />
                    <img className='picture__item_3' src={city_3} alt="" />
                    <div className="picture__contentent picture__contentent__bob">
                        <div className="picture__contentent__bottom picture__contentent__bob__dopsvoystvo"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>4500 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img" style={{width:"60%"}}><img src={contentImg_2} alt="" /></div></div>
                        <div className="picture__contentent__top"><h3>city</h3><p>дизайн-проект офиса</p></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-2" onClick={() => handleCardClick(8)}>
                      <ImageWithScrollTriggerAnimation/>   
                    <img className='picture__item_1' src={KASHIRSKIY_1} alt="" />
                    <img className='picture__item_2 picture__delay_3' src={KASHIRSKIY_2} alt="" />
                    <img className='picture__item_3 picture__delay_3' src={KASHIRSKIY_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>KASHIRSKIY</h3><p>дизайн-проект апартаментов</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>80 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"><img src={contentImg_10} alt="" /></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-3" onClick={() => handleCardClick(9)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={future_1} alt="" />
                    <img className='picture__item_2 picture__delay_5' src={future_2} alt="" />
                    <img className='picture__item_3 picture__delay_5' src={future_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>FUTURE</h3><p>концепт проект эко-дома</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>350 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"><img src={contentImg_6} alt="" /><img src={contentImg_7} alt="" /></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-4" onClick={() => handleCardClick(10)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={smalHome_1} alt="" />
                    <img className='picture__item_2 picture__delay_4' src={smalHome_2} alt="" />
                    <img className='picture__item_3 picture__delay_4' src={smalHome_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__flags"><i className='img__flags'><img src={flagsBh_1} alt="" /></i><i className='img__social'><img src={iconBh} alt="" /></i></div>
                        <div className="picture__contentent__top"><h3>SMALL HOME</h3><p>дизайн-проект дома</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>138 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"><img src={contentImg_8} alt="" /></div></div>
                    </div>
                </div>
            </section>

            <section className='picture__marquee_2 item_4'>
                <Marquee speed={110}><h4 className="picture__title">·Creativeinterior·Creativeinterior·Creativeinterior</h4></Marquee>
                <Marquee speed={80} gradient={false}>
                <img className="picture__images" src={item4_6} alt="" />
                <img className="picture__images" src={item4_7} alt="" />
                <img className="picture__images" src={item4_8} alt="" />
                <img className="picture__images" src={item4_9} alt="" />
                <img className="picture__images" src={item4_1} alt="" />
                </Marquee>
                <Marquee speed={150}><h4 className="picture__title">·gallery·design studio·gallery·design studio·gallery·design studio</h4></Marquee>
            </section>

            <section className="picture__container picture__container__cards_3 item_1">
                    <div className='picture__container__hover' id="item-0" onClick={() => handleCardClick(11)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={yunnan_1} alt="" />
                    <img className='picture__item_2 picture__delay_2' src={yunnan_2} alt="" />
                    <img className='picture__item_3 picture__delay_2' src={yunnan_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>YUnnan</h3><p>Концепт проект яхт - клуба</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Адрес:</h3><h4>г.Краснодар</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-1" onClick={() => handleCardClick(12)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={blue_1} alt="" />
                    <img className='picture__item_2' src={blue_2} alt="" />
                    <img className='picture__item_3' src={blue_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>BLUE</h3><p>дизайн-проект аппартаментов</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>56 м.кв<br />г.Краснодар</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-2" onClick={() => handleCardClick(13)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1 ' src={поднебесная_1} alt="" />
                    <img className='picture__item_2 picture__delay_3' src={поднебесная_2} alt="" />
                    <img className='picture__item_3 picture__delay_3' src={поднебесная_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>Поднебесная</h3><p>дизайн-проект студии звукозаписи</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>100 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-3" onClick={() => handleCardClick(14)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={воркбокс_1} alt="" />
                    <img className='picture__item_2 picture__delay_5' src={воркбокс_2} alt="" />
                    <img className='picture__item_3 picture__delay_5' src={воркбокс_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>workbox</h3><p>дизайн-проект офиса Росатома</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Адрес:</h3><h4>г.Москва</h4></div><div className="picture__contentent__bottom__img"></div></div>
                    </div>
                </div>
                    <div className='picture__container__hover' id="item-4" onClick={() => handleCardClick(15)}>
                     <ImageWithScrollTriggerAnimation/>    
                    <img className='picture__item_1' src={neva_1} alt="" />
                    <img className='picture__item_2 picture__delay_4' src={neva_2} alt="" />
                    <img className='picture__item_3 picture__delay_4' src={neva_3} alt="" />
                    <div className="picture__contentent">
                        <div className="picture__contentent__top"><h3>NEVA TOWERS</h3><p>дизайн-проект аппартаментов</p></div>
                        <div className="picture__contentent__bottom"><div className="picture__contentent__bottom__title"><h3>Площадь:<br />Адрес:</h3><h4>120 м.кв<br />г.Москва</h4></div><div className="picture__contentent__bottom__img"><img src={contentImg_9} alt="" /></div></div>
                    </div>
                </div>
            </section>
            
            </section>
            {selectedCard && (
                <div className="popup-background">
                    <div className="popup-content">
                        
                        <button className="close-button" onClick={handleClosePopup}>
                            <img src={closePopUp} alt="" />
                        </button>
                        <PopupContent cardId={selectedCard} />
                    </div>
                </div>
            )}    
        </section>
    )
}

export default Picture;