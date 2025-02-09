// bibliotek
import React from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from "react";

// images
import awards__item_1 from "../../assets/nagragy/default/1.svg";
import awards__item_2 from "../../assets/nagragy/default/2.svg";
import awards__item_3 from "../../assets/nagragy/default/3.svg";
import awards__item_4 from "../../assets/nagragy/default/4.svg";
import awards__item_5 from "../../assets/nagragy/default/5.svg";
import awards__item_6 from "../../assets/nagragy/default/6.svg";
import awards__item_7 from "../../assets/nagragy/default/7.svg";
import awards__item_8 from "../../assets/nagragy/default/8.svg";
import awards__item_9 from "../../assets/nagragy/default/9.svg";
import awards__item_10 from "../../assets/nagragy/default/10.svg";
import awards__item_11 from "../../assets/nagragy/default/11.svg";
import awards__item_12 from "../../assets/nagragy/default/12.svg";

// style
import "./awards.scss";

gsap.registerPlugin(ScrollTrigger);

function Awards(){
    const awardsText =useRef(null);
    useEffect(()=>{
        const el = awardsText.current;
        gsap.fromTo(el, {opacity: 0, scale: 0.8, x:400}, { scale:1, opacity: 1, x:0, duration:3, scrollTrigger: {
        trigger: el,
        scrub:5,
        start: "top 70%",
        end: "+=200",
        }})
    }, []);
    return(
       <section className="awards__wrapper" id="contact">
        <h6 ref={awardsText}>Awards</h6>
            <div className="awards__container">
                <Marquee 
                    direction="right"
                    speed={150}
                    align="center"
                >
                        <article className="awards__item">
                            <img src={awards__item_1} alt="Исходя из этого, выглядеть они будут совершенно по-разному, пишет Виктория Макарова, автор книги «Дизайн помещений: стили интерьера" />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_2} alt="Современный дизайн интерьера легко превратить в другой схожий стиль. Дизайн интерьера — это не волшебная материализация идеальной обстановки вашего дома, а тяжкий труд: дизайнера нужно найти" />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_3} alt="Современный интерьер загородного дома с зелеными акцентами в КП Софийские сады - 238 м2 - портфолио студии дизайна Лучшие дизайнеры интерьера, заказывайте дизайн интерьера квартиры и дома, читайте отзывы, смотрите портфолио частных дизайнеров"/>
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_4} alt="Диза́йн интерье́ра — разновидность дизайн-проектирования, предметом которого является структура архитектурного интерьера Читайте о стилях дизайна интерьера и их особенностях skillbox media Скачайте и используйте 500 000+ Дизайн Интерьера стоковых видео бесплатно" />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_5} alt="Сообщество дизайнеров и архитекторов, которые ищут вдохновения и идеи для реализации своих проектов. Дизайн удачно сочетает в себе брутальный минимализм, простоту и функциональность интерьера. Продумаем дизайн коттеджа до мелочей и создадим функциональное пространство." />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_6} alt="Лучшие дизайнеры города, закажите дизайн интерьера любых помещений, любой сложности! · Выезд ко времени. 23 мастера в команде. Доступные цены. Соблюдение сроков. 3D Визуализация. Планировочные решения. Авторский надзор Дизайн интерьера в нужном вам стиле. Мебель. Визуализация. 20м2+ · 95% заказывают повторно. 1500 проектов в день. Выполнение за 24 часа. Быстрый заказ" />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_7} alt="Профи – бесплатный сервис поиска фрилансеров. Достоверные отзывы и рейтинги. · Уже 14 млн клиентов. Более 8 млн отзывов. 3 млн специалистов. 900 видов услуг. На рынке с 2014 года. Работают очно и онлайн" />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_8} alt="Дизайн удачно сочетает в себе брутальный минимализм, простоту и функциональность интерьера Вместе с дизайнерами разбираемся в особенностях дизайна квартиры в современном стиле и смотрим фото модных интерьеров 2023 года. Сделать дизайн-проект квартиры или положиться во время ремонта на собственные таланты и чутье — непростое решение." />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_9} alt="Студия дизайна. Интерьер кабинета c рабочим местом в классическом стиле смотреть это форма искусства, которая включает в себя творческое использование пространства для создания удобной, функциональной" />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_10} alt="Хороший дизайн интерьера учитывает цветотип характера заказчика и грамотно реализует его в интерьерной палитре. Продумаем дизайн коттеджа до мелочей и создадим функциональное пространство." />
                        </article>
                        <article className="awards__item">
                            <img src={awards__item_11} alt="Статьи об архитектуре и дизайне интерьеров с фото реализованных проектов на Самая большая коллекция дизайна интерьеров и идей по декору. Тысячи вдохновляющих фотографий и подборок интерьеров от лучших дизайнеров по всему миру." />
                        </article>    
                        <article className="awards__item">
                            <img src={awards__item_12} alt="Houzz — новый взгляд на дизайн дома. Более 21 миллиона фотографий интерьеров, предметов дизайна и свежих идей, а также профессиональные дизайнеры прямо Идеи дизайна и миллионы фото домашних интерьеров в бесплатном приложении" />
                        </article>                     
                </Marquee>
            </div>
       </section>
    )
}
export default Awards;